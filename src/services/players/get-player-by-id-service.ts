import { PlayerModel } from "../../models/player-model";
import { findPlayerById } from "../../repositories/players/get-player-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getPlayerByIdService = async (id: number) => {
  const data: PlayerModel | undefined = await findPlayerById(id);
  let response = null;

  if (data) response = HttpResponse.ok(data);
  else response = HttpResponse.noContent();

  return response;
};
