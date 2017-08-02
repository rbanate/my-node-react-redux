import * as types from './actionTypes';
//import authorApi from '../api/mockAuthorApi';
import authorApi from '../api/authorApi';
import * as ajax from './ajaxStatusActions';

export function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
  return function(dispatch){
    dispatch(ajax.beginAjaxCall());
    return authorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));

      }).catch(error => {
        throw(error);
      });
  };
}
