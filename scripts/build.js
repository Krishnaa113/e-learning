const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Set environment variables
process.env.CI = 'false';
process.env.GENERATE_SOURCEMAP = 'false';
process.env.INLINE_RUNTIME_CHUNK = 'false';

console.log('Starting build process...');

// Use npx to run react-scripts from local node_modules
try {
  execSync('npx react-scripts build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
