import * as dotenv from 'dotenv';

dotenv.config();

export default {
  jwt: {
    secret: process.env.JWT_TOKEN,
    expiresIn: '2d',
  },
};
