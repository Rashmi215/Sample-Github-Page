import _ from 'lodash';

const userReducer = (state = {}, action) =>{
  switch(action.type){
    case 'FETCH_DETAIL' :
       console.log(action.payload.data);
       // let data = _.mapKeys(action.payload.data, 'id');
       return _.mapKeys(action.payload.data, 'id');
      // return [...state, action.payload.data ];
    default: return state;
  }
};

export default userReducer;