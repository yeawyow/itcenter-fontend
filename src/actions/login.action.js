import {
    LOGIN_FETCHING,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_STATUS,
    LOGOUT,
    server
 
  } from "../Constants";
  import { httpClient } from './../utils/HttpClient'
  
  export const setStateToFetching = () => ({
    type: LOGIN_FETCHING
  });
  
  export const setStateToSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload
  });
  
  export const setStateToFailed = payload => ({
    type: LOGIN_FAILED,
    payload
  });
  
  export const setStateToLogout = () => ({
    type: LOGOUT
  });
  
  export const login = ({ username, passwordjwt, history }) => {
  
    return async dispatch => {
      dispatch(setStateToFetching());
      const result = await httpClient.post(server.LOGIN_URL, {
        username,
        passwordjwt
      });
      if(result.data.result=="ok"){
        localStorage.setItem(LOGIN_STATUS, "ok")
         dispatch(setStateToSuccess(result.data.result));
         history.push("/jobservice")
      }else{
        localStorage.setItem(LOGIN_STATUS,"nok")
        dispatch(setStateToFailed(result.data.message));
      }
    
    //  alert(JSON.stringify(result.data))
    };
  };
  
  export const isLoggedIn=()=>{
    const loginStatus = localStorage.getItem(LOGIN_STATUS)
   return loginStatus=="ok"
    
  }
  export const reLogin=()=>{
    return dispatch=>{
      const loginStatus = localStorage.getItem(LOGIN_STATUS)
      if (loginStatus=="ok"){
        dispatch(setStateToSuccess({}))
      }
    }
  }

  export const logout = ({ history }) => {
    return dispatch => {
      localStorage.removeItem(LOGIN_STATUS)
      dispatch(setStateToLogout());
      history.push("/");
    };
  };
  