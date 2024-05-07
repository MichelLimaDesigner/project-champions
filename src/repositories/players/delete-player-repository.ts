import fs from "fs/promises";
import { PlayerModel } from "../../models/player-model";

export const deleteOnePlayer = async (id: number): Promise<boolean> => {
  const database = await fs.readFile("./src/data/players-data.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(database);
  const index = players.findIndex((player) => player.id === id);

  if (index !== -1) {
    players.splice(index, 1);
    return true;
  }

  return false;
};
