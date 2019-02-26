import React from 'react';
import { connect } from 'react-redux';
import { ShowBar } from './Show';
const mapStateToProps = (state) => {
    return {
        show: state.show
    }
};
const mapDispatchToProps = dispatch => {
    return {
        show: () => dispatch({ type: "SHOW", value: false }),
    }
}
const ShowConatiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBar);
export default ShowConatiner;