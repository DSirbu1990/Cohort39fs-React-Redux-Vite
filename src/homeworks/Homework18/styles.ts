import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: ${colors.PRIMARY};
`

export const RandomJokeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 700px;
  min-height: 300px;
  max-height: 800px;
  padding: 40px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
  overflow-y: auto;
`

export const RandomJokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`

export const RandomJokeText = styled.p`
  font-size: 24px;
  font-weight: bold;
  width: 100%;
`
export const PunchlineText = styled.p`
  font-size: 15px;
  color: blue;
`

export const RandomJokeWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const ButtonControl = styled.div`
  min-width: 100px;
`