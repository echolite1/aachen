const puppeteer = require('puppeteer');
const prompt = require('prompt-sync')();
// creating date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyyy;
// main variables
const constantLink = 'https://termine.staedteregion-aachen.de/auslaenderamt/';
var defaultTime = 500;
// other functions
function delay(time) {
    return new Promise(function(resolve) { setTimeout(resolve, time) });
}

// ************************************** MAIN ******************************************************
async function findAppointment(){

    const browser = await puppeteer.launch({headless: false, slowMo: 500}); // [_][_][_][_][_][_][_][_] );//
    const page = await browser.newPage();
    console.clear();
    console.log('- - - - - NEW SCAN ' + today + ' - - - - -')

    await try1();

    async function try1() {

            var link = constantLink;
            await page.goto(link);
            await delay(defaultTime);
            
            // [anzeigeNummer] = await page.$x('//*[@id="ry"]/body/rebuy-app/div/div/ry-product-list/ry-product-list-electronic/div[1]/div/div/h2');
            // nummer = await anzeigeNummer.getProperty('textContent');
            // anzeigen = await nummer.jsonValue();
            // anzeigen = parseInt(anzeigen.substr(23, 25)); // here we understand how much available
            // console.log(year, 'Total:', anzeigen); // need it here

        return;
    }
    browser.close();
}
// ************************************** MAIN ******************************************************
findAppointment();