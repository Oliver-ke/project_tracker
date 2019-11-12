export default (sequelize, DataTypes) => {
	const Comment = sequelize.define('Comments', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
		},
		projectId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		authorName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
	Comment.associate = (models) => {
		Comment.belongsTo(models.Users, { as: 'theComment', foreignKey: 'userId' });
		Comment.belongsTo(models.Projects, { as: 'theProject', foreignKey: 'projectId' });
	};
	return Comment;
};
