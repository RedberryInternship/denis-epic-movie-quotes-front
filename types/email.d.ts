export type Email = {
  address: string;
  isPrimary: boolean;
  isVerified: boolean;
};

export type EmailFromDatabase = {
  address: string;
  is_primary: boolean;
  verified_at: string | null;
};
