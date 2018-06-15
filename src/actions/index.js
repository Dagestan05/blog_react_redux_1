import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '971553985858';
export function fetchPosts(){
    const request = axios.get(`${API_URL}/posts?key=${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

// SelectBook is an action creator, it needs to return an action,
//an object with a type property