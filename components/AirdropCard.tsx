
import React, { useState } from 'react';
import { Airdrop } from '../types';
import { CheckCircleIcon, ClockIcon } from './icons';

interface AirdropCardProps {
  airdrop: Airdrop;
}

const AirdropCard: React.FC<AirdropCardProps> = ({ airdrop }) => {
  const [isClaiming, setIsClaiming] = useState(false);
  const [isClaimed, setIsClaimed] = useState(airdrop.isClaimed);

  const handleClaim = () => {
    setIsClaiming(true);
    // Simulate a network request
    setTimeout(() => {
      setIsClaiming(false);
      setIsClaimed(true);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img className="h-12 w-12 rounded-full object-cover" src={airdrop.tokenLogoUrl} alt={`${airdrop.tokenName} logo`} />
            <div>
              <h3 className="text-lg font-bold text-gray-900">{airdrop.tokenName}</h3>
              <p className="text-sm text-gray-500">${airdrop.tokenSymbol}</p>
            </div>
          </div>
          {isClaimed ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Claimed
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Eligible
            </span>
          )}
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-medium text-gray-500">Your Allocation</span>
            <span className="text-xl font-bold text-gray-900">{airdrop.userAllocation.toLocaleString()} ${airdrop.tokenSymbol}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-medium text-gray-500">Claim Ends</span>
            <span className="text-sm text-gray-600">{airdrop.endDate}</span>
          </div>
        </div>

        <div className="mt-6">
          {isClaimed ? (
            <button
              disabled
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 cursor-not-allowed"
            >
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              Successfully Claimed
            </button>
          ) : (
            <button
              onClick={handleClaim}
              disabled={isClaiming}
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-300 disabled:cursor-not-allowed transition-colors"
            >
              {isClaiming ? <ClockIcon className="animate-spin h-5 w-5 mr-2" /> : null}
              {isClaiming ? 'Claiming...' : `Claim ${airdrop.userAllocation.toLocaleString()} $${airdrop.tokenSymbol}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AirdropCard;
