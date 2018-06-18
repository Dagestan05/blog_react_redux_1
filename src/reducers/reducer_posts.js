import _ from 'lodash';

import {FETCH_POSTS, FETCH_POST, DELETE_POST} from "../actions";

export default  (state={}, action)=>{
  switch (action.type){
    case FETCH_POST:
      // const post = action.payload.data;
      return state = { ...state,  [action.payload.data.id]: action.payload.data };
      
    case FETCH_POSTS:
      return state = _.mapKeys(action.payload.data, 'id');
      
     case DELETE_POST:
      return _.omit(state, action.payload); // for returning state with no id . id here ===action.payload
      
    default:
      return state
  }
}