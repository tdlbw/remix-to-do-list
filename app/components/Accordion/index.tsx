import type { PropsWithChildren } from 'react'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MUIAccordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

import UpdateCheckboxConditionForm from '../UpdateCheckboxConditionForm'
import { StyledButton } from './styles'

interface AccordionProps {
  onAddSubTaskClick: () => void
  label: string
  description: string
  endDate: Date
  addTaskLabel: string
  taskId: string
  checked: boolean
  indeterminate?: boolean
}

export default function Accordion({
  children,
  onAddSubTaskClick,
  addTaskLabel,
  taskId,
  ...props
}: PropsWithChildren<AccordionProps>) {
  return (
    <MUIAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <UpdateCheckboxConditionForm actionName="updateTask" {...{ recordId: taskId, ...props }} />
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {children}
          <StyledButton onClick={onAddSubTaskClick} startIcon={<AddCircleOutlineIcon />}>
            {addTaskLabel}
          </StyledButton>
        </div>
      </AccordionDetails>
    </MUIAccordion>
  )
}
