import { ButtonGood, ButtonBox} from './App.styled'
import propTypes from 'prop-types';



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
  
  FeedbackOptions.propTypes= {
    options: propTypes.array,
    name: propTypes.string,
    onLeaveFeedback: propTypes.func,
  }