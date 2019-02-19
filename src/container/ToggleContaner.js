import React from 'react';
import {connect} from 'react-redux';
import {toggle} from '../actions/index';
import {ToggleBar} from './ToggleBar';
const mapStateToProps = (state) => {
    return {
        toggle: state.toggle
    }
};
const mapDispatchToProps = dispatch => {
    return {
        toggledemo: (options) => {
            dispatch(toggle(options))
        }
    }
}
const ToggleConatiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleBar);
export default ToggleConatiner;