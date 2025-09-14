import express from "express";
import { createMcpRouter } from "@/router/mcp.js";
import { getConfig } from "@/config/config.js";

const app = express();

app.use(express.json());
app.use('/mcp', createMcpRouter());
app.listen(getConfig().serverPort);