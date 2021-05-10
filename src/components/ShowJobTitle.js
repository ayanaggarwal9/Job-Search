import React from 'react';
import './showTitle.css';
import Navbar from './Navbar';
import { fetchJobs } from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShowJobTitle extends React.Component {
    componentDidMount() {
        if (this.props.jobs.length === 0) {
            this.props.fetchJobs();
        }
    }
    render() {
        const jobTiles = this.props.filteredJobs.map((job) => {
            return (
                <li key={job.id}>
                    <div className="card card-style">
                        <div className="card-body d-flex justify-content-between" >
                            {job.title}
                            <Link to={`/editjob/${job.id}`}>
                                <i className="fas fa-edit"></i>
                            </Link>
                        </div>
                    </div>
                </li>
            )
        });
        return (
            <div className='container-fluid'>
                <Navbar />
                <ul className='list-style' >
                    {jobTiles}
                </ul>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchJobs: () => dispatch(fetchJobs())
    }
}
const mapStateToProps = state => {
    let { filteredJobs, jobs } = state;
    return {
        filteredJobs, jobs
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowJobTitle);