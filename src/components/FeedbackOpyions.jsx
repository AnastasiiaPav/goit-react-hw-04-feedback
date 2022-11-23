import {
    ButtonGood,
    ButtonNeutral,
    ButtonBad,
    ButtonBox,
  } from './App.styled';
  
  export const FeedbackOptions = ({
    OnHandleBad,
    OnHandleNeutral,
    OnHandleGood,
  }) => {
    return (
      <ButtonBox>
      <ButtonGood type="button" onClick={OnHandleGood}>
        Good
      </ButtonGood>
      <ButtonNeutral type="button" onClick={OnHandleNeutral}>
        Neutral
      </ButtonNeutral>
      <ButtonBad type="button" onClick={OnHandleBad}>
        Bad
      </ButtonBad>
    </ButtonBox>
    );
  };
  