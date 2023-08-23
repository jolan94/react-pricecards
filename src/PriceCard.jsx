import React from 'react';

const PriceCard = ({ planDetails }) => {
  const { planName, price, features, unavailableOptions } = planDetails;

  return (
    <div className="price-card">
      <h2 className="plan-title">{planName}</h2>
      <p className="price">Price: {price}/month</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>✔️{feature}</li>
        ))}
      </ul>

      <ul className="unavailable-options">
        {unavailableOptions.map((option, index) => (
          <li key={index}>✖️{option}</li>
        ))}
      </ul>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default PriceCard;
