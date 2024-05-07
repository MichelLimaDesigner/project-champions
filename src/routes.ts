import { Router } from "express";
import { getPlayer } from "./controllers/players/get-players-controller";
import { getPlayerById } from "./controllers/players/get-player-by-id-controller";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);

export default router;
