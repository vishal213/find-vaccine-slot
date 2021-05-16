const https = require("https");
const exec = require("child_process").exec;

var isWin = process.platform === "win32";

var date = getTodayDate();
var args = process.argv.slice(2);

var pincode = "125001"; //By default searches for Hisar Zone
var song_played = true; // By default song will *NOT* be played
var song_url = "https://www.youtube.com/watch?v=IQEDu8SPHao~"; // Default song= Bhaag DK bose
if (args.length > 0) {
  pincode = args[0];
}
if (args.length > 1) {
  try {
    if (Number(args[1])) {
      song_played = false;
    }
  } catch (err) {
    console.log(err);
  }
}
if (args.length > 2) {
  song_url = args[2];
}

console.log(
  "date=" +
    date +
    ", pincode=" +
    pincode +
    ", play song=" +
    !song_played +
    ", song URL=" +
    song_url
);

function writeResp() {
  https
    .get(
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=" +
        pincode +
        "&date=" +
        date,
      (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          var slot_found = false;

          try {
            JSON.parse(data).centers.forEach((center) => {
              center.sessions.forEach((session) => {
                if (session.available_capacity_dose1 > 0) {
                  slot_found = true;
                  console.log(new Date());
                  console.log(
                    "Slot found for age limit " + session.min_age_limit
                  );
                  console.log(center);
                  if (!song_played) {
                    playSong2(isWin, song_url);
                    song_played = true;
                  }
                }
              });
            });
            if (!slot_found) {
              console.log("No slot found");
            }
          } catch (err) {
            console.log(err);
            console.log(data);
          }
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

writeResp();
setInterval(writeResp, 10000);

//Helper functions

function getTodayDate() {
  var d = new Date();
  var day = Number(d.getDate());
  if (day < 10) {
    day = "0" + day;
  }
  var month = Number(d.getMonth() + 1);
  if (month < 10) {
    month = "0" + month;
  }
  var year = Number(d.getFullYear());
  return day + "-" + month + "-" + year;
}

function playSong2(win_plat, url) {
  if (!win_plat) {
    try {
      exec("google-chrome --app-url " + url);
    } catch (err) {
      console.log(err);
    }
  }
  if (win_plat) {
    try {
      exec("start chrome " + url);
    } catch (err) {
      console.log(err);
    }
  }
}
