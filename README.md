# MCP Server

A Model Context Protocol (MCP) server implementation that provides basic tools and utilities.

## Features

This MCP server provides the following tools:

- **echo**: Echo back the input text
- **uppercase**: Convert text to uppercase
- **calculate**: Perform basic mathematical calculations (add, subtract, multiply, divide)

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the server:
   ```bash
   npm run build
   ```

## Usage

### Development
Run the server in development mode:
```bash
npm run dev
```

### Production
Build and run the server:
```bash
npm run build
npm start
```

## Configuration

To use this MCP server with Claude Desktop or other MCP clients, add the following to your MCP configuration:

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "node",
      "args": ["/path/to/your/mcp-server/dist/index.js"]
    }
  }
}
```

## Examples

### Echo Tool
```json
{
  "name": "echo",
  "arguments": {
    "message": "Hello, World!"
  }
}
```

### Uppercase Tool
```json
{
  "name": "uppercase",
  "arguments": {
    "text": "hello world"
  }
}
```

### Calculate Tool
```json
{
  "name": "calculate",
  "arguments": {
    "operation": "add",
    "a": 5,
    "b": 3
  }
}
```

## License

MIT