import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../../repositories/TransactionsRepository';

import Transaction from '../../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Request {
  user_id: string;
}

interface Response {
  transactions: Array<Transaction>;
  balance: Balance;
}

class ListTransactionsService {
  public async execute({ user_id }: Request): Promise<Response> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactions = await transactionsRepository.find({
      select: ['id', 'title', 'value', 'type', 'created_at'],
      where: { user_id },
    });

    const balance = await transactionsRepository.getBalance(user_id);

    return {
      transactions,
      balance,
    };
  }
}

export default ListTransactionsService;
