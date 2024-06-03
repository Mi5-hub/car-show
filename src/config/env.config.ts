import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const mysqlConfig = {
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    port: parseInt(process.env.MYSQL_PORT),
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}

export { mysqlConfig }