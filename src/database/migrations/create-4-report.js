export default {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('Reports', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING,
				defaultValue: Sequelize.UUIDV4,
			},
			report: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			files: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			projectId: {
				type: Sequelize.STRING,
				allowNull: true,
				references: {
					model: 'Projects',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Date.now(),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Date.now(),
			},
		}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('Reports'),
};
