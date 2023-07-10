import { FeedbackWidget } from 'components/FeedbackWidget';

export const App = () => {
  return (
    <FeedbackWidget
      title="Please leave a feedback"
      positiveText="Good"
      negativeText="Bad"
      neutralText="Neutral"
    />
  );
};
