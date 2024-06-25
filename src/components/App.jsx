import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notifications } from './Notifications/Notifications';

export const App = () => {
  const [ feedback, setFeedback ] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

const handleClick = (type) => {
    setFeedback ((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round(( good / total ) * 100);
  };

  
  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];
    

  return (
      <>
        <Section title="Please Leave Feedback">
        {/* Feedback Component */}
        <FeedbackOptions 
          options={options} 
          onLeaveFeedback={handleClick} 
        />
        </Section>

        <Section title="Statistics">
        {/* Statistics Component */}
        {total > 0 ? (
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={positivePercentage} 
          />
        ) : (
          <Notifications message="There is no feedback" />
        )}
        </Section>
      </>
    );
  };
