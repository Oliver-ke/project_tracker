import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import config from './index';
import { strategyCallback, getCallbackUrls } from '../utils';

const { googleCallbackUrl, facebookCallbackUrl } = getCallbackUrls;

passport.use(
	new GoogleStrategy(
		{
			clientID: config.oauth.google.clientID,
			clientSecret: config.oauth.google.clientSecret,
			callbackURL: googleCallbackUrl,
		},
		strategyCallback,
	),
);

passport.use(
	new FacebookStrategy(
		{
			clientID: config.oauth.facebook.clientID,
			clientSecret: config.oauth.facebook.clientSecret,
			callbackURL: facebookCallbackUrl,
			profileFields: [ 'email', 'name' ],
		},
		strategyCallback,
	),
);
