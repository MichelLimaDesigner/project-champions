import { PlayerModel } from "../../models/player-model";
import { findPlayerById } from "./get-player-by-id-repository";
import { database } from "./players-database";

export const insertPlayer = async (
  player: PlayerModel
): Promise<PlayerModel | undefined> => {
  database.push(player);

  const dataPlayer = await findPlayerById(player.id);
  return dataPlayer;
};
