import { AppDispatch } from '../redux/store';
import { updateCryptoPrice } from '../redux/features/cryptoSlice';
import { initialCryptoData } from './mockData';

class WebSocketSimulator {
  private interval: number | null = null;
  private dispatch: AppDispatch;
  
  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }
  
  connect() {
    // Simulate WebSocket connection by updating prices every 1-2 seconds
    this.interval = setInterval(() => {
      // Randomly select a cryptocurrency to update
      const cryptoIndex = Math.floor(Math.random() * initialCryptoData.length);
      const crypto = initialCryptoData[cryptoIndex];
      
      // Generate random price changes
      const priceChange = crypto.price * (Math.random() * 0.02 - 0.01); // -1% to +1%
      const newPrice = Math.max(0.01, crypto.price + priceChange);
      
      // Generate random percentage changes
      const change1h = crypto.change1h + (Math.random() * 0.4 - 0.2); // -0.2% to +0.2%
      const change24h = crypto.change24h + (Math.random() * 0.6 - 0.3); // -0.3% to +0.3%
      const change7d = crypto.change7d + (Math.random() * 1 - 0.5); // -0.5% to +0.5%
      
      // Generate random volume change
      const volumeChange = crypto.volume24h * (Math.random() * 0.1 - 0.05); // -5% to +5%
      const newVolume = Math.max(1000, crypto.volume24h + volumeChange);
      
      // Dispatch update to Redux
      this.dispatch(updateCryptoPrice({
        id: crypto.id,
        price: newPrice,
        change1h,
        change24h,
        change7d,
        volume24h: newVolume,
      }));
    }, 1000 + Math.random() * 1000); // Random interval between 1-2 seconds
  }
  
  disconnect() {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

export function initializeWebSocketSimulator(dispatch: AppDispatch) {
  const simulator = new WebSocketSimulator(dispatch);
  simulator.connect();
  
  // Return a cleanup function
  return () => simulator.disconnect();
}