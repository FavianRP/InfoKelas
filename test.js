const bcrypt = require("bcrypt");

const hash = "$2b$10$FEW1Sv.9zX.oUEdhd1b9jOIwPkUO81//78beRFJqSYyAzVXtFpCc2";

bcrypt.compare("2ia15pastibisa", hash, (err, res) => {
  console.log(res); // true jika password cocok
});
