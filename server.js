const express = require("express");
const bodyParser = require("body-parser");
const abilitiesChecker = require("./repositories/abilities");
module.exports = db => {
  console.log(db.Repos)
  console.log(db.Commits)
  const ReposRepository = require("./repositories/reposrepository")(db.Repos);
  const CommitsRepository = require("./repositories/CommitsRepository")(
    db.Commits
  );
  const api = require("./controllers/apicontroller")(
    CommitsRepository,
    ReposRepository
  );
  const app = express();
  app.get("/api/abilities", abilitiesChecker.rules);
  app.use("/*", abilitiesChecker.checkAbilities);
  app.use(bodyParser.json());
  app.use("/api", api);
  app.use("/", function(req, res) {
    res.send("testing page 322");
  });
  return app;
};
