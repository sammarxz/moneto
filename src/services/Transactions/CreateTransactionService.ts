import { getCustomRepository } from 'typeorm';

import AppError from '../../errors/AppError';

import TransactionsRepository from '../../repositories/TransactionsRepository';
import Transaction from '../../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
  user_id: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
    user_id,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    if (!['income', 'outcome'].includes(type)) {
      throw new AppError('Invalid type');
    }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category,
      user_id,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
