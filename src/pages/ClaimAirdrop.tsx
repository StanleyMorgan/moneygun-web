import React from 'react';
import { Airdrop } from '../types';
import AirdropCard from '../components/AirdropCard';
import { useWallet } from '../context/WalletContext';

const MOCK_AIRDROPS: Airdrop[] = [
  {
    id: '1',
    tokenName: 'Jupiter',
    tokenSymbol: 'JUP',
    tokenLogoUrl: 'https://picsum.photos/seed/JUP/100/100',
    totalAmount: 1000000000,
    userAllocation: 1337,
    isClaimed: false,
    isEligible: true,
    endDate: '2024-12-31',
  },
  {
    id: '2',
    tokenName: 'StarkNet',
    tokenSymbol: 'STRK',
    tokenLogoUrl: 'https://picsum.photos/seed/STRK/100/100',
    totalAmount: 700000000,
    userAllocation: 650,
    isClaimed: true,
    isEligible: true,
    endDate: '2024-11-30',
  },
  {
    id: '3',
    tokenName: 'LayerZero',
    tokenSymbol: 'ZRO',
    tokenLogoUrl: 'https://picsum.photos/seed/ZRO/100/100',
    totalAmount: 1500000000,
    userAllocation: 800,
    isClaimed: false,
    isEligible: true,
    endDate: '2025-01-15',
  },
];

const ClaimAirdrop: React.FC = () => {
  const { isConnected, connectWallet } = useWallet();

  if (!isConnected) {
    return (
      <div className="text-center py-24 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Connect Your Wallet</h2>
        <p className="mt-2 text-gray-600">Please connect your wallet to view and claim your eligible airdrops.</p>
        <button
          onClick={connectWallet}
          className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="pb-8 border-b border-gray-200 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Claim Your Airdrops</h1>
        <p className="mt-2 max-w-2xl text-md text-gray-500">Here is a list of airdrops you are eligible for. Claim them before they expire!</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_AIRDROPS.filter(a => a.isEligible).map((airdrop) => (
          <AirdropCard key={airdrop.id} airdrop={airdrop} />
        ))}
      </div>
    </div>
  );
};

export default ClaimAirdrop;
