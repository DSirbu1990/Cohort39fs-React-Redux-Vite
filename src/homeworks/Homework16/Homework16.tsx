import { useAppDispatch, useAppSelector } from "store/hooks"
import Feedback from "components/Feedback/Feedback";
import {
    feedbackSliceSelectors,
    feedbackSliceActions
} from "store/redux/feedback/feedbackSlice"

import { Homework16Wrapper} from "./styles";


function Homework16() {
    const dispatch = useAppDispatch()

    const like = useAppSelector(feedbackSliceSelectors.like)
    console.log (like)

    const dislike = useAppSelector (feedbackSliceSelectors.dislike)
    console.log (dislike)

    const onLike = () => {
        dispatch(feedbackSliceActions.like())
    }

    const onDislike = () => {
        dispatch(feedbackSliceActions.dislike())
    }

    const restResults = () => {
        dispatch(feedbackSliceActions.resetResults())
    }
   
  return (
    <Homework16Wrapper>
           <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={restResults}
      />
    
    </Homework16Wrapper>
  );
}

export default Homework16;