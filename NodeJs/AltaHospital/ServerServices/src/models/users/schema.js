import { db } from '../../application/database';
const { DataTypes } = require('sequelize');

const User = db.define('user', {
	username: DataTypes.STRING,
	alta: DataTypes.DATE,
});

export default User;