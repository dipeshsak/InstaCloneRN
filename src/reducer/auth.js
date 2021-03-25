import {SET_USER,IS_AUTHETHENTICATED} from '../action/action.types'

const initialState ={
    user:null,
    loading:true,
    isAuthenticated:false
};

export default (state=initialState,action)=>{
     switch (action.type) {
         case SET_USER:
             return {
                 ...state,
                 user:action.payload,
             }
         case IS_AUTHETHENTICATED : 
         return{
             ...state,
             isAuthenticated:action.payload,
             loading:false
         }
     
         default:
             return state
     }
}