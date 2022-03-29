# DevOps & Deployment

You’ve got a React app, and an API server written in Express or something else. Now – how do you deploy them both to a server? We have a couple of ways to do this:

## Option 1: Keeping them together

Express and React files sit on the same machine, and Express does double duty: it serves the React files, and it also serves API requests. This demo will cover this method.

- For example: a DigitalOcean VPS running Express on port 80

## Option 2: Splitting them apart

Host the Express API on one machine, and the React app on another. This will be covered by the CDA.

- For example: React app served by Netlify, API server running on a DigitalOcean VPS

### To Deploy in Heroku

1. Download the Heroku CLI
2. Use `heroku create` to create a new Heroku instance
3. Login to your dashboard at dashboard.heroku.com, choose Resources, Search for "JawsDB MySQL" (NOT JawsDB Maria) in Add-Ons. Choose "Kitefin Shared - Free" account.
4. Verify you have access to the connection string. If you type `heroku config` it should appear as a config variable named `JAWSDB_URL`, used inside `/server/knexfile.js`.

### Code snippets of interest

- `package.json`

  - What is the `heroku-postbuild` script?
    - This gets called after Heroku is done downloading and installing the packages on the main server.
  - What is `npm install --prefix client && npm install --prefix server && npm run build --prefix client`?!
    - A more heroku friendly way of installing `npm install` on the `/client` folder, installing `npm install` on the `/server` folder, and running `npm run build` on the `/client` folder. Heroku gets finicky navigating to parent directories
  - Why the `start` script? That feels redundant.
    - Heroku is [explicitly looking for a script named start](https://devcenter.heroku.com/articles/deploying-nodejs#specifying-a-start-script), unless you tell it otherwise.

- `/client/package.json` - add a proxy property to your localhost server

- `/server/index.js` - lines 21-26
  - This is our "catchall" handler: for any request that doesn't match our previous routes, send back React's index.html file.
- `/server/db.js` - lines 1-2

- `/server/knexfile.js` - lines 14-17

### Migrating and seeding data on production

We will need to migrate the database on production so it takes the appropriate tables.

Near the top right of your Heroku Dashboard, there should be an option that says "More". Click More and you should see a dropdown of options, click "Run console" and follow the prompt, entering the word `bash` and hit run. Running the console will log you into your applications server via shell/command-line. This is handy as it will allow you to run npm and bash commands.

You can also run this in command line via `heroku run bash`:

```bash
$ heroku run bash
Running bash on ⬢ q1-2022-palm-testrun... up, run.3372 (Free)

$ cd server
$ npm run tables:migrate
> crud-demo@1.0.0 tables:migrate
> knex migrate:latest
Using environment: production
Batch 1 run: 3 migrations

$ npm run tables:seed
```

## Resources

- https://daveceddia.com/deploy-react-express-app-heroku/
