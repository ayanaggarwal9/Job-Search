import React from 'react';
import { connect } from 'react-redux';
import { requestUserData, editUserData } from '../actions/actions';
import { Link } from 'react-router-dom';
import '../styles/editJobs.css';

class EditJobTitle extends React.Component {
    state = {
        title: '', body: ''
    }
    editUserData = () => {
        this.props.editUserData({
            id: this.props.selectedUser.id,
            userId: this.props.selectedUser.userId,
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
        console.log(this.props)
        this.props.requestUserData(this.props.match.params.id)
        this.setState({
            title: this.props.selectedUser.title,
            body: this.props.selectedUser.body
        })
    }
    render() {
        return (
            <div className='edit-page container'>
                <div class="header d-flex align-items-center justify-content-between flex-wrap">
                    <a href="#" class="navbar-brand">
                        <span class="white-head">
                            <span class="pink-head"> Edit </span>
                          Job
                          </span>
                    </a>
                    <Link to='/'><i class="fas fa-times-circle"></i></Link>
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
                        <Link to='/'> <button className='btn btn-save' onClick={this.editUserData} >EDIT</button></Link>
                        <Link to='/'> <button className='btn btn-save'  >Cancel</button></Link>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        selectedUser: state.selectedUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        requestUserData: (id) => dispatch(requestUserData(id)),
        editUserData: (user) => dispatch(editUserData(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditJobTitle);