require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var env = process.env;
var userInput1 = process.argv[2];
var userInput2 = process.argv.slice(3)
var artist = "";
switch (userInput1) {
    case "concert-this":
        artist = userInput2.join(", ");
        break;
}
var bandsInTownQueryURL = "https://rest.bandsintown.com/artists/?" + artist + "&/events?app_id=" + env.BANDSINTOWN_API_KEY;
axios.get(bandsInTownQueryURL)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error)
    });
