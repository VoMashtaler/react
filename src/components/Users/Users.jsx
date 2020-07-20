import React from 'react';
import User from './User';
import Paginator from '../common/Paginator/Paginator';


let Users = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>
        <div>
        <Paginator  currentPage={currentPage} 
        onPageChanged={onPageChanged}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        />
        
        </div>
       <div>
        {
            users.map(u => <User user={u} 
                            key={u.id}
                            followingInProgress={props.followingInProgress}
                            unfollow={props.unfollow}
                            follow={props.follow} />
            )
        }
        </div>
    </div>
}

export default Users;