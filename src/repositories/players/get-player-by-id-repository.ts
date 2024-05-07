import { PlayerModel } from "../../models/player-model";
import { database } from "./players-database";

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};
