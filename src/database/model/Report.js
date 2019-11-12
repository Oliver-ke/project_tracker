export default (sequelize, DataTypes) => {
	const Report = sequelize.define('Reports', {
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
		report: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		files: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});
	Report.associate = (models) => {
		Report.belongsTo(models.Projects, { as: 'theReport', foreignKey: 'projectId' });
	};
	return Report;
};
