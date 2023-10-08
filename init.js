#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Function to copy files recursively
const copyTemplate = (source, destination) => {
  fs.mkdirSync(destination);
  const files = fs.readdirSync(source);
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    if (fs.statSync(sourcePath).isDirectory()) {
      copyTemplate(sourcePath, destPath);
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  }

  fs.writeFileSync(destination + '/public/.htaccess', `<ifModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule (.*) index.html [QSA,L]
</ifModule>`);

  fs.writeFileSync(destination +'/.gitignore', `.DS_Store
  node_modules
  
  # Log files
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  pnpm-debug.log*
  
  # Editor directories and files
  .idea
  .vscode
  *.suo
  *.ntvs*
  *.njsproj
  *.sln
  *.sw?
  `);
};

// Usage: init <project-name>
const projectName = process.argv[2];

if (!projectName) {
  console.error('Please provide a name for your project.');
  process.exit(1);
}

const templatePath = path.join(__dirname, 'project');
const projectPath = path.join(process.cwd(), projectName);

copyTemplate(templatePath, projectPath);

console.log(`Project '${projectName}' started in ${projectPath}`);