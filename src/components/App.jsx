import { Component } from 'react';
import { Statistic } from './Statistic';
import { FeedbackOptions } from './FeedbackOpyions';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  heandleButtonClick = event => {
    this.setState(prevState => ({
      [event.target.textContent]: prevState[event.target.textContent] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    const total = bad + good + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
    const total = bad + good + neutral;
    const totalRewiev = Math.round((100 / total) * good);
    return totalRewiev;
  };

  render() {
    const namesButton = Object.keys(this.state);
    return (
      <div>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={namesButton}
            onLeaveFeedback={this.heandleButtonClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            procent={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
