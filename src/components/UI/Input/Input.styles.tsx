import styled, { css } from 'styled-components'

export const LabelElement = styled.label`
  display: block;
  font-size: 1.6rem;
  margin-left: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  span {
    font-size: 1.4rem;
    margin-left: 1rem;
    color: #de6e6e;
  }
`

interface InputProps { error: boolean }
const getErrorStyles = (props: InputProps) => {
  return props.error && css`border-bottom: 3px solid #de6e6e !important;`
}

export const InputElement = styled.input`
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  color: inherit;
  padding: 1.25rem 1.75rem;
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grayLight2};
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  border-radius: 4px;
  box-sizing: border-box;
  ${getErrorStyles}

  &:focus {
    outline: none;
    border-bottom: 3px solid #55c57a;
  }

  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.grayDark1};
  }
`
