import { useState } from 'react';
import { Statistic } from './Statistic';
import { FeedbackOptions } from './FeedbackOpyions';
import { Section } from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const heandleButtonClick = event => {
    switch (event.target.textContent) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
    // this.setState(prevState => ({
    //   [event.target.textContent]: prevState[event.target.textContent] + 1,
    // }));
  };

  const countTotalFeedback = ( ) => {
  const total =  [good, neutral, bad].reduce((acc, number ) => { return acc += number }, 0) 
    // const total = bad + good + neutral;
   return total;
  };

  const countPositiveFeedbackPercentage = ( ) => {
    return Math.round((good/countTotalFeedback())*100)
    // const total = bad + good + neutral;
    // const totalRewiev = Math.round((100 / total) * good);
    // return totalRewiev;
  };

  return (
    <div>
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={heandleButtonClick}
        />
      </Section>

      <Section title="Statistics">
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          procent={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
