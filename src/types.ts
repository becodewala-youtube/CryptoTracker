export interface ChartData {
  time: string;
  price: number;
}

export interface Crypto {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  logoUrl: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  volumeCrypto: number;
  circulatingSupply: number;
  maxSupply: number | null;
  chartData: ChartData[];
  isFavorite: boolean;
}