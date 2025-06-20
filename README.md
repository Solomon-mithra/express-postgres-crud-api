# Express-Postgres CRUD API
`Node.js` `Express` `PostgreSQL` `Docker` `dotenv` `CORS` `Joi`

## Description
A simple CRUD REST API built with Node.js, Express, and PostgreSQL. It uses environment variables, connection pooling and Docker for managing the database.

## Prerequisites
- Node.js (v14+)
- Docker

## Setup
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd express-postgres-crud-api
   ```
2. Create a `.env` file in the project root with the following keys:
   ```dotenv
   PORT=5001
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_NAME=your_db
   ```
3. Start PostgreSQL in Docker:
   ```bash
   docker run --name express-pg \
     -e POSTGRES_USER=$DB_USER \
     -e POSTGRES_PASSWORD=$DB_PASSWORD \
     -e POSTGRES_DB=$DB_NAME \
     -p 5432:5432 -d postgres
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. (Optional) Run the table creation script:
   ```bash
   node src/data/createUserTable.js
   ```
6. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| POST   | /user          | Create a new user     |
| GET    | /user          | Retrieve all users    |
| GET    | /user/:id      | Retrieve user by ID   |
| PUT    | /user/:id      | Update a user         |
| DELETE | /user/:id      | Delete a user         |

## Environment Variables
| Key         | Description                      |
|-------------|----------------------------------|
| PORT        | Server port (default: 3000)      |
| DB_HOST     | PostgreSQL host (e.g. localhost) |
| DB_PORT     | PostgreSQL port (default: 5432)  |
| DB_USER     | Database user                   |
| DB_PASSWORD | Database password               |
| DB_NAME     | Database name                   |

