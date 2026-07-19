import { useState, useCallback, useEffect } from 'react';

// DApp connector API types (using any for simplicity in this demo)
declare global {
  interface Window {
    midnight?: {
      mnLace?: any;
    };
  }
}

export function useMidnight() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(0); // 0 = open, 1 = matched, 2 = no deal
  const [agreedPrice, setAgreedPrice] = useState<number | null>(null);

  // Attempt to reconnect if already connected
  useEffect(() => {
    // In a real app, you'd check localStorage or try silent reconnect here
  }, []);

  const connect = useCallback(async () => {
    try {
      setError('');
      console.log('Checking for Midnight Lace extension...', window.midnight);
      
      if (!window.midnight?.mnLace) {
        // Fallback for demo purposes if the extension won't inject
        console.warn('Lace wallet not found. Using fallback demo mode.');
        setAddress('mn_addr_preview1ssc6nzmd2f3vackyuzul4mh35kh60rxzzzmguz50fdqxfxtuf3sqp6xe35');
        setConnected(true);
        return;
      }

      // Connect to Lace
      const api = await window.midnight.mnLace.enable();
      
      // Get address
      const addresses = await api.state().addresses();
      if (addresses && addresses.length > 0) {
        setAddress(addresses[0]);
        setConnected(true);
      } else {
        throw new Error('No address found in wallet. Please create or unlock a wallet in Lace.');
      }
    } catch (err: any) {
      console.error('Wallet connection error:', err);
      // If user rejected or something failed, we still fallback for the demo
      setAddress('mn_addr_preview1ssc6nzmd2f3vackyuzul4mh35kh60rxzzzmguz50fdqxfxtuf3sqp6xe35');
      setConnected(true);
    }
  }, []);

  const disconnect = useCallback(() => {
    setConnected(false);
    setAddress('');
    setError('');
  }, []);

  // Mock implementation for the UI demo since we don't have the contract deployed in this browser context yet
  // In a real app, this would use @midnight-ntwrk/midnight-js-contracts
  const callMatchOffer = useCallback(async (role: 'buyer' | 'seller', price: number) => {
    setError('');
    
    // Simulate ZK proof generation and network delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // For demo purposes, we randomly simulate a match or failure, or deterministically based on price
    if (price >= 100) {
      setStatus(1); // matched
      setAgreedPrice(price);
    } else {
      setStatus(2); // no deal
      setAgreedPrice(null);
    }
  }, []);

  const callOpenNegotiation = useCallback(async () => {
    setError('');
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus(0);
    setAgreedPrice(null);
  }, []);

  return {
    connected,
    address,
    error,
    connect,
    disconnect,
    callMatchOffer,
    callOpenNegotiation,
    status,
    agreedPrice
  };
}
