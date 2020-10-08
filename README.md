## Running the App

-   Follow the instruction in Database setup (Neo4j) section below.
-   Clone the repo
```
git clone git@github.com:benjoox/instagram-graph-db-endpoints.git
```
-   Install the dependencies
```
npm install
```
-   Copy the `.env.example` to `.env`. Uncomment either the Neo4j. Edit if necessary.
-   Start the app with `npm start`.
-   Go to `localhost:3000` in your browser and try one of the endpoints in 'Endpoints' section below.

#### Database setup (Neo4j)

> :warning: Please load the seed files before running the tests or the app.

Make sure you have dockers installed

-   run

```
docker-compose up -d
```
With this you will have an instance of neo4j available at `localhost:7474`.
For each enitity there is a seed.cypher file. Open `localhost:7474` and paste the queries in the seed file in the browser console.

### Endpoints

#### User endpoints

`GET /user`
Lists all the users

`GET /user?id=<userID>`
Get the user with the provided id

`GET /user?username=<username>`
Get the user with the provided username
