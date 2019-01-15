import axios from 'axios';

const ROOT_URL = 'https://api.github.com/search/users';

export const fetchDetail = (term) =>{
  const url = `${ROOT_URL}?q=${term}`;
  const request = axios.get(url);

  return{
    type: 'FETCH_DETAIL',
    payload: request
  };
}