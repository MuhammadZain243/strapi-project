// config/database.js
const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const config = parse(env('DATABASE_URL'));
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
    },
  };
};
