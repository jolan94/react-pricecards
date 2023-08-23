import React from 'react';
import PriceCard from './PriceCard';
import styles from './App';

const plans = [
  {
    planName: 'Free',
    price: '$0',
    features: [
      'Single user',
      'Unlimited Access',
      '50GB Storage',
      'Community Access',
    ],
    unavailableOptions: [
      'Unlimited Private projects',
      'Free Sub domains',
      'Dedicated phone support',
      'Monthly status report',
    ],
  },
  {
    planName: 'Pro',
    price: '$9',
    features: [
      'Single user',
      'Unlimited Access',
      '50GB Storage',
      'Community Access',
      'Unlimited Private projects',
      'Free Sub domains',
    ],
    unavailableOptions: ['Dedicated phone support', 'Monthly status report'],
  },
  {
    planName: 'Plus',
    price: '$49',
    features: [
      'Single user',
      'Unlimited Access',
      '50GB Storage',
      'Community Access',
      'Unlimited Private projects',
      'Free Sub domains',
      'Dedicated phone support',
      'Monthly status report',
    ],
    unavailableOptions: [],
  },
];

const App = () => {
  return (
    <div className="app">
      {plans.map((plan, index) => (
        <PriceCard key={index} planDetails={plan} />
      ))}
    </div>
  );
};

export default App;
