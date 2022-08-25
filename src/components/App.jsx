import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';
import { Box } from "./Box";


class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    
    if (good !== 0) {
    return Math.round((good / total) * 100);
  } else {
    return 0;
  }
};

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (       
      <Box as="main" backgroundColor="DarkSalmon" m="16px" p="16px">
    <GlobalStyle />
    <FeedbackOptions options={options}
          onLeaveFeedback={this.leaveFeedback } />
    <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage} />
       </Box>
    );
  };
 }
export default App;