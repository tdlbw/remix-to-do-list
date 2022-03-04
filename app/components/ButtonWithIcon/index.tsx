import type { ReactElement, PropsWithChildren, SyntheticEvent } from 'react'
import IconButton from '@mui/material/IconButton'

interface ButtonProps {
  className?: string
  icon: ReactElement
  color?: any
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export default function ButtonWithIcon({
  className,
  icon,
  color,
  type = 'button',
  onClick,
}: PropsWithChildren<ButtonProps>) {
  const handleStopPropagation = (event: SyntheticEvent) => {
    event.stopPropagation()
    if (onClick) onClick()
  }

  return (
    <IconButton {...{ className, color, type }} onClick={handleStopPropagation}>
      {icon}
    </IconButton>
  )
}
