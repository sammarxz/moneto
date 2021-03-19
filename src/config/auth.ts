import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  jwt: {
    secret: process.env.JWT_TOKEN,
    expiresIn: '2d',
  },
};

export default config;
