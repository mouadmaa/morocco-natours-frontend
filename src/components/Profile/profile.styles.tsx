import styled from 'styled-components'

export const ProfileContainer = styled.main`
  background-color: ${({ theme }) => theme.color.grayLight2};
  padding: 12rem 6rem;
  flex: 1;
  position: relative;

  @media only screen and (max-width: 56.25em) {
    padding: 16rem 5vw 8rem;
  }
`

export const UserViewContainer = styled.div`
  background-color: ${({ theme }) => theme.color.grayLight1};
  max-width: 120rem;
  margin: 0 auto;
  min-height: 100vh;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadowLight};
  display: flex;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`
