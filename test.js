// Quick test to verify the server compiles and runs
console.log('Testing MCP server...');

// Test that the built server can be imported
import('./dist/index.js').then(() => {
  console.log('✅ Server compiled successfully!');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Error importing server:', error);
  process.exit(1);
});