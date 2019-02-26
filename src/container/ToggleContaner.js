import React from 'react';
import {connect} from 'react-redux';
import {ToggleBar} from './ToggleBar';
import {TOGGLE_ASYNC} from '../actions/index';
const mapStateToProps = (state) => {
    return {
        toggle: state.toggle
    }
};
const mapDispatchToProps = dispatch => {
    return {
        toggledemo: () =>  dispatch({ type: TOGGLE_ASYNC}),
    }
}
const ToggleConatiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleBar);
export default ToggleConatiner;