const DB_HOST = process.env.DB_HOST || "containers-us-west-174.railway.app";
const DB_NAME = process.env.DB_NAME || "railway";
const DB_PASSWORD = process.env.DB_PASSWORD || "l7g6hxzfagHYoIlc8nkW";
const DB_PORT = process.env.DB_PORT || "7427";
const DB_USER = process.env.DB_USER || "root";


module.exports={
  "development": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port":DB_PORT,
    "dialect": "mysql"
  },
  "test":{
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port":DB_PORT,
    "dialect": "mysql"
  }
}
