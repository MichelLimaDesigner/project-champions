import express, { Request, Response, json } from "express";

function createApp() {
  const app = express();
  app.use(json());

  app.get("/", (req: Request, res: Response) => {
    res.json({ player: "Hello World" });
  });

  return app;
}

export default createApp;
