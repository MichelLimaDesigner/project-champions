import { PlayerModel } from "../../models/player-model";
import { database } from "./players-database";

export const findAllPlayersRepository = async (): Promise<PlayerModel[]> => {
  return database;
};
