import React from 'react';
import { connect } from 'react-redux';
import { Toggle1Bar } from './Toggle1';
import { TOGGLE1_ASYNC } from "../actions/index";

const mapStateToProps = (state) => {
    return {
        toogle1: state.toggle1
    }
};
const mapDispatchToProps = dispatch => {
    return {
        toogledemo1: () => dispatch({ type: TOGGLE1_ASYNC }),
    }
}
const Toggle1Conatiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toggle1Bar);
export default Toggle1Conatiner;