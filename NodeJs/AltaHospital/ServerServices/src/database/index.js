import { Sequelize } from 'sequelize';
import dbConfig from '../config/database';

const { database, user, password, host } = dbConfig;

export const db = new Sequelize(database, user, password, {
    host,
	dialect: 'mysql',
	query: { raw: true }
});

export default async (onConnect) => {
	try {
        await db.authenticate();
        db.sync();
        onConnect();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
	}
}