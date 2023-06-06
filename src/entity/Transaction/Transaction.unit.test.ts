/* eslint-disable no-new */
import { Transaction } from './Transaction'

describe('Transaction', () => {
  it('should create a valid transaction', () => {
    const transaction = new Transaction(
      null,
      100,
      new Date().toISOString(),
      'A valid transaction',
      'deposit'
    )

    expect(transaction).toBeDefined()
  })

  it('should create a valid with id transaction', () => {
    const transaction = new Transaction(
      '12345',
      100,
      new Date().toISOString(),
      'A valid transaction',
      'deposit'
    )

    expect(transaction).toBeDefined()
  })

  it('should return error, when the value is equal to zero or description is less than 3 letters', () => {
    expect(() => {
      new Transaction(
        null,
        0,
        new Date().toISOString(),
        'A valid transaction',
        'deposit'
      )
    }).toThrowError('Invalid transaction')

    expect(() => {
      new Transaction(null, 100, new Date().toISOString(), 'A', 'deposit')
    }).toThrowError('Invalid transaction')
  })

  it('should return error, when the value is less than zero', () => {
    expect(() => {
      new Transaction(
        null,
        -100,
        new Date().toISOString(),
        'A valid transaction',
        'deposit'
      )
    }).toThrowError('Invalid transaction')
  })

  it('should return all transaction data', () => {
    const transaction = new Transaction(
      '12345',
      100,
      new Date('2023-05-01').toISOString(),
      'A valid transaction',
      'deposit'
    )

    expect(transaction.getId()).toBe('12345')
    expect(transaction.getAmount()).toBe(100)
    expect(transaction.getDate()).toBe('2023-05-01T00:00:00.000Z')
    expect(transaction.getDescription()).toBe('A valid transaction')
    expect(transaction.getType()).toBe('deposit')
  })
})
