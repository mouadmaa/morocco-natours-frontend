import React, { FC, Fragment } from 'react'

import { InputElement, LabelElement } from './Input.styles'

interface InputProps {
  name: string
  label: string
  placeholder?: string
  type?: string
  register: any
  error: any
}

const Input: FC<InputProps> = props => {
  const {
    label, name, register, error, type = 'text', placeholder = ''
  } = props

  return (
    <Fragment>
      <LabelElement htmlFor={name}>
        {label}
        {error && (
          <span>{error.message}</span>
        )}
      </LabelElement>
      <InputElement
        ref={register}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        error={error}
      />
    </Fragment>
  )
}

export default Input
