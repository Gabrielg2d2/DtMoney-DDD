import { HomeTemplateUI, HomeTemplateUITypes } from './templates'
import { useCallback, useEffect, useState } from 'react'
import { FactoryTransaction } from '@/domain/Transaction/FactoryTransaction'

export function Home() {
  const [loading, setLoading] = useState(false)
  const [transactions] = useState(new FactoryTransaction().execute())

  async function handleDeleteTransaction(id: string) {
    setLoading(true)
    await transactions.delete(id)
    setLoading(false)
  }

  const listTransactions = useCallback(async () => {
    setLoading(true)
    await transactions.list()
    setLoading(false)
  }, [transactions])

  useEffect(() => {
    void listTransactions()
  }, [listTransactions])

  const dataHomeTemplate: HomeTemplateUITypes = {
    header: {
      submit: async () => {
        await Promise.resolve()
      }
    },
    sectionCardsTransactions: {
      totalIncomingTransactions: 'R$ 0,00',
      totalOutgoingTransactions: 'R$ 0,00',
      totalTransactions: 'R$ 0,00'
    },
    sectionListTransactions: {
      list: transactions.getList,
      handleDeleteTransaction,
      handleOpenModalTransactionToEdit: () => {},
      loading
    }
  }

  return <HomeTemplateUI {...dataHomeTemplate} />
}
