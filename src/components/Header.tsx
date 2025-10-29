import React from 'react';
import { NavLink } from 'react-router-dom';
import ConnectWalletButton from './ConnectWalletButton';
import { DropIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="flex items-center space-x-2 text-primary-600">
              <DropIcon className="h-8 w-8" />
              <span className="font-bold text-xl text-gray-800">Airdrop Manager</span>
            </NavLink>
            <nav className="hidden md:flex space-x-6">
              <NavLink 
                to="/claim" 
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? 'text-primary-600' : 'text-gray-500 hover:text-gray-700'}`
                }
              >
                Claim Airdrops
              </NavLink>
              <NavLink 
                to="/create" 
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? 'text-primary-600' : 'text-gray-500 hover:text-gray-700'}`
                }
              >
                Create Airdrop
              </NavLink>
            </nav>
          </div>
          <div className="flex items-center">
            <ConnectWalletButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
