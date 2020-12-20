import { Router } from 'express';

import ListTransactionsService from '../services/Transactions/ListTransactionsService';
import CreateTransactionService from '../services/Transactions/CreateTransactionService';
import DeleteTransactionService from '../services/Transactions/DeleteTransactionService';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  const listTransactions = new ListTransactionsService();

  const list = await listTransactions.execute();

  return response.status(200).json(list);
});

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category, user_id } = request.body;

  const createTransaction = new CreateTransactionService();

  const transaction = await createTransaction.execute({
    title,
    value,
    type,
    category,
    user_id,
  });

  return response.json(transaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTransaction = new DeleteTransactionService();

  await deleteTransaction.execute({ id });

  return response.status(200).send();
});

export default transactionsRouter;
