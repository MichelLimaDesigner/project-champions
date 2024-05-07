import { database } from "./players-database";

export const deleteOnePlayer = async (id: number): Promise<boolean> => {
  const index = database.findIndex((player) => player.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};
