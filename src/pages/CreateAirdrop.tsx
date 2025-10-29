import React, { useState } from 'react';
import { useWallet } from '../context/WalletContext';

const CreateAirdrop: React.FC = () => {
  const { isConnected, connectWallet } = useWallet();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const [tokenAddress, setTokenAddress] = useState('');
  const [airdropData, setAirdropData] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);
    
    // Validate inputs
    if (!tokenAddress.startsWith('0x') || tokenAddress.length !== 42) {
      setError('Please enter a valid token address.');
      setIsSubmitting(false);
      return;
    }
    if (!airdropData.trim()) {
        setError('Airdrop data cannot be empty.');
        setIsSubmitting(false);
        return;
    }
    if (!endDate) {
        setError('Please select an end date.');
        setIsSubmitting(false);
        return;
    }

    // Simulate contract deployment
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess('Airdrop contract successfully created!');
      setTokenAddress('');
      setAirdropData('');
      setEndDate('');
    }, 2000);
  };
  
  const renderContent = () => {
    if (!isConnected) {
      return (
        <div className="text-center py-24">
          <h2 className="text-2xl font-bold text-gray-800">Connect Your Wallet</h2>
          <p className="mt-2 text-gray-600">You must connect your wallet to create a new airdrop campaign.</p>
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="tokenAddress" className="block text-sm font-medium text-gray-700">
            Token Contract Address
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="tokenAddress"
              id="tokenAddress"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="0x..."
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="airdropData" className="block text-sm font-medium text-gray-700">
            Airdrop Data (CSV format)
          </label>
          <div className="mt-1">
            <textarea
              rows={10}
              name="airdropData"
              id="airdropData"
              value={airdropData}
              onChange={(e) => setAirdropData(e.target.value)}
              className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="address,amount
0xabc...,1000
0xdef...,2500"
              required
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">Provide a list of recipient addresses and their token amounts in CSV format.</p>
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            Claim End Date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
        </div>
        
        {error && <div className="rounded-md bg-red-50 p-4"><p className="text-sm text-red-700">{error}</p></div>}
        {success && <div className="rounded-md bg-green-50 p-4"><p className="text-sm text-green-700">{success}</p></div>}

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-300"
          >
            {isSubmitting ? 'Creating Airdrop...' : 'Create Airdrop'}
          </button>
        </div>
      </form>
    );
  };
  
  return (
    <div>
      <div className="pb-8 border-b border-gray-200 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create a New Airdrop</h1>
        <p className="mt-2 max-w-2xl text-md text-gray-500">Configure the details below to launch your airdrop campaign on-chain.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default CreateAirdrop;
