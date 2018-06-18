import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
export const FETCH_POST= "FETCH_POST";
export const DELETE_POST= "DELETE_POST";

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '971553985858';
export function fetchPosts(){
    const request = axios.get(`${API_URL}/posts?key=${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}


export function createPost(values, callback) {
  const request = axios.post(`${API_URL}/posts?key=${API_KEY}`, values)
    .then(()=> callback());// callback is our this.props.history.push('/'); in onSubmit handler
  return {
    type: CREATE_POSTS,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${API_URL}/posts/${id}?key=${API_KEY}`);
  
  return {
      type: FETCH_POST,
    payload: request
  }
  
}

export function deletePost(id, callback) {
  const request = axios.delete(`${API_URL}/posts/${id}?key=${API_KEY}`)
    .then(()=>{callback()})
  
  return {
      type: DELETE_POST,
    payload: id
  }
  
}


// SelectBook is an action creator, it needs to return an action,
//an object with a type property