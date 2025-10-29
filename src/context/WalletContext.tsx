import React, { createContext, useContext, ReactNode } from 'react';
// FIX: `ReownAppkitProvider` and `useWallet` are exported from `@reown/appkit`, not `@reown/appkit-adapter-wagmi`.
import { ReownAppkitProvider, useWallet as useReownWallet } from '@reown/appkit';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Define the shape of the wallet state for our application context
interface WalletState {
  isConnected: boolean;
  address: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

// Create the React Context
const WalletContext = createContext<WalletState | undefined>(undefined);

// Setup wagmi config for @reown/appkit
const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

// A component that bridges the @reown/appkit context to our custom WalletContext
const WalletStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { address, isConnected, open, disconnect } = useReownWallet();

  const value = {
    isConnected: isConnected,
    address: address || null,
    connectWallet: open,
    disconnectWallet: disconnect,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

// The main provider component that wraps the application
export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // We assume the adapter setup is straightforward. This is a hypothetical but common pattern.
  const wagmiAdapter = new WagmiAdapter({
      // FIX: The constructor property for the wagmi configuration object is `config`, not `wagmiConfig`.
      config: config,
      queryClient: queryClient,
  });

  return (
    <QueryClientProvider client={queryClient}>
        <ReownAppkitProvider adapter={wagmiAdapter}>
            <WalletStateProvider>{children}</WalletStateProvider>
        </ReownAppkitProvider>
    </QueryClientProvider>
  );
};

// The custom hook that components will use to access wallet state and actions
export const useWallet = (): WalletState => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
