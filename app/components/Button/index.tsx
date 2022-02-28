import type { ReactElement, PropsWithChildren } from 'react'

import { StyledButton } from './styles'

interface ButtonProps {
  className?: string
  onClick: () => void
  startIcon: ReactElement
}

export default function Button({ className, onClick, startIcon, children }: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton variant="contained" {...{ className, onClick, startIcon }}>
      {children}
    </StyledButton>
  )
}
