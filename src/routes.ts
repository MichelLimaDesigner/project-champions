import { Router } from "express";
import { getPlayer } from "./controllers/players/get-players-controller";
import { getPlayerById } from "./controllers/players/get-player-by-id-controller";
import { postPlayer } from "./controllers/players/post-player-controller";

const router = Router();

router.get("/players", getPlayer);
router.post("/players", postPlayer);

router.get("/players/:id", getPlayerById);

export default router;
