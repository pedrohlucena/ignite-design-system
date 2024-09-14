import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  const sizeArray = Array.from({ length: size }, (_, index) => index + 1)

  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {sizeArray.map((step) => {
          const active = currentStep >= step
          return <Step key={step} active={active} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
