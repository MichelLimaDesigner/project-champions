import { HttpResponse } from "../../models/http-response-model";
import { findAllClubs } from "../../repositories/clubs/get-clubs-repository";
import { noContent, ok } from "../../utils/http-helper";

export const getClubsService = async (): Promise<HttpResponse> => {
  let response = null;

  const data = await findAllClubs();

  if (data) response = await ok(data);
  else response = await noContent();

  return response;
};
