import { HttpResponse } from "../../models/http-response-model";
import { deleteOnePlayer } from "../../repositories/players/delete-player-repository";
import { badRequest, ok } from "../../utils/http-helper";

export const deletePlayerService = async (
  id: number
): Promise<HttpResponse> => {
  let response = null;

  const isDeleted = await deleteOnePlayer(id);

  if (isDeleted) response = await ok({});
  else response = await badRequest();

  return response;
};
