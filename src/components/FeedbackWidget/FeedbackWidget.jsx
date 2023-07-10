import PropTypes from 'prop-types';

import { useFeedback } from 'hooks';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistic } from 'components/Statistics';

export const FeedbackWidget = ({
  title,
  positiveText,
  negativeText,
  neutralText,
}) => {
  const [badFbk, setBadFdk] = useFeedback(0);
  const [neutralFbk, setNeutralFdk] = useFeedback(0);
  const [goodFbk, setGoodFdk] = useFeedback(0);

  const total = badFbk + neutralFbk + goodFbk;

  const handleFeedbackClick = ({ target: { name } }) => {
    switch (name) {
      case 'bad':
        setBadFdk();
        break;
      case 'neutral':
        setNeutralFdk();
        break;
      case 'good':
        setGoodFdk();
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((goodFbk / total) * 100);
  };

  return (
    <>
      <Section title={title}>
        <FeedbackOptions
          optionsText={{ positiveText, negativeText, neutralText }}
          onLeaveFeedback={handleFeedbackClick}
        />
      </Section>

      <Section title="Statistics">
        <Statistic
          good={goodFbk}
          neutral={neutralFbk}
          bad={badFbk}
          optionsText={{ positiveText, negativeText, neutralText }}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

FeedbackWidget.propTypes = {
  title: PropTypes.string.isRequired,
  positiveText: PropTypes.string.isRequired,
  negativeText: PropTypes.string.isRequired,
  neutralText: PropTypes.string.isRequired,
};
