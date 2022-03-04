import type { PropsWithChildren } from 'react'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MUIAccordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

import UpdateCheckboxConditionForm from '../UpdateCheckboxConditionForm'
import { StyledButton, Wrapper } from './styles'

interface AccordionProps {
  label: string
  description: string
  endDate: Date
  addTaskLabel: string
  taskId: string
  checked: boolean
  indeterminate?: boolean
  onOpenModal: (type: string, taskId?: string, subtaskId?: string) => void
}

export default function Accordion({
  children,
  onOpenModal,
  addTaskLabel,
  taskId,
  ...props
}: PropsWithChildren<AccordionProps>) {
  return (
    <MUIAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <UpdateCheckboxConditionForm
          actionType="Task"
          {...{ recordId: taskId, ...props }}
          onOpenModal={() => onOpenModal('changeTask', taskId)}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Wrapper>
          {children}
          <StyledButton onClick={() => onOpenModal('addSubtask', taskId)} startIcon={<AddCircleOutlineIcon />}>
            {addTaskLabel}
          </StyledButton>
        </Wrapper>
      </AccordionDetails>
    </MUIAccordion>
  )
}
