import { Request, Response } from "express";
import { deletePlayerService } from "../../services/players/delete-player-service";

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
