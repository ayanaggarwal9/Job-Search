import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/autocomplete.css';
import { connect } from 'react-redux';
import { searchMatchingJobs } from '../actions/actions';

export class Autocomplete extends Component {
 
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ''
    };

    onChange = (e) => {
        console.log('onChanges');

        const { jobs } = this.props;
        const userInput = e.currentTarget.value;

        const filteredOptions = jobs.filter(
            (optionName) =>
                optionName.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
        });
        
    };

    onClick = (e) => {
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: e.currentTarget.innerText
        });
    };
    onKeyDown = (e) => {
        const { activeOption, filteredOptions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption]
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                console.log(activeOption);
                return;
            }
            this.setState({ activeOption: activeOption + 1 });
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,

            state: { activeOption, filteredOptions, showOptions, userInput }
        } = this;
        let optionList;
        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                    <ul className="options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {
                                className = 'option-active';
                            }
                            return (
                                <li className={className} key={index} onClick={onClick}>
                                    {optionName.title}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                optionList = (
                    <div className="no-options">
                        <em>No Option!</em>
                    </div>
                );
            }
        }
        return (
            <div className='search-container'>
                <div className="search">
                    <input
                        type="text"
                        className="search-box form-control mr-sm-2"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                    />
                    <button type='submit' value='search' onClick={(e) => this.props.searchMatchingJobs(this.state.userInput)} className="search-btn btn  my-2 my-sm-0" >Search</button>
                </div>
                {optionList}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        jobs: state.jobs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchMatchingJobs: (userInput) =>dispatch(searchMatchingJobs(userInput)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);



