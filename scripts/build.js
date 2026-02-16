const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Set environment variables
process.env.CI = 'false';
process.env.GENERATE_SOURCEMAP = 'false';
process.env.INLINE_RUNTIME_CHUNK = 'false';

console.log('Starting build process...');

// Run react-scripts build
try {
  execSync('CI=false GENERATE_SOURCEMAP=false INLINE_RUNTIME_CHUNK=false react-scripts build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
