import { HttpResponse } from "../models/http-response-model";

const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export { ok, noContent };
