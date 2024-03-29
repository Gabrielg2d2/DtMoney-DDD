import { DialogNewTransaction, FormTypes } from '@/components'
import { CurrencyDollar } from 'phosphor-react'

export type HeaderTypes = {
  submit: (data: FormTypes) => Promise<void>
}

export function Header(props: HeaderTypes) {
  return (
    <header className="bg-violet-800 h-48 p-8 flex items-start justify-center">
      <div className="flex items-center justify-between flex-1 max-w-screen-xl">
        <div className="flex items-center gap-2">
          <CurrencyDollar
            size={32}
            className="bg-green-default text-white rounded-full p-1"
          />
          <h1 className="text-2xl text-white font-bold">dt money</h1>
        </div>
        <DialogNewTransaction handleSubmit={props.submit} />
      </div>
    </header>
  )
}
