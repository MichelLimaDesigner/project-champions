import { database } from "./players-database";

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((player) => player.id === id);

  if (index !== -1) database.splice(index, 1);
};
