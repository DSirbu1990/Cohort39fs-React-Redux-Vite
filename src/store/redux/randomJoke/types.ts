export interface RandomJoke {
    id: string
    joke: string 
    punchline: string
}

export interface RandomJokeSliceState{
    randomJoks: RandomJoke[]
    error: string | undefined
}