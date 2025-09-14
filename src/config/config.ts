interface Config {
    name: string;
    version: string;
    serverPort: number;
}

export function getConfig(): Config {
    return {
        name: "lollipop",
        version: "1.0.0",
        serverPort: 3000
    }
}