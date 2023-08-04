import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
