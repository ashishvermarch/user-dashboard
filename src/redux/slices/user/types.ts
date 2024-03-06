export type TokenType = string;

export type UserDetailsType = {
  id: number | null;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type InitialStateTypes = {
  user: {
    token: TokenType;
    userDetails: UserDetailsType;
  };
};
