import { Router } from 'express';

import ListTransactionsService from '../services/ListTransactionsService';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  const listTransactions = new ListTransactionsService();

  const list = await listTransactions.execute();

  return response.status(200).json(list);
});

export default transactionsRouter;
