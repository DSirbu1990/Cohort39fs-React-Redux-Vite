import { v4 } from "uuid"
import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokeActions,
  randomJokeSelectors,
} from "store/redux/randomJoke/randomJokeSlice"
import { RandomJoke } from "store/redux/randomJoke/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  RandomJokeCard,
  RandomJokeContainer,
  RandomJokeText,
  PunchlineText,
  RandomJokeWrapper,
  ButtonControl,
} from "./styles"

function Homework18() {
  const dispatch = useAppDispatch()
  const randomJoks = useAppSelector(randomJokeSelectors.randomJoks)
  const error = useAppSelector(randomJokeSelectors.error)

  const getRandomJoke = () => {
    dispatch(randomJokeActions.getRandomJoke("Some data"))
  }
  const onDeletAllJoks = () => {
    dispatch(randomJokeActions.deleteAllJoks())
  }

  const randomJokeParagraphs = randomJoks.map(
    (randomJoke: RandomJoke, index: number) => {
      const onDeleteJoke = () => {
        dispatch(randomJokeActions.deleteRandomJoke(randomJoke.id))
      }
      return (
        <RandomJokeWrapper key={v4()}>
          <RandomJokeText>
            {`${index + 1}.`}
            {randomJoke.joke}
            <PunchlineText>{randomJoke.punchline}</PunchlineText>
          </RandomJokeText>
          <ButtonControl>
            <Button isRed name="Delete Joke" onClick={onDeleteJoke} />
          </ButtonControl>
        </RandomJokeWrapper>
      )
    },
  )

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <RandomJokeCard>
        <ButtonControl>
          {randomJoks.length > 0 && (
            <Button
              name="Delete All Jokes"
              type="button"
              onClick={onDeletAllJoks}
              isRed={true}
            />
          )}
        </ButtonControl>
        <RandomJokeContainer>
          {randomJoks.length > 0 && randomJokeParagraphs}
        </RandomJokeContainer>
        <Button name="Get Random Joke" onClick={getRandomJoke} />
      </RandomJokeCard>
    </PageWrapper>
  )
}

export default Homework18
