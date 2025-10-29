export interface Airdrop {
  id: string;
  tokenName: string;
  tokenSymbol: string;
  tokenLogoUrl: string;
  totalAmount: number;
  userAllocation: number;
  isClaimed: boolean;
  isEligible: boolean;
  endDate: string;
}
