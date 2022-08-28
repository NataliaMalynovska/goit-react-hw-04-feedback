import PropTypes from 'prop-types';
import Section from '../Section';
import Notification from '../Notification';
import { Box } from '../Box';
import { Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Section title="Statistics">
      <Box p="16px">
        {total() > 0 ? (
          <ul>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total()}</Item>
            <Item>Positive feedback: {positivePercentage()}%</Item>
          </ul>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Box>
    </Section>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;
