import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckboxContainer from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import type { ReactElement, SyntheticEvent } from 'react'

interface CheckboxProps {
  label: string | ReactElement
  checked?: boolean
  indeterminate?: boolean
}

export default function Checkbox({ label, checked = false, indeterminate = false }: CheckboxProps) {
  const handleStopPropagation = (event: SyntheticEvent) => {
    event.stopPropagation()
  }

  return (
    <FormControlLabel
      label={label}
      control={
        <CheckboxContainer
          {...{ checked, indeterminate }}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          indeterminateIcon={<DoDisturbOnIcon />}
          color="secondary"
          onClick={handleStopPropagation}
        />
      }
      onClick={handleStopPropagation}
    />
  )
}
