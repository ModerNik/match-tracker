import { AxiosResponse } from "axios";
import { api } from "../axios";
import { BaseResponse } from "../types/base";
import { GetMathesResponse } from "../types/matches";

export const apiMatches = {
  getMatches: async function (): Promise<
    AxiosResponse<BaseResponse<GetMathesResponse>>
  > {
    return api.get("/fronttemp");
  },
};
