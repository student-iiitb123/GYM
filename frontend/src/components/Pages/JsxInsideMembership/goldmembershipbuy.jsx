import React from 'react';
import "../CssInsideMembership/goldmembershipbuy.css"

export default function SilverMembership() {
  return (
    <div className="Gold-membership-container">
      <h1 className="Gold-title">Gold Membership</h1>
      <p className="Gold-welcome">Welcome to the Gold Membership page!</p>

      <ul className="Gold-benefits">
        <li>Access to basic features</li>
        <li>Community support</li>
        <li>Monthly newsletter</li>
      </ul>

      <p className="Gold-upgrade">Upgrade anytime Diamond for more benefits.</p>
    </div>
  );
}
