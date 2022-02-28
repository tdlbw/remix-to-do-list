import { useState } from 'react'

import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker'
import TextField from '@mui/material/TextField'

import { Container } from './styles'

interface DateTimePickerProps {
  label: string
  name: string
}

export default function DateTimePicker({ label, name }: DateTimePickerProps) {
  const [value, setValue] = useState<Date | null>(new Date())

  const handleChange = (newValue: Date | null) => {
    setValue(newValue)
  }

  return (
    <Container>
      <input type="hidden" name={name} value={value?.toISOString()} />
      <MobileDateTimePicker
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </Container>
  )
}
