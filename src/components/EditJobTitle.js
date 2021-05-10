import React from 'react';
import { connect } from 'react-redux';
import { requestUserData, editUserData } from '../actions/actions';
import { Link } from 'react-router-dom';
import '../styles/editJobs.css';
import PropTypes from 'prop-types';

class EditJobTitle extends React.Component {
    state = {
        title: '', body: ''
    }
    editUserData = () => {
        let editedUser = this.props.selectedUser.find(user => user.id == this.props.match.params.id)
        this.props.editUserData({
            id: editedUser.id,
            userId: editedUser.userId,
            title: this.state.title, body: this.state.body
        })
    }
    handleBodyChange = e => {
        this.setState({ body: e.target.value })
    }
    handleTitleChange = e => {
        this.setState({ title: e.target.value })
    }
    componentDidMount() {
        let userJob = this.props.selectedUser.find(x => x.id == this.props.match.params.id)
        this.setState({
            title: userJob.title,
            body: userJob.body
        })
    }
    render() {
        return (
            <div className='edit-page container'>
                <div className="header d-flex align-items-center justify-content-between flex-wrap">
                    <a href="#" className="navbar-brand">
                        <span className="white-head">
                            <span className="pink-head"> Edit </span>
                          Job
                          </span>
                    </a>
                    <Link to='/'><i className="fas fa-times-circle"></i></Link>
                </div>
                <div className='edit-body'>
                    <div className='edit-area'>
                        <label>Title:</label>
                        <input type='text' value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
                    <div className='edit-area d-flex align-items-cener'>
                        <label>Body:</label>
                        <textarea rows='3' value={this.state.body} onChange={this.handleBodyChange} />
                    </div>
                    <div className='d-flex flex-row-reverse'>
                        <Link to='/'> <button className='btn btn-save' onClick={this.editUserData}>UPDATE</button></Link>
                        <Link to='/'> <button className='btn btn-save'  >Cancel</button></Link>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        selectedUser: state.filteredJobs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        requestUserData: (id) => dispatch(requestUserData(id)),
        editUserData: (user) => dispatch(editUserData(user))
    }
}
EditJobTitle.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(EditJobTitle);