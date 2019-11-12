export default (sequelize, DataTypes) => {
	const Project = sequelize.define('Projects', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
		},
		LGA: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		community: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		category: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: true,
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		projectType: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		projectDescription: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		budgetedCost: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		commitment: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'Project awarded',
		},
		rate: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: '0',
		},
		likes: {
			type: DataTypes.STRING,
			defaultValue: '0',
		},
		amountApprovedInT16: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		amountApprovedInT17: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});
	Project.associate = (models) => {
		Project.hasMany(models.Comments, { as: 'projectComments', foreignKey: 'projectId' });
	};
	return Project;
};
