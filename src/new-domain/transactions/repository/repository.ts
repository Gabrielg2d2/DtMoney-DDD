import { HttpClient } from '../infra/HttpClient'
import { TransactionEntityType } from '../types/transaction-entity'
import { ITransactionRepository } from './repository-interface'

export class TransactionRepository implements ITransactionRepository {
  constructor(private readonly persisted = new HttpClient()) {}

  async create(transaction: any) {
    try {
      await this.persisted.post('/transactions', transaction)
    } catch (error) {
      throw new Error('Error to create new transaction repository')
    }
  }

  async update(transaction: TransactionEntityType) {
    try {
      await this.persisted.put('/transactions', transaction)
    } catch (error) {
      throw new Error('Error to update transaction repository')
    }
  }

  async delete(transaction: TransactionEntityType) {
    try {
      await this.persisted.delete(`/transactions/${transaction.id}`)
    } catch (error) {
      throw new Error('Error to delete transaction repository')
    }
  }
}
