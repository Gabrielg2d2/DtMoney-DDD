import { useDialogTransaction } from '@/hook/DialogNewTransaction/useDialogTransaction'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { DialogCustom } from '../Dialog'
import { Input } from '../Input'

export function DialogTransaction() {
  const { handleType, make, register, handleSubmit, onSubmit, watch } =
    useDialogTransaction()

  return (
    <DialogCustom
      title={make().title}
      description={make().description}
      buttonOpen={make().buttonOpen}
    >
      <form
        className="flex flex-col gap-4 pb-4 px-2"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input placeholder="Nome" register={register('name')} />
        <Input placeholder="Preço" register={register('price')} />

        <div className="flex gap-2">
          <button
            type="submit"
            className={`
            flex items-center justify-center gap-2 transition-all
            p-4 bg-white rounded-md border hover:bg-slate-100 w-full text-text-default ${
              watch('type') === 'deposit' ? 'border-green-500' : ''
            }`}
            onClick={() => {
              handleType('deposit')
            }}
          >
            <ArrowCircleUp size={26} className="text-green-default" />
            Entrada
          </button>
          <button
            type="submit"
            className={`
            flex items-center justify-center gap-2 transition-all
            p-4 bg-white rounded-md border hover:bg-slate-100 w-full text-text-default ${
              watch('type') === 'withdrawn' ? 'border-red-500' : ''
            }`}
            onClick={() => {
              handleType('withdrawn')
            }}
          >
            <ArrowCircleDown size={26} className="text-red-default" />
            Saída
          </button>
        </div>

        <Input placeholder="Categoria" register={register('category')} />

        <button
          type="submit"
          className="p-4 bg-[#33CC95] hover:bg-[#20b37d] transition-all text-white rounded-md mt-2"
        >
          Cadastrar
        </button>
      </form>
    </DialogCustom>
  )
}
