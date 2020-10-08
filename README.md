## Running the App

-   Follow the instruction in Database setup (Neo4j) section below.
-   Copy the `.env.example` to `.env`. Uncomment either the Neo4j or AgensGraph settings. Edit if necessary.
-   Start the app with `npm start`.

#### Database setup (Neo4j)

> :warning: Please load the seed files before running the tests or the app.

Make sure you have dockers installed

-   run

```
docker-compose up -d
```

For each enitity there is a seed.cypher file. Open `localhost:7474` and paste the query in the seed file in the browser console.

#### User endpoints

`GET /user`
Lists all the users

`GET /user?id=<userID>`
Get the user with the provided id

`GET /user?username=<username>`
Get the user with the provided username
