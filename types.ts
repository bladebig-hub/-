export enum AppView {
  HOME = 'HOME',
  NFC_SCANNING = 'NFC_SCANNING',
  CHECK_IN_SUCCESS = 'CHECK_IN_SUCCESS',
  REWARD_SELECTION = 'REWARD_SELECTION',
  REWARD_CLAIMED = 'REWARD_CLAIMED',
  MAP_VIEW = 'MAP_VIEW'
}

export interface Merchant {
  id: string;
  name: string;
  category: string;
  distance: string;
  imageUrl: string;
  offer: string;
  description?: string;
}

export interface Reward {
  type: 'RED_PACKET' | 'COUPON';
  value: string; // e.g., "¥5.00" or "20% OFF"
  title: string;
  description: string;
}

export interface UserState {
  checkInCount: number;
  totalTarget: number;
  points: number;
  lastCheckInMerchant: Merchant | null;
  history: Merchant[];
}