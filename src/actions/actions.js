import {
    REQUEST_JOBS,
    RECEIVE_JOBS,
    RECEIVE_JOBS_ERROR,
    // SELECT_USER,
    REQUEST_USERDATA,
    RECEIVE_USERDATA,
    // RECEIVE_USERDATA_ERROR,
    EDIT_USERDATA,
    SAVE_USERDATA,
    SEARCH_MATCHING_JOBS
    // SAVE_USERDATA_ERROR
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

// export function receiveUserData(json) {
//     return {
//         type: RECEIVE_USERDATA,
//         userData: json,
//     };
// }

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
// export function saveFilteredJobs(filteredJobs) {
//     return {
//         type: SAVE_FILETERED_JOBS,
//         filteredJobs
//     };
// }



// export function fetchJobs(userName) {
//     return dispatch => {
//         dispatch(requestJobs(userName));
//         return axios.get(`https://api.github.com/search/users?q=${userName}&user=name`)
//             .then(res => res.data.items)
//             .then(items => dispatch(receiveUsers(items)))
//             .catch(err => dispatch(receiveUsersErr(err)));
//     };
// }
// export function fetchUserData(user) {
//     return dispatch => {
//         dispatch(requestUserData());
//         return axios.get(`https://api.github.com/users/${user}`)
//             .then(res => res.data)
//             .then(json => dispatch(receiveUserData(json)))
//             .catch(err => dispatch(receiveUserDataErr(err)));
//     };
// }

export function fetchJobs() {
    return dispatch => {
        dispatch(requestJobs());
        return axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then(res => res.data)
            .then(json => dispatch(receiveJobs(json)))
            .catch(err => dispatch(receiveJobsErr(err)));
    };
}

// export function fetchUserAndRepos(user) {
//     return (dispatch, getState) => {
//         return dispatch(fetchUserData(user)).then(() => {
//             debugger;
//             const { currentUserData } = getState();
//             if (
//                 !currentUserData.isFetching &&
//                 currentUserData.userData.message
//             ) {
//                 return;
//             }
//             return dispatch(fetchRepos(user));
//         });
//     };
// }