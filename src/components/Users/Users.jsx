import React from 'react';
import styles from "./users.module.css"


let Users = (props) => {
        // let mass = {users: [
        //     { id: 1, photoUrl: 'C:/Users/User/Desktop/TheMASK/Logo1.jpg', 
        //     followed: false, fullName: 'Somebody1', status: "I am number 1", location: { city: 'Lviv', country: 'Ukraine' } },
        //     { id: 2, photoUrl: 'C:/Users/User/Desktop/TheMASK/Logo1.jpg', 
        //     followed: true, fullName: 'Somebody2', status: "I am number 2", location: { city: 'Kyiv', country: 'Ukraine' } },
        //     { id: 3, photoUrl: 'C:/Users/User/Desktop/TheMASK/Logo1.jpg',
        //      followed: true, fullName: 'Somebody3', status: "I am number 3", location: { city: 'Warszaw', country: 'Poland' } },
        //     { id: 4, photoUrl: 'C:/Users/User/Desktop/TheMASK/Logo1.jpg',
        //      followed: false, fullName: 'Somebody4', status: "I am number 4", location: { city: 'Berlin', country: 'Germany' } },
    
        // ]}
        // if (props.users.length === 0) {
        //     props.setUsers(mass)
        // }





    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt='1242432' className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick = { () => {props.unfollow(u.id)}}>Follow</button>
                         : <button onClick = { () => {props.follow(u.id)}}>Unfollow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
                    </span>
                    <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
                    </span>
                </span>
                </div>
                )
        }
        
    </div>
};

export default Users;