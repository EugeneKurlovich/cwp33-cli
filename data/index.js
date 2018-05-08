const Sequelize = require('sequelize');
const config = require('../config.json');

const options = {
    host: "ec2-50-19-232-205.compute-1.amazonaws.com",
    dialect: 'postgres',
    port:5432,
    logging: false,
    dialectOptions:{
        ssl : true
    }    
};
const sequelize = new Sequelize("davtq49h0m1cr5", "avjjrhufewzvgx", "5ee36876842730e36bbb71a8881ad310594b09d78387b35ce1948367ff82cabe", options);

const Repo = require('./repo')(Sequelize, sequelize);
const Commit = require('./commit')(Sequelize, sequelize);

Commit.belongsTo(Repo, { foreignKey: 'repoId' });

const context = {
    repos: Repo,
    commits: Commit,

    Sequelize,
    sequelize,
};

module.exports = context;