📝 Quote of the Day CLI Tool
A publicly deployed Node.js Command Line Interface (CLI) tool.

This CLI tool fetches random quotes from the zenquotes.io API. It demonstrates the complete lifecycle of a developer tool, from initial coding to public distribution on the npm registry.

It showcases the use of key Node.js external libraries: Yargs for command parsing, Axios for robust API requests, Chalk for color formatting, and Ora for elegant loading indicators.

✨ Features
Fetches a random quote by default.

Provides clear, colorful, and animated feedback in the terminal.

📦 Installation (For End Users)

Since this project has been published to the npm registry, you do not need to clone the repository or install local dependencies.

Run the following command globally in your terminal:

npm install -g open-quote-cli


▶️ Usage
The script is run using the node command.

1. Fetch a Random Quote (Default)
If no author is specified, a random quote is fetched.

node quote-cli.js

2. Filter by Author
Use the --author flag (-a) to search for a quote by a specific person.

# Using the full flag name
node quote-cli.js --author "Albert Einstein"

# Using the alias
node quote-cli.js -a "Mark Twain"
