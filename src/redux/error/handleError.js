import { refreshUser } from '../auth/authOperations';

const hendlerError = ({ error, cb }) => {
  return dispatch => {
    if (error.request.status === 400 || error.request.status === 401) {
      dispatch(refreshToken(cb));
    }
  };
};

export default hendlerError;
