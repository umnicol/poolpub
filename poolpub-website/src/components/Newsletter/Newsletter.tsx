import React from 'react';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready';

export const ReadyEmailSubscribeStyle = React.memo(
  function ReadyEmailSubscribe() {
    return (
      <EmailSubscribe
        onSubmit={email => alert(`Your email is ${email}.`)}
        useStyles={useReadyEmailSubscribeStyles}
        inputClearedAfterSubmit
      >
        <EmailTextInput placeholder="Enter your email" />
        <SubmitButton>Subscribe</SubmitButton>
      </EmailSubscribe>
    );
  }
);