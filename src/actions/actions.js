import {
    REQUEST_JOBS,
    RECEIVE_JOBS,
    RECEIVE_JOBS_ERROR,
    REQUEST_USERDATA,
    RECEIVE_USERDATA,
    EDIT_USERDATA,
    SAVE_USERDATA,
    SEARCH_MATCHING_JOBS
} from './actionTypes';
import axios from 'axios';

function requestJobs() {
    return {
        type: REQUEST_JOBS,
    };
}

function receiveJobs(json) {
    return {
        type: RECEIVE_JOBS,
        jobs: json,
    };
}

function receiveJobsErr(error) {
    return {
        type: RECEIVE_JOBS_ERROR,
        error,
    };
}

export function editUserData(user) {
    return {
        type: EDIT_USERDATA,
        user,
    };
}

export function requestUserData(id) {
    return {
        type: REQUEST_USERDATA,
        id
    };
}

export function saveUserData(user) {
    return {
        type: SAVE_USERDATA,
        user
    };
}
export function searchMatchingJobs(title){
    return {
        type: SEARCH_MATCHING_JOBS,
        title
    };
}

export function fetchJobs() {
    return dispatch => {
        dispatch(requestJobs());
        return axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then(res => res.data)
            .then(json => dispatch(receiveJobs(json)))
            .catch(err => dispatch(receiveJobsErr(err)));
    };
}
