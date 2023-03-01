import { refreshUser } from '../auth/operations';

const hendlerError = ({ error, cb }) => {
  return dispatch => {
    if (error.request.status === 400 || error.request.status === 401) {
      dispatch(refreshUser(cb));
    }
  };
};

export default hendlerError;
