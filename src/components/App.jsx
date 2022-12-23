import React, { useReducer } from 'react';
import { Container, FeedbackOptions, Section, Statistics } from './';

const options = ['good', 'neutral', 'bad'];

const initialState = {
  good: 0,
  bad: 0,
  neutral: 0,
  total: 0,
  positivePercentage: 0,
};

function reducer(state, action) {
  const total = state.total + 1;
  const good = action.type === 'good' ? state.good + 1 : state.good;
  const positivePercentage = +((good / total) * 100).toFixed(0);
  switch (action.type) {
    case 'good':
      return { ...state, good, positivePercentage, total };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1, total, positivePercentage };
    case 'bad':
      return { ...state, bad: state.bad + 1, total, positivePercentage };
    default:
      return;
  }
}
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFeedbackBtnClick = ({ target: { name } }) => {
    dispatch({ type: name });
  };

  const { good, neutral, bad, total, positivePercentage } = state;
  return (
    <Container>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedbackBtnClick} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </Container>
  );
};

export default App;
