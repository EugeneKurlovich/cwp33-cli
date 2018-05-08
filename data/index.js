const Sequelize = require('sequelize');
const config = require('../config.json');


const options = { 
    host: config.db.host, 
    post: config.db.port, 
    dialect: config.db.dialect, 
    define: config.db.define, 
    dialectOptions: config.db.dialectOptions 
    }; 
    
    const sequelize = new Sequelize( 
    config.db.name, 
    config.db.user, 
    config.db.password, 
    options 
    );


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