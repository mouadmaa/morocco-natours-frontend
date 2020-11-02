import styled from 'styled-components'

export const UserSettingsFormContainer = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 8rem;

  h2 {
    margin-bottom: 3.5rem;
  }

  @media only screen and (max-width: 56.25em) {
    padding: 2rem;
  }
`

export const FormGroupContainer = styled.div`
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }

  p {
    font-size: 1.4rem;
    padding: .5rem 1rem;
  }
`

export const FormGroupContainerButton = styled.div`
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }

  text-align: right !important;

  @media only screen and (max-width: 56.25em) {
    margin-top: 4rem;
  }
`
