import { Router } from 'express';

import AuthenticateUserService from '../services/Session/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    type UserType = {
      user: {
        email: string;
        password?: string;
      };
      token: string;
    };

    const { user, token }: UserType = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: err });
  }
});

export default sessionsRouter;
