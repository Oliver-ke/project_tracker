import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';

config();
const app = express();
app.use(cors());

// Normal express config defaults
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Base Route Response
app.get('/', (req, res) => res.json({ status: 200, message: 'Welcome to Project tracker server' }));
app.use('/api/v1', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

const port = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server started on localhost:${port}`));
