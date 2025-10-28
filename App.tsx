
import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ClaimAirdrop from './pages/ClaimAirdrop';
import CreateAirdrop from './pages/CreateAirdrop';
import { WalletProvider } from './context/WalletContext';

function App() {
  return (
    <WalletProvider>
      <HashRouter>
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="claim" element={<ClaimAirdrop />} />
                <Route path="create" element={<CreateAirdrop />} />
              </Route>
            </Routes>
          </main>
        </div>
      </HashRouter>
    </WalletProvider>
  );
}

const Layout: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Outlet />
    </div>
  );
};

export default App;
