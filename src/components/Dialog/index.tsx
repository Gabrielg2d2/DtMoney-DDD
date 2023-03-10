import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

type DialogCustomProps = {
  title?: string
  description?: string
  children: React.ReactNode
  open: boolean
  close: () => void
}

export function DialogCustom({
  title,
  description,
  children,
  open = false,
  close
}: DialogCustomProps) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[3px]"
          onClick={close}
        />
        <Dialog.Content className="bg-white fixed top-28 left-1/2 -translate-x-1/2 max-w-md p-4 pb-8 shadow-lg rounded-md w-full">
          <Dialog.Title className="text-text-default text-xl">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-text-default text-sm my-2 mb-8">
            {description}
          </Dialog.Description>
          {children}

          <Dialog.Close
            asChild
            className="absolute top-2 right-2 hover:bg-slate-200 transition-colors duration-200 rounded-full p-2"
          >
            <button aria-label="Close Dialog" onClick={close}>
              <X size={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
