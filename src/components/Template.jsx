import {
    Title,
    Statistic,
  } from './App.styled';

import { FeedbackOptions } from './FeedbackOpyions';
  
 export const Template = ({ OnHandleGood, OnHandleNeutral, OnHandleBad, feedbacks, total, procent }) => {
      return (
        <div>
          <Title>Please, leave your feedback ✍📝</Title>
          <FeedbackOptions
          OnHandleGood={OnHandleGood}
          OnHandleNeutral={OnHandleNeutral}
          OnHandleBad={OnHandleBad} />
          <Statistic>Statistics 💹</Statistic>
         
        </div>
      );
    };
    
    
  
  