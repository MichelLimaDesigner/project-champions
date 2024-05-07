import { database } from "../../repositories/players/players-database";
import * as HttpResponse from "../../utils/http-helper";

export const getPlayerService = async () => {
  let response = null;

  if (database) response = await HttpResponse.ok(database);
  else response = await HttpResponse.noContent();

  return response;
};
