import dataProvider from "../../dataProvider";

let fetcher = dataProvider("userInstance");

export const getUser = async (id: number) => {
  return fetcher.get(`/users/${id}`);
};
