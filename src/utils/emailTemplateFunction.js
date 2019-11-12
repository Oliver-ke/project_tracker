import emailTemplates from './emailTemplate';

const { confirmAccountTemplate } = emailTemplates;

let html;
const emailTemplatesFunction = (category, data) => {
	switch (category) {
		case 'confirmAccount':
			html = confirmAccountTemplate(data);
			return {
				subject: 'Confirm your Email Account',
				html,
			};
		case 'passwordRecovery':
			html = passwordRecoveryTemplate(data);
			return {
				subject: 'Recover your password',
				html,
			};
		default:
			return false;
	}
};

export default emailTemplatesFunction;
