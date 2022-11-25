import { Box } from "./App.styled";

import propType from 'prop-types';
import { Component } from 'react';
import { Statistic } from "./Statistic";
import { Template } from "./Template";


export class Reviews extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(currentState => {
      return {
        good: currentState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(currentState => {
      return {
        neutral: currentState.neutral + 1,
      };
    });
  };

  handleBad = () => {
    this.setState(currentState => {
      return {
        bad: currentState.bad + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
   const total = bad + good + neutral
   return total;
  }


  countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
 const total = bad + good + neutral
 const totalRewiev = Math.round(100/total * good)
 return totalRewiev;
  }


  render() {
    return (
      <Box>
        <Template
          OnHandleGood={this.handleGood}
          OnHandleNeutral={this.handleNeutral}
          OnHandleBad={this.handleBad}
          />
          
        <Statistic
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        procent={this.countPositiveFeedbackPercentage()} 
         />
         {/* <FeedbackOptions/> */}
      </Box>
    );
  }
}

Reviews.propType = {
  good: propType.number,
  bad: propType.number,
  neutral: propType.number,
  total: propType.number,
  procent: propType.number,
};


export const App = () => {
  return (
    <div>
      <Reviews/>
    </div>
  );
};
