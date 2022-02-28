import { DescriptionContainer, LabelContainer } from './styles'

interface TaskLabelProps {
  label: string
  description: string
}

export default function TaskLabel({ label, description }: TaskLabelProps) {
  return (
    <div>
      <LabelContainer>{label}</LabelContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
    </div>
  )
}
