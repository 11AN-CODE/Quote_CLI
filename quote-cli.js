const axios=require('axios');
const yargs=require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chalk=require('chalk').default;
const ora=require('ora').default;

const API_URL='https://zenquotes.io/api/random';


// --- Configuration and Argument Parsing using Yargs ---


const argv=yargs(hideBin(process.argv))

.command(
    '$0',
    'Fetches a random quote, optionally filtered by author (note: filtering requires a paid plan, but we use the flag for demonstration).',
    (yargs)=>{
        return yargs
        .option('author',{
            alias:'a',
            type:'String',
            description: 'Filter the quote by a specific author.',
            default: 'Any'
        });
    }
)
.help('h')
.alias('h', 'help')
.version('v', '1.0.0')
.alias('v', 'version')
.strict() // Ensures only defined arguments are used
.argv;


/**
 * Fetches a quote from the API.
 * Uses axios for clean, promise-based API calls.
 * @param {string} _author The author name (ignored by free API, but included for demonstration)
 * @returns {Promise<Object>} A promise that resolves with the quote data.
 */

async function fetchQuote(author) {
    let url = API_URL;

    try{
        const response=await axios.get(url,{
            timeout:7000,
            headers:{'User-Agent': 'Quote CLI'}
        });
        return response.data[0];// because api return array 

    }
    catch(error){
        if(error.response){
            throw new Error(`API Error: ${error.response.status} - Could not retrieve quote.`);
        }
        else if (error.request) {
            throw new Error('Network Error: Could not connect to the quote service.');
        } else {
            throw new Error(`An unexpected error occurred: ${error.message}`);
        }

    }

}

async function main() {
    // 1. Get the parsed arguments from yargs
    const { author } = argv;
    
    // ORA: Initialize and start the loading spinner. This shows the user the script is running.
    const spinner = ora(chalk.bold(`Fetching a random quote...`)).start();

    try {
        // 2. Fetch the data
        const quoteData = await fetchQuote(author);

        // Stop the spinner and mark it as successful
        spinner.stopAndPersist({ symbol: chalk.green('✔') }); 

        const quote = quoteData.content;
        const authorName = quoteData.author;
        
        // 3. Display the results with Chalk styling
        
        // CHALK: Use colors and modifiers to make the output readable and engaging.
        const formattedQuote = chalk.hex('#FF99CC').italic(`\n\n"${quote}"`);
        const formattedAuthor = chalk.hex('#CCFFCC').bold(`— ${authorName}\n`);

        console.log(formattedQuote);
        console.log(formattedAuthor);

    } catch (error) {
        // Stop the spinner and mark it as a failure
        spinner.fail(chalk.red.bold('Quote Fetch Failed!'));
        
        // Display a clean error message
        console.error(`\n${chalk.red('Error:')} ${error.message}`);
        process.exit(1);
    }
}

main();
