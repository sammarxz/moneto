import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import AppError from '../../errors/AppError';

import User from '../../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Incorrect email/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.');
    }

    // Authenticate User
    return {
      user,
    };
  }
}

export default AuthenticateUserService;
