import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(user_id: string): Promise<Balance> {
    const transactions = await this.find({ where: { user_id } });

    const balance = transactions.reduce(
      (acc, { type, value }) => ({
        ...acc,
        [type]: acc[type] + value,
      }),
      { income: 0, outcome: 0 },
    );

    const { income, outcome } = balance;

    return {
      income,
      outcome,
      total: income - outcome,
    };
  }
}

export default TransactionsRepository;
