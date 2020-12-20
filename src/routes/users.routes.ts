import { Router } from 'express';

import CreateUserService from '../services/Users/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createTransaction = new CreateUserService();

    const user = await createTransaction.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  } catch (err) {
    return response.json({ error: err });
  }
});

export default usersRouter;
