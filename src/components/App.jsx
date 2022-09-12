import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(state);

  const leaveFeedback = propKey=> {
    setState(prevState => ({ ...prevState, [propKey]: state[propKey] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((total, item) => total + item);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();

    if (good !== 0) {
      return Math.round((good / total) * 100);
    } else {
      return 0;
    }
  };

  return (
    <Box
      as="main"
      backgroundColor="#0079bf"
      m="16px"
      p="16px"
      width="560px"
      boxShadow="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    >
      <GlobalStyle />
      <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      <Statistics
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </Box>
  );
};
export default App;
