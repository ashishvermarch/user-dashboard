import { InitialStateTypes } from "./types";

export const initialState: InitialStateTypes = {
  user: {
    token: "",
    userDetails: {
      id: null,
      email: "",
      first_name: "",
      last_name: "",
      avatar: "",
    },
  },
};
