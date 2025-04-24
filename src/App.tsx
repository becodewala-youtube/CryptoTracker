import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Info, Moon, Search, Settings, Sun } from 'lucide-react';
import Header from './components/Header';
import CryptoTable from './components/CryptoTable';
import { initializeWebSocketSimulator } from './utils/websocketSimulator';
import { AppDispatch } from './redux/store';
import { selectIsDarkMode, setSearchQuery, toggleDarkMode } from './redux/features/cryptoSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const isDarkMode = useSelector(selectIsDarkMode);

  useEffect(() => {
    const cleanup = initializeWebSocketSimulator(dispatch);
    return () => cleanup();
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold">Today's Cryptocurrency Prices</h1>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search cryptocurrency"
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className={`w-full sm:w-auto py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white placeholder-gray-400' 
                    : 'bg-white text-gray-900 placeholder-gray-500'
                }`}
              />
              <Search className={`absolute left-3 top-2.5 h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <button className={`p-2 rounded-full transition ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
            }`}>
              <Settings className="h-5 w-5" />
            </button>
            <button 
              onClick={() => dispatch(toggleDarkMode())}
              className={`p-2 rounded-full transition ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button className={`p-2 rounded-full transition ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
            }`}>
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>
        <CryptoTable />
      </main>
      <footer className={isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2025 CryptoTracker. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className={`transition ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Terms</a>
              <a href="#" className={`transition ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Privacy</a>
              <a href="#" className={`transition ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;