import dotenv from "dotenv";
import createApp from "./app";

dotenv.config();
const port = process.env.PORT;

const app = createApp();

app.listen(port, () => {
  console.log(`🚨 Server running at port http://localhost:${port}`);
});
