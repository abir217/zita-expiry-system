import React from "react";
import Logo from './assets/logo.svg';

export default function App(){
  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <img src={Logo} alt="ZITA Logo" className="logo"/>
          <h1>ZITA Telecom</h1>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h2>Recharge Expiry — Plans & Offers</h2>
          <p className="lead">Choose a plan before your recharge expires.</p>
        </section>

        <section className="plans">
          <div className="card">
            <h3>Retro 200 Mbps <span className="tag">50% OFF</span></h3>
            <p className="desc">Limited-time retro plan.</p>
            <div className="price">
              <div className="was">Was <span className="strike">₹1000</span></div>
              <div className="now">Now <strong>₹500</strong></div>
            </div>
            <ul className="features">
              <li>200 Mbps</li>
              <li>Unlimited (FUP)</li>
              <li>Priority Support</li>
            </ul>
            <button className="btn">Recharge ₹500</button>
          </div>

          <div className="card">
            <h3>Starter 50 Mbps</h3>
            <p className="desc">Affordable plan for light usage.</p>
            <div className="price now">₹199</div>
            <ul className="features">
              <li>50 Mbps</li>
              <li>Good for browsing</li>
              <li>7-day validity</li>
            </ul>
            <button className="btn">Recharge ₹199</button>
          </div>

          <div className="card">
            <h3>Pro 500 Mbps</h3>
            <p className="desc">Fast connection for multiple devices.</p>
            <div className="price now">₹1499</div>
            <ul className="features">
              <li>500 Mbps</li>
              <li>No throttling</li>
              <li>30-day validity</li>
            </ul>
            <button className="btn">Recharge ₹1499</button>
          </div>
        </section>

        <section className="addons">
          <h4>Premium Add-ons</h4>
          <div className="addon-list">
            <div className="addon">
              <h5>Premium Speed</h5>
              <p>Extra speed and priority.</p>
              <button className="btn small">Add ₹99</button>
            </div>
            <div className="addon">
              <h5>Family Pack</h5>
              <p>Share across devices.</p>
              <button className="btn small">Add ₹199</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>© ZITA Telecom — zita-portal-final</div>
      </footer>
    </div>
  );
}
