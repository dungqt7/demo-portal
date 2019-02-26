import React from 'react';
import { connect } from 'react-redux';
import { ShowBar } from './Show';
import { SHOW_ASYNC } from "../actions/index";

const mapStateToProps = (state) => {
    return {
        show: state.show
    }
};
const mapDispatchToProps = dispatch => {
    return {
        showTooltip: () =>dispatch({ type: SHOW_ASYNC }),
    }
}
const ShowConatiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBar);
export default ShowConatiner;