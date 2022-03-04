import { format } from 'date-fns'

import EditIcon from '@mui/icons-material/Edit'
import EventIcon from '@mui/icons-material/Event'
import { Chip } from '@mui/material'

import ButtonWithIcon from '../ButtonWithIcon'
import { ButtonsContainer, Wrapper } from './styles'

import DeleteForm from '../DeleteForm'
import CheckboxForm from '../CheckboxForm'
interface UpdateCheckboxConditionFormProps {
  label: string
  actionType: string
  checked?: boolean
  indeterminate?: boolean
  recordId: string
  description: string
  endDate: Date
  onOpenModal: () => void
}

export default function UpdateCheckboxConditionForm({
  label,
  actionType,
  onOpenModal,
  checked = false,
  indeterminate = false,
  recordId,
  description,
  endDate,
}: UpdateCheckboxConditionFormProps) {
  const formattedTime = format(new Date(endDate), 'dd MMM')

  return (
    <Wrapper>
      <CheckboxForm {...{ label, actionType, checked, indeterminate, recordId, description }} />
      <ButtonsContainer>
        <Chip variant="outlined" color="warning" size="small" icon={<EventIcon />} label={formattedTime} />
        <ButtonWithIcon color="primary" icon={<EditIcon />} onClick={onOpenModal} />
        <DeleteForm {...{ actionType, recordId }} />
      </ButtonsContainer>
    </Wrapper>
  )
}
