export default {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('Comments', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING,
				defaultValue: Sequelize.UUIDV4,
			},
			comment: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			authorName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userId: {
				type: Sequelize.STRING,
				allowNull: true,
				references: {
					model: 'Users',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
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
	down: (queryInterface, Sequelize) => queryInterface.dropTable('Comments'),
};
