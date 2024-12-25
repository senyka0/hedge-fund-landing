export interface VaultData {
  timestamp: string;
  grossAssetValue: number;
  "Performance": number;
  numberOfShares: number;
  priceIsValid: boolean;
  "BTCUSDT Benchmark Value"?: number;
  price?: number;
}

export interface DataProps {
  data: Array<VaultData>;
}
