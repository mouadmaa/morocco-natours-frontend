import styled from 'styled-components'

export const SectionDescriptionContainer = styled.section`
  background-color: #fcfcfc;
  margin-top: calc(0px - 9vw);
  display: flex;

  & > * {
    padding: 0 8vw;
    padding-top: 14vw;
    padding-bottom: calc(1vw + 9vw);
    flex: 0 0 50%;
  }

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`

export const OverviewBox = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
`

export const OverviewBoxContainer = styled.div`
  @media only screen and (max-width: 37.5em) {
    padding-top: 5rem;
  }
`

export const OverviewBoxGroupContainer = styled.div`
  min-width: 25rem;

  &:not(:last-child) {
    margin-bottom: 7rem;
  }

  & > h2 {
    margin-bottom: 3rem;
  }
`

export const OverviewBoxDetailsContainer = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 400;

  & > img {
    margin-right: 1.25rem;
    height: 3.5rem;
    width: 3.5rem;
  }

  &:not(:last-child) {
    margin-bottom: 2.25rem;
  }
`

export const OverviewBoxLabel = styled.span`
  font-weight: 700;
  margin-right: 2.25rem;
  text-transform: uppercase;
  font-size: 1.4rem;
`

export const OverviewBoxText = styled.span`
  text-transform: capitalize;
`

export const OverviewBoxImage = styled.img`
  border-radius: 50%;
  height: 3.5rem;
  margin-right: 1.25rem;
`

export const DescriptionBoxContainer = styled.div`
  margin-right: 5rem;

  @media only screen and (max-width: 37.5em) {
    margin-right: 0;
    padding: 9rem 5vw;
    text-align: center;
  }

  & > h2 {
    margin-bottom: 3rem;
  }

  & > p {
    font-size: 1.7rem;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`
