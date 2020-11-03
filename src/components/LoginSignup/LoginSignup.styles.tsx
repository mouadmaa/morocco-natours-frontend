import styled from 'styled-components'

export const LoginSignupContainer = styled.div`
  background-color: #f7f7f7;
  padding: 0 5vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginSignupFormContainer = styled.div`
  margin: 0 auto;
  width: 55rem;
  min-width: 30rem;
  background-color: ${({ theme }) => theme.color.grayLight1};
  box-shadow: ${({ theme }) => theme.shadowLight};
  padding: 5rem 7rem;
  border-radius: 5px;

  > h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 3.5rem;

    div {
      display: none;
    }
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
    padding: 0.5rem 1rem;
  }

  button {
    width: 100%;
  }
`

export const FormGroupLink = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  margin-top: 0.5rem;
`
