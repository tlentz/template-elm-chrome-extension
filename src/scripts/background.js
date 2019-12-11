var moment = require("moment");

function hello() {
  console.log(
    moment().format("DD/MM/YYYY HH:mm:ss"),
    "This is from background.js!"
  );
  window.setTimeout(hello, 5000);
}
hello();
