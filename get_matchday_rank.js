// alle erforderlichen Pakete laden
const puppeteer = require('puppeteer');
//var prompt = require('prompt');
var fs = require('fs');
var path = require('path');
//var request = require('request');

//input Container
var clublist = './clublist.csv';
var output_file = './output_rankings.csv';

var inputLine = 0;

//Import
fs.readFile(path.resolve("./") + '//' + clublist, 'latin1', function (err, data) {
    if (err) throw err;
    var lines = data.trim().split('\r');
    var lastLine = lines.slice(-1)[0];

    console.log('\nEs gibt ' + lines.length + ' Zeilen in der csv-Datei.\n');

    var counter = lines.length - 1 - inputLine;

    const separating = "|";

    async function getplayers() {
        const browser = await puppeteer.launch({
            headless: true
        });

        const team_selector = "#verein_head > div > div.dataHeader.dataExtended > div.dataMain > div > div.dataName > h1 > span";

        const matchday_rank_selector = "div.responsive-table > table > tbody > tr:nth-child(INDEX) > td:nth-child(5)";





        // Start des Loops
        for (var i = 0; i < 18; i++) {


            var link = "https://www.transfermarkt.de" + lines[i].split(',').slice()[0];

            link = link.replace("startseite", "spielplan");

            console.log("\x1b[33m\nWir sind jetzt bei " + link + "\x1b[0m\n");

            const page = await browser.newPage();

            await page.goto(link, {
                waitUntil: 'networkidle2'
            });
            await page.waitFor(1500);

            let html_content = await page.evaluate(el => el.innerHTML, await page.$('body'));
            await page.waitFor(1 * 1500);

            //get team name
            try {
                var team = await page.evaluate((sel) => {
                    let element = document.querySelector(sel);
                    if (!element)
                        return;
                    return document.querySelector(sel).innerHTML;
                }, team_selector);
                console.log("Aktuell: " + team);
            } catch (error) {
                var team = "";
            }

            //team name to outputfile
            fs.appendFileSync(output_file, [[team, separating, ]], {
                'flag': 'a'
            });


            for (var j = 1; j <= 34; j++) {


                let single_line_sel = matchday_rank_selector.replace(/INDEX/g, j);
                try {
                    var matchday_rank = await page.evaluate((sel) => {
                        let element = document.querySelector(sel);
                        if (!element)
                            return;
                        return document.querySelector(sel).textContent.replace(/\D/g, "");
                    }, single_line_sel);
                    console.log("Spieltag " + j + ": " + matchday_rank);
                } catch (error) {
                    var matchday_rank = "";
                }


                // matday rank to outputile (34 times for each matchday) in one line
                fs.appendFileSync(output_file, [[, matchday_rank, separating, ]], {
                    'flag': 'a'
                });
            }

            await page.close();

            fs.appendFileSync(output_file, [['\r\n']], {
                'flag': 'a'
            });
        }

        browser.close();
    }

    getplayers();
})
