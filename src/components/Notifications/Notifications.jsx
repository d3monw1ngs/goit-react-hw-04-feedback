import PropTypes from 'prop-types';

export const Notifications = ({ message }) => 
  
    <p>{message}</p>;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};