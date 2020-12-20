import { Router } from 'express';

import ListTransactionsService from '../services/Transactions/ListTransactionsService';
import CreateTransactionService from '../services/Transactions/CreateTransactionService';
import DeleteTransactionService from '../services/Transactions/DeleteTransactionService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const transactionsRouter = Router();

transactionsRouter.use(ensureAuthenticated);

transactionsRouter.get('/', async (request, response) => {
  try {
    const listTransactions = new ListTransactionsService();

    const list = await listTransactions.execute({ user_id: request.user.id });

    return response.status(200).json(list);
  } catch (err) {
    return response.status(400).json({ error: err });
  }
});

transactionsRouter.post('/', async (request, response) => {
  try {
    const { title, value, type, category } = request.body;
    const { user } = request;

    const createTransaction = new CreateTransactionService();

    const transaction = await createTransaction.execute({
      title,
      value,
      type,
      category,
      user_id: user.id,
    });

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err });
  }
});

transactionsRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deleteTransaction = new DeleteTransactionService();

    await deleteTransaction.execute({ id });

    return response.status(200).send();
  } catch (err) {
    return response.status(400).json({ error: err });
  }
});

export default transactionsRouter;
