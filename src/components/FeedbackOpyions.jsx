import { ButtonGood, ButtonBox} from './App.styled'

  export const FeedbackOptions = ({
  options, onLeaveFeedback
  }) => {
    return (
    <ButtonBox>
      {options.map(name => <li key={name}>
        <ButtonGood type="button" onClick={onLeaveFeedback}>{name}</ButtonGood>
      </li>)}

    </ButtonBox>
   
    );
  };
  