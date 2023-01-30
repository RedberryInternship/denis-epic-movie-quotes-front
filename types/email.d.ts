export type Email = {
  id: number;
  address: string;
  isPrimary: boolean;
  isVerified: boolean;
};

export type EmailFromDatabase = {
  id: number;
  address: string;
  is_primary: boolean;
  verified_at: string | null;
};
