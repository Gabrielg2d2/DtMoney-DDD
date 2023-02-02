import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { DialogTransaction } from '.'

describe('DialogTransaction', () => {
  it('should render component DialogTransaction close, just the button', () => {
    render(<DialogTransaction />)

    expect(screen.getByText(/nova transação/i)).toBeInTheDocument()
  })

  it('should render component DialogTransaction open, with the form', () => {
    render(<DialogTransaction />)

    const buttonOpen = screen.getByText(/nova transação/i)

    act(() => {
      buttonOpen.click()
    })

    expect(screen.getByText(/cadastrar transação/i)).toBeInTheDocument()
    expect(
      screen.getByText(/insira os dados para nova transação/i)
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/preço/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/categoria/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /cadastrar/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /entrada/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /saída/i
      })
    ).toBeInTheDocument()
  })

  it('should allow closing the modal when clicking on the "x" close button', () => {
    render(<DialogTransaction />)

    const buttonOpen = screen.getByText(/nova transação/i)

    act(() => {
      buttonOpen.click()
    })

    const buttonClose = screen.getByRole('button', {
      name: /close dialog/i
    })

    act(() => {
      buttonClose.click()
    })

    expect(screen.queryByText(/cadastrar transação/i)).not.toBeInTheDocument()
  })

  it('should render component DialogTransaction with button withdrawn selection default', () => {
    render(<DialogTransaction />)

    const buttonOpen = screen.getByText(/nova transação/i)

    act(() => {
      buttonOpen.click()
    })

    const buttonWithdrawn = screen.getByRole('button', {
      name: /saída/i
    })

    const buttonDeposit = screen.getByRole('button', {
      name: /entrada/i
    })

    expect(buttonWithdrawn).toHaveClass('border-red-500')
    expect(buttonDeposit).not.toHaveClass('border-green-500')
  })
})