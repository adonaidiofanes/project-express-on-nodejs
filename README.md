# Project for training of technologies in Node, Express and Sequelize.

This is an academic project, written for Systems Analysts, Project Manager, Software Engineer and Hackers. Its main purpose is to provide technical training using the most common hackend technologies available for the programming language coded in NodeJS.

<img src="public/images/trainning-of-node-express-sequelize.png">

### What are we using?

| Service       | Description                                                                                                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *Http Server* | We will use [Express](https://expressjs.com/) for web management, as it is a minimalist and fast structure library for [NodeJS](https://nodejs.org/en/).                                             |
| *Database*    | [MySQL](http://mysql.com): We will use it to manage our database.                                                                                                                                    |
| *ORM*         | [Sequelize](https://sequelize.org/): We will use it to connect to the database, provide us with an ORM for the main databases, offering support transactions, relationships in a quick and easy way. |

### Training requirements
| Description | Active version  |
| ----------- | --------------- |
| Node        | v14.16.1        |
| Express     | 4.16.1          |
| MySQL       | 10.4.11-MariaDB |

## Challenge

<img src="public/images/database-model.png">

We will demonstrate the functioning of relationships, associating tables and applying: One to One, One to Many, Many to Many. All of this, using the best of sequelize-cli in its operation and integrated with Express for some examples.

## How to run the project?

`sudo npm install -g express-generator`

`sudo npm install sequelize-cli -g`

`git clone https://github.com/adonaidiofanes/project-express-on-nodejs.git`

`npm install`

Configure the `config/config.json` according your database name, database user and password.

`npx sequelize-cli db:create`

`npm start` to run the create tables and relationship in database

`npx sequelize-cli db:seed:all`

### The structure of project
| File/Directory     | Description                                            |
| ------------------ | ------------------------------------------------------ |
| config/config.json | The file of database configurations.                   |
| /models/           | Directory of our models                                |
| /migrations/       | Not being used for this project                        |
| /seeders/          | Directory of our seeders to run and input datas in db. |
| /routes/           | Directory of our routes.                               |
| /controllers/      | Directory of our controllers.                          |

Tests can be performed in `script.js`, using the `node script.js` command

If you want to run the web environment, you can edit the routes and controllers for testing purposes.

### How to run web server?
1. `npm start`
2. Access the [Web server](http://localhost:3000)