import * as dotenv from 'dotenv';

dotenv.config();

const { PORT, MONGO_URI, JWT_SECRET } = process.env;

export { PORT, MONGO_URI, JWT_SECRET };
