import { FC } from 'react'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children
  } = props

  return (
    <StyledButton>{children}</StyledButton>
  )
}
