import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unffolowAC, setUserAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unffolowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);