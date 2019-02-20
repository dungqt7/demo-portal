import React from 'react';
import {connect} from 'react-redux';
import {ToggleBar} from './ToggleBar';
const mapStateToProps = (state) => {
    return {
        toggle: state.toggle
    }
};
const mapDispatchToProps = dispatch => {
    return {
        toggledemo: () =>  dispatch({ type: "TOGGLE", value: false }),
    }
}
const ToggleConatiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleBar);
export default ToggleConatiner;