import {
    Box,
    Title,
    Statistic,
    ReviewBox
  } from './App.styled';
  import { FeedbackOptions } from './FeedbackOptions';
  
 export const Template = ({ OnHandleGood, OnHandleNeutral, OnHandleBad, feedbacks, total, procent }) => {
      return (
        <Box>
          <Title>Please, leave your feedback ✍📝</Title>
          <FeedbackOptions
          OnHandleGood={OnHandleGood}
          OnHandleNeutral={OnHandleNeutral}
          OnHandleBad={OnHandleBad} />
          <Statistic>Statistics 💹</Statistic>
          <ReviewBox>
            <p>Good 👌 : {feedbacks.good}</p>
            <p>Neutral 😐 : {feedbacks.neutral}</p>
            <p>Bad 👎 : {feedbacks.bad}</p>
            <p>Total rewiew 👯‍♀️ : {total}</p>
            <p>Positive feedback: {procent}%</p>
          </ReviewBox>
        </Box>
      );
    };
    
    
  
  