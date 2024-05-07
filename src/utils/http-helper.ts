import { HttpResponse } from "../models/http-response-model";

const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: "successful",
  };
};

const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null,
  };
};

export { ok, created, noContent, badRequest };
