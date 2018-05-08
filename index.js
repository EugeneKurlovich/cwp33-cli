const Sequelize = require("sequelize");
//const config = require("./config.json");
//const dbs = require("./cont/context.js");
//const db = dbs(Sequelize, config);

const server = require("./server")();
const port = process.env.PORT || 7000;

/*db.sequelize.sync().then(() => {
  server.listen(port, () => console.log("Running on port " + port));
});
*/