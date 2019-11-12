module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('Projects', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING,
				defaultValue: Sequelize.UUIDV4,
			},
			LGA: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			community: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			category: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			state: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			location: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			projectType: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: 'Project awarded',
			},
			rate: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: '0',
			},
			likes: {
				type: Sequelize.STRING,
				defaultValue: '0',
			},
			projectDescription: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			budgetedCost: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			commitment: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			amountApprovedInT16: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			amountApprovedInT17: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		}),
	down: (queryInterface) => queryInterface.dropTable('Projects'),
};
