export default (sequelize, DataTypes) => {
	const User = sequelize.define('Users', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM('Citizen', 'Admin', 'Reviewer'),
			defaultValue: 'Citizen',
			allowNull: true,
		},
		isVerified: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	});
	User.associate = (models) => {
		User.hasMany(models.Comments, { as: 'userComments', foreignKey: 'userId' });
	};
	return User;
};
