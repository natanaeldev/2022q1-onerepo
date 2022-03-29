# Seeding and Migration Demo

See TODO.md for more detailed steps.

## To install locally

- create a MySQL database using the CLI (`mysql -u root -p`) or your favorite visualizer tool:

```sql
CREATE DATABASE instock_db_v2;
```

- `npm install`
- edit `knexfile.js`, replacing host, database, user, and password properties as needed

## To run locally

- To migrate set up DB schema: `npm run tables:migrate`
- To rollback DB schema one version: `npm run tables:drop`
- To seed DB tables with data: `npm run tables:seed`
- To run local express server: `npm run server`
