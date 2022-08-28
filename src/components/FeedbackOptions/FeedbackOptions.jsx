import PropTypes from 'prop-types';
import Section from '../Section/Section';
import { List, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <List>
        {options.map(option => {
          return (
            <li key={option}>
              <Button type="button" onClick={() => onLeaveFeedback(option)}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Button>
            </li>
          );
        })}
      </List>
    </Section>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
