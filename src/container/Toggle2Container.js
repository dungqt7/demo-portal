import React from 'react';
import { connect } from 'react-redux';
import { Toggle2Bar } from './Toggle2';
import { TOGGLE2_ASYNC } from "../actions/index";

const mapStateToProps = (state) => {
    return {
        toogle2: state.toggle2
    }
};
const mapDispatchToProps = dispatch => {
    return {
        toogledemo2: () => dispatch({ type: TOGGLE2_ASYNC }),
    }
}
const Toggle2Conatiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toggle2Bar);
export default Toggle2Conatiner;