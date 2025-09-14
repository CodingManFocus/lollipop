import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getConfig } from "@/config/config.js";
import { registerThings } from "@/tools/register.js";

export function createMcpServer(): McpServer {
  const server = new McpServer({
    name: getConfig().name,
    version: getConfig().version,
  });

  registerThings(server);

  return server;
}
