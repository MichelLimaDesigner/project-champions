import { PlayerModel } from "../../models/player-model";
import { insertPlayer } from "../../repositories/players/insert-player-repository";
import * as HttpResponse from "../../utils/http-helper";

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await insertPlayer(player);
    response = HttpResponse.created();
  } else {
    response = HttpResponse.badRequest();
  }

  return response;
};
