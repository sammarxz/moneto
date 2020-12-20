import { getCustomRepository } from 'typeorm';

import TransationRepository from '../../repositories/TransactionsRepository';

import AppError from '../../errors/AppError';

interface Request {
  id: string;
  user_id: string;
}

class DeleteTransactionService {
  public async execute({ id, user_id }: Request): Promise<void> {
    const transationRepository = getCustomRepository(TransationRepository);

    const transaction = await transationRepository.findOne({
      where: { id, user_id },
    });

    if (!transaction) {
      throw new AppError('Transaction does not exists');
    }

    await transationRepository.delete({ id });
  }
}

export default DeleteTransactionService;
