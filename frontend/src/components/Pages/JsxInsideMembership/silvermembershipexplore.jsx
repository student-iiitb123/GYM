import React from 'react';
import "../CssInsideMembership/silvermembershipexplore.css"

export default function SilverMembership() {
  return (
    <div className="silver-membership-container">
      <h1 className="silver-title">Silver Membership</h1>
      <p className="silver-welcome">Welcome to the Silver Membership page!</p>

      <ul className="silver-benefits">
        <li>Access to basic features</li>
        <li>Community support</li>
        <li>Monthly newsletter</li>
      </ul>

      <p className="silver-upgrade">Upgrade anytime to Gold or Diamond for more benefits.</p>
    </div>
  );
}
