import React, { useState, useEffect } from 'react';

const LiveTradingData = () => {
  const [marketData, setMarketData] = useState([
    {
      name: 'NIFTY 50',
      baseValue: 19420.56,
      value: '₹19420.56',
      change: '+128.61 (0.77%)',
      isPositive: true
    },
    {
      name: 'SENSEX',
      baseValue: 65899.73,
      value: '₹65899.73',
      change: '+227.20 (0.48%)',
      isPositive: true
    },
    {
      name: 'BANK NIFTY',
      baseValue: 44119.55,
      value: '₹44119.55',
      change: '-68.60 (-0.33%)',
      isPositive: false
    },
    {
      name: 'GOLD',
      baseValue: 62470,
      value: '₹62470',
      change: '+121 (0.25%)',
      isPositive: true
    }
  ]);

  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Function to generate random price changes
  const generateRandomChange = (baseValue) => {
    const changePercent = (Math.random() - 0.5) * 0.02; // Random change between -1% to +1%
    const changeValue = baseValue * changePercent;
    const newValue = baseValue + changeValue;
    const changePercentDisplay = (changePercent * 100).toFixed(2);
    const changeValueDisplay = Math.abs(changeValue).toFixed(2);
    
    return {
      newValue: newValue,
      changeText: `${changeValue >= 0 ? '+' : '-'}${changeValueDisplay} (${changeValue >= 0 ? '+' : ''}${changePercentDisplay}%)`,
      isPositive: changeValue >= 0
    };
  };

  // Update market data every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prevData => 
        prevData.map(item => {
          const change = generateRandomChange(item.baseValue);
          return {
            ...item,
            value: `₹${change.newValue.toFixed(2)}`,
            change: change.changeText,
            isPositive: change.isPositive
          };
        })
      );
      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-base font-medium text-gray-700">LIVE</span>
            </div>
            <span className="text-sm text-gray-500">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Updates every 3 seconds
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {marketData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border transition-all duration-300 hover:shadow-md">
              <div className="text-base text-gray-600 mb-1">{item.name}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
              <div className={`text-base font-medium transition-colors duration-300 ${
                item.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTradingData;