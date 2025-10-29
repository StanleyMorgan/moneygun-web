import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons';

const Home: React.FC = () => {
  return (
    <div className="text-center py-16 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block">The Modern Way to</span>
        <span className="block text-primary-600">Manage Airdrops</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
        Seamlessly claim your entitled tokens and distribute your own with our secure, decentralized platform.
      </p>
      <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/claim"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-lg"
        >
          Claim Airdrops
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Link>
        <Link
          to="/create"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-lg"
        >
          Create an Airdrop
        </Link>
      </div>
      <div className="mt-20">
        <h2 className="text-xl font-semibold text-gray-700">Powered By</h2>
        <div className="mt-4 flex justify-center items-center space-x-6 text-gray-500">
          <p className="font-mono text-sm">@reown/appkit</p>
          <p className="font-mono text-sm">@reown/appkit-adapter-ethers</p>
          <p className="font-mono text-sm">@reown/appkit-adapter-wagmi</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
