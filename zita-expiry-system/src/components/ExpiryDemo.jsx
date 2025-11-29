import React, { useState } from 'react';

export default function ExpiryDemo(){
  const [openPlan, setOpenPlan] = useState(null);
  const [selectedSubplan, setSelectedSubplan] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);

  const user = {
    name: 'Arit Ghosh',
    plan: 'Modern_100Mbps',
    expiry: '27 Oct 2025',
    accountId: 'ACC12345',
    macAddress: 'AA:BB:CC:DD:EE:FF',
    availablePlans: [
      { id: 'retro', name: 'Retro', price: 299 },
      { id: 'classic', name: 'Classic', price: 499 },
      { id: 'modern', name: 'Modern', price: 899 }
    ]
  };

  const subplans = {
    retro: [
      { speed: '20 Mbps', price: 299 },
      { speed: '40 Mbps', price: 350 },
      { speed: '60 Mbps', price: 450 },
      { speed: '200 Mbps', price: 500, original: 1000, offer: '50% OFF' }
    ],
    classic: [
      { speed: '20 Mbps', price: 499 },
      { speed: '100 Mbps', price: 699 },
      { speed: '200 Mbps', price: 999 }
    ],
    modern: [
      { speed: '150 Mbps', price: 899 },
      { speed: '200 Mbps', price: 1099 },
      { speed: '300 Mbps', price: 1499 }
    ]
  };

  const durationsByPlan = {
    retro: [
      { label: '1 Month', multiplier: 1, free: 0 },
      { label: '3 Month (3+1)', multiplier: 3, free: 1 },
      { label: '6 Month (6+2)', multiplier: 6, free: 2 }
    ],
    classic: [
      { label: '1 Month', multiplier: 1, free: 0 },
      { label: '3 Month', multiplier: 3, free: 0 },
      { label: '6 Month', multiplier: 6, free: 0 }
    ],
    modern: [
      { label: '1 Month', multiplier: 1, free: 0 },
      { label: '3 Month', multiplier: 3, free: 0 },
      { label: '6 Month', multiplier: 6, free: 0 }
    ]
  };

  function openModal(planId){
    setOpenPlan(planId);
    setSelectedSubplan(null);
    setSelectedDuration(null);
  }
  function closeModal(){
    setOpenPlan(null);
    setSelectedSubplan(null);
    setSelectedDuration(null);
  }

  const calculateFinal = () => {
    if(!selectedSubplan || !selectedDuration) return null;
    const paidMonths = selectedDuration.multiplier;
    const charge = selectedSubplan.price * paidMonths;
    const totalMonths = paidMonths + (selectedDuration.free || 0);
    return { charge, totalMonths };
  };

  const final = calculateFinal();

  return (
    <div style={{minHeight:'100vh'}} className="p-8">
      <div className="card mx-auto max-w-4xl">
        <div style={{textAlign:'center'}} className="mb-6">
          <img src="/zz.png" alt="ZITA" style={{width:120, filter:'drop-shadow(0 6px 30px rgba(0,180,255,0.14))'}} />
          <h1 style={{margin:'8px 0', color:'#bfe9ff'}}>ZITA Telecom - Recharge Expired</h1>
          <p style={{color:'#9fc8ff'}}>Choose a plan to restore internet access — Diwali offers active ✨</p>
        </div>

        <div className="card mb-6">
          <div style={{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Current Plan:</strong> {user.plan}</div>
            <div><strong>Expired On:</strong> {user.expiry}</div>
            <div><strong>Account ID:</strong> {user.accountId}</div>
            <div><strong>Router MAC:</strong> {user.macAddress}</div>
          </div>
        </div>

        <h2 style={{marginBottom:12,color:'#cfeffd'}}>Available Plans</h2>
        <div className="plans mb-4">
          {user.availablePlans.map(plan => (
            <div key={plan.id} className="plan">
              {plan.id === 'classic' && <div className="badge">Most Popular</div>}
              {plan.id === 'retro' && <div className="offer-badge">50% OFF 200Mbps</div>}
              <h3>{plan.name}</h3>
              <div className="starting">Starting ₹{Math.min(...subplans[plan.id].map(s=>s.price))}</div>
              <div style={{marginTop:10}}>
                <button className="btn" onClick={()=>openModal(plan.id)}>View Subplans</button>
              </div>
              {plan.id === 'classic' && (
                <div style={{marginTop:12,display:'flex',gap:8,alignItems:'center'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Disney%2B_Hotstar_logo.svg" alt="hotstar" style={{width:28}}/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Hoichoi_logo.svg" alt="hoichoi" style={{width:28}}/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/ZEE5_logo.svg" alt="zee5" style={{width:28}}/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/SonyLIV_logo.svg" alt="sonyliv" style={{width:28}}/>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="footer-help">Need help? Contact ZITA Support on WhatsApp</div>
      </div>

      {openPlan && (
        <div className="modal-backdrop">
          <div className="modal">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
              <h3 style={{margin:0}}>{openPlan.charAt(0).toUpperCase()+openPlan.slice(1)} Subplans</h3>
              <button className="btn" onClick={closeModal} style={{padding:'6px 10px'}}>Close</button>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              {(subplans[openPlan]||[]).map((sp,idx)=>{
                const selected = selectedSubplan===sp;
                return (
                  <div key={idx} className={`subtile ${selected?'selected':''}`} onClick={()=>{ setSelectedSubplan(sp); setSelectedDuration(null); }}>
                    <div style={{fontWeight:700}}>{sp.speed}</div>
                    <div style={{marginTop:6}}>
                      {sp.original ? (
                        <span><span className="price-old">₹{sp.original}</span><span className="price-new">₹{sp.price}</span></span>
                      ) : <span className="price-new">₹{sp.price}</span>}
                    </div>
                    {sp.offer && <div style={{marginTop:6,fontSize:12,color:'#9ff7d6'}}>{sp.offer}</div>}
                  </div>
                )
              })}
            </div>

            <div style={{marginTop:12}}>
              <h4 style={{margin:'6px 0'}}>Choose Duration</h4>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                {(durationsByPlan[openPlan]||[]).map((d,ix)=>{
                  const sel = selectedDuration===d;
                  return (
                    <div key={ix} onClick={()=>setSelectedDuration(d)} className={`subtile ${sel?'selected':''}`} style={{minWidth:120}}>
                      <div style={{fontWeight:700}}>{d.label}</div>
                      {d.free? <div style={{fontSize:12,color:'#9ff7d6'}}>+{d.free} month free</div> : null}
                    </div>
                  )
                })}
              </div>
            </div>

            {selectedSubplan && selectedDuration && (
              <div className="summary">
                <div style={{fontWeight:800}}>Summary</div>
                <div style={{marginTop:6}}>{selectedSubplan.speed} • {selectedDuration.label}</div>
                <div style={{marginTop:6,fontSize:18,color:'#9ff7d6'}}>Total pay: ₹{selectedSubplan.price * selectedDuration.multiplier}</div>
                <div style={{fontSize:13,color:'#bfe9ff'}}>Total months credited: {selectedDuration.multiplier + (selectedDuration.free||0)}</div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  )
}
