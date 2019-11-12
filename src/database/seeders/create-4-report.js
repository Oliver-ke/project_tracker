export default {
	up: (queryInterface) =>
		queryInterface.bulkInsert(
			'Reports',
			[
				{
					id: 'e71c28fd-73d8-4d92-9125-ab3d022093b9',
					report: 'road not built',
					files: 'http://file.png',
					projectId: '7aa38d4e-7fbf-4067-8821-9c27d2fb6e3a',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 'e71c28fd-73d8-4d92-9125-ab3d02293b9',
					report: 'road not built',
					files: 'http://file.png',
					projectId: '7aa38d4e-7fbf-4067-8821-9c27d2fb6e3a',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		),

	down: (queryInterface) => queryInterface.bulkDelete('Reports', null, {}),
};
