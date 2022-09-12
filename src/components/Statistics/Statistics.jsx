import PropTypes from 'prop-types';
import Section from '../Section';
import Notification from '../Notification';
import { Box } from '../Box';
import { Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Section title="Statistics">
      <Box pb="16px" pl="16px"  boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;" mt="16px">
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
