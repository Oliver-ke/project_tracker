import { hashPassword } from '../../utils';
export default {
	up: (queryInterface) =>
		queryInterface.bulkInsert(
			'Users',
			[
				{
					id: 'e71c28fd-73d8-4d92-9125-ab3d022093b9',
					firstName: '',
					lastName: '',
					email: 'tonye@gmail.com',
					password: hashPassword('tonye1234'),
					isVerified: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 'e71c28fd-73d8-4d92-9125-ab3d022093b0',
					email: 'ruth@yahoo.com',
					password: hashPassword('ruth1234'),
					isVerified: true,
					role: 'Admin',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: '7aa38d4e-7fbf-4067-8821-9c27d2fb6e3a',
					email: 'oliver@gmail.com',
					password: hashPassword('funmi1234'),
					isVerified: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		),

	down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
