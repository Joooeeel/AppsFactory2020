import { db } from '../../database';
const { DataTypes } = require('sequelize');

const User = db.define('user', {
	password: DataTypes.STRING,
	mail: DataTypes.STRING,
});

export default User;