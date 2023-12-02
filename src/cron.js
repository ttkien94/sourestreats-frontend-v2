const cron = require("cron");
const https = require("https");

const backendUrl = "https://lpe-mern-do.onrender.com";
const job = new cron.CronJob("*/14 * * * *", () => {
  // this function will be executed every 14 minutes
  console.log("restarting server");

  //   Performan an HTTPS GET request to hit any backend api
  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Server restarted");
      } else {
        console.error(`failed to restart server with code: ${res.statusCode}`);
      }
    })
    .on("error", (err) => {
      console.error("error during Restart", err.message);
    });
});

module.exports = { job: job };
