
import React from 'react';
import { useWallet } from '../context/WalletContext';
import { WalletIcon } from './icons';

const ConnectWalletButton: React.FC = () => {
  const { isConnected, address, connectWallet, disconnectWallet } = useWallet();

  const shortenAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center space-x-2">
        <span className="px-3 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-md hidden sm:block">
          {shortenAddress(address)}
        </span>
        <button
          onClick={disconnectWallet}
          className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connectWallet}
      className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
    >
      <WalletIcon className="h-5 w-5 mr-2" />
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;
