import {CREATE_MEETING} from '@actions/types';

const INITIAL_STATE = {
  meetings: [],
};

export default reducer = (state=INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case CREATE_MEETING:
      return {
        ...state,
        meetings: payload.meeting,
      };
    default:
      return state;
  }
};