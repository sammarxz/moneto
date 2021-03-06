import { Router } from 'express';

import CreateUserService from '../services/Users/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createTransaction = new CreateUserService();

    type UserType = {
      name: string;
      email: string;
      password?: string;
    };

    const user: UserType = await createTransaction.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err });
  }
});

export default usersRouter;
