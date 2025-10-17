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

Once installed, you can run the tool directly using the open-quote-cli command.

Fetch a Random Quote (Default)

If no options are specified, a random quote is fetched.

open-quote-cli



🧑‍💻 Development / Contributing

If you wish to work on the source code, you can clone this repository:

Clone the repository:

git clone: https://github.com/11AN-CODE/Quote_CLI
cd open-quote-cli


Install dependencies:

npm install


Run locally (using node to execute the source file):

node quote-cli.js

