export default {
	up: (queryInterface) =>
		queryInterface.bulkInsert(
			'Comments',
			[
				{
					id: 'e71c28fd-73d8-4d92-9125-ab3d022093b9',
					comment: 'road not built',
					authorName: 'Mercy Chinwo',
					userId: 'e71c28fd-73d8-4d92-9125-ab3d022093b9',
					projectId: '7aa38d4e-7fbf-4067-8821-9c27d2fb6e3a',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 'e71c28fd-73d8-4d92-9125-ab3d02293b9',
					comment: 'road not built',
					authorName: 'Mercy Chinwo',
					userId: 'e71c28fd-73d8-4d92-9125-ab3d022093b9',
					projectId: '7aa38d4e-7fbf-4067-8821-9c27d2fb6e3a',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		),

	down: (queryInterface) => queryInterface.bulkDelete('Comments', null, {}),
};
