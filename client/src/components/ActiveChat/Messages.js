import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import moment from 'moment';
import { SenderBubble, OtherUserBubble } from '.';

const Messages = props => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {' '}
      {messages.map(message => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
      {' '}
    </Box>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.any).isRequired,
  userId: PropTypes.string.isRequired,
  otherUser: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Messages;
