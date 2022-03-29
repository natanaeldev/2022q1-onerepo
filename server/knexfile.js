// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'instock_db_v2',
      user: 'root',
      password: 'november17',
    },
  },

  production: {
    client: 'mysql',
    connection: process.env.JAWSDB_URL,
  },
};
