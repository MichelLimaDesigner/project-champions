import { findAllPlayersRepository } from "../../repositories/players/get-player-list-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getPlayerService = async () => {
  let response = null;
  const data = await findAllPlayersRepository();

  if (data) response = await HttpResponse.ok(data);
  else response = await HttpResponse.noContent();

  return response;
};
