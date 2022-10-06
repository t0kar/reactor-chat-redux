// Sender dummy data
const username = 'Lucija Toć';
const picture = 'img/ivana.png';

export function onMessageReply({ id, user }) {
  return { type: 'REPLY', id: id, user: user };
}

export function onSendMessage(message) {
  return {
    type: 'SEND_MESSAGE',
    username: username,
    picture: picture,
    message: message,
  };
}

export function onSendComment(message, parent_id) {
  return {
    type: 'SEND_COMMENT',
    parent_id: parent_id,
    username: username,
    picture: picture,
    message: message,
  };
}
