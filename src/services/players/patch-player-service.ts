import { HttpResponse } from "../../models/http-response-model";
import { PlayerStatisticsModel } from "../../models/player-model";
import { findAndModifyPlayer } from "../../repositories/players/patch-player-repository";
import { badRequest, notModified, ok } from "../../utils/http-helper";

export const patchPlayerService = async (
  id: number,
  statistics: PlayerStatisticsModel
): Promise<HttpResponse> => {
  let response = null;
  const data = await findAndModifyPlayer(id, statistics);

  if (data) {
    if (Object.keys(data).length === 0) response = badRequest();
    else response = await ok(data);
  } else {
    response = badRequest();
  }

  return response;
};
