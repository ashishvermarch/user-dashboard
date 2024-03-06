import { userInstance } from "./axios";

const InstanceTypeMapping = {
  userInstance: userInstance,
};

type InstanceTypes = keyof typeof InstanceTypeMapping;

const fetcher = (instanceType: InstanceTypes) => {
  let axios = InstanceTypeMapping[instanceType];

  return {
    get: async <TResData = any>(url: string, params = {}) => {
      return axios
        .request<TResData>({
          url: url,
          method: "GET",
          params,
        })
        .then((response) => response)
        .catch((err) => {
          throw err;
        });
    },

    post: async <TReqData = any, TResData = any>(
      url: string,
      data: TReqData,
      params = {},
      headers: any = {}
    ) => {
      return axios
        .request<TResData>({
          url: url,
          method: "POST",
          data,
          params,
          headers,
        })
        .then((res) => res)
        .catch((err) => {
          throw err;
        });
    },
  };
};

export default fetcher;
