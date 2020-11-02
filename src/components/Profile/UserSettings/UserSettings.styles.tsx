import styled from 'styled-components'

export const UserSettingsContainer = styled.div`
  flex: 1;
  padding: 7rem 0;
`

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

export const FormGroupImageContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`

export const FormGroupImage = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  margin-right: 2rem;
`

export const FormGroupContainerButton = styled.div`
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }

  text-align: right !important;
`

export const UserSettingsLine = styled.div`
  margin: 6rem 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.grayLight3};
`

export const UserImageUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  :focus + label {
    outline: 3px solid ${({ theme }) => theme.color.primary};
    outline-offset: 3px;
  }

  :active + label {
    transform: translateY(-1px);
  }
`

export const UserImageUploadLabel = styled.label`
  color: ${({ theme }) => theme.color.primaryLight};
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.primaryLight};
  padding: 3px 6px;
  font-weight: 400;
  transition: all 0.4s;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.grayLight1};
    background-color: rgba(8, 174, 234, 0.8);
    background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
    box-shadow: ${({ theme }) => theme.shadowLight};
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 56.25em) {
    margin: 4rem 0;
  }
`
