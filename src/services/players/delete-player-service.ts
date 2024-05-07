import { HttpResponse } from "../../models/http-response-model";
import { deleteOnePlayer } from "../../repositories/players/delete-player-respository";
import { ok } from "../../utils/http-helper";

export const deletePlayerService = async (
  id: number
): Promise<HttpResponse> => {
  let response = null;

  await deleteOnePlayer(id);

  response = ok({});

  return response;
};
