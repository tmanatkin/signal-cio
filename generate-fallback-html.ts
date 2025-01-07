import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const buildDir = path.join(__dirname, "dist");
const indexFile = path.join(buildDir, "index.html");

// Define the additional HTML files
const additionalFiles = ["about.html"];

if (fs.existsSync(indexFile)) {
  additionalFiles.forEach((fileName) => {
    const targetFile = path.join(buildDir, fileName);
    fs.copyFileSync(indexFile, targetFile);
    console.log(`Created: ${fileName}`);
  });
  console.log("Done.");
} else {
  console.error("index.html not found in the build directory.");
}
