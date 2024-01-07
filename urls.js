const fs = require('fs');
const axios = require('axios');
const { URL } = require('url');

if (process.argv.length !== 3) {
  console.error('Usage: node urls.js FILENAME');
  process.exit(1);
}

const inputFilename = process.argv[2];

async function fetchAndSavePage(url) {
  try {
    const response = await axios.get(url);
    const { hostname } = new URL(url);
    const outputFilename = `${hostname}.txt`;

    fs.writeFileSync(outputFilename, response.data, 'utf8');
    console.log(`Saved HTML from ${url} to ${outputFilename}`);
  } catch (error) {
    console.error(`Error fetching or saving HTML from ${url}: ${error.message}`);
  }
}

async function processUrlsFile(filename) {
  try {
    const content = fs.readFileSync(filename, 'utf8');

    const urls = content.split('\n').filter(Boolean);
    
    if (urls.length === 0) {
      console.error('No valid URLs found in the input file.');
      return;
    }

    for (const url of urls) {
      await fetchAndSavePage(url);
    }
  } catch (error) {
    console.error(`Error reading file ${filename}: ${error.message}`);
  }
}

processUrlsFile(inputFilename);
