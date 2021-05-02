import {
    RECEIVE_JOBS,
    REQUEST_JOBS,
    RECEIVE_JOBS_ERROR,
    SEARCH_MATCHING_JOBS,
    REQUEST_USERDATA,
    EDIT_USERDATA,
} from '../actions/actionTypes';

const initialState = {
    jobs: [],
    filteredJobs: [],
    isFetching: false,
    selectedUser: {},
    error: ''
}

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_JOBS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_JOBS:
            return Object.assign({}, state, {
                isFetching: false,
                jobs: action.jobs,
                filteredJobs: action.jobs
            });
        case RECEIVE_JOBS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
            });
        case EDIT_USERDATA:
            return Object.assign({}, state, {
                jobs: state.jobs.map((user) => {
                    if (user.id === action.user.id) {
                        return action.user;
                    }
                    else return user;
                }),
                filteredJobs: state.filteredJobs.map((user) => {
                    if (user.id === action.user.id) {
                        return action.user;
                    }
                    else return user;
                }),
                selectedUser: {}
            })

        case SEARCH_MATCHING_JOBS:
            if (action.title === '') {
                return Object.assign({}, state, {
                    filteredJobs: state.jobs
                });
            }
            else {
                return Object.assign({}, state, {
                    filteredJobs: state.jobs.filter(job => {
                        return job.title.localeCompare(action.title) === 0
                    })

                });
            }

        case REQUEST_USERDATA:
            return Object.assign({}, state, {
                selectedUser: state.jobs[action.id]
            });

        default:
            return state;
    }
}

export default jobReducer;