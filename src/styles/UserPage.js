import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authenticateUser } from "../ducks/users/actions"

export default function UserPage(props) {
    
     const dispatch = useDispatch();
    
    const user = useSelector(state=> state.userReducer.user)

    // dispatch(authenticateUser({email, password}, props.history))

    return (
        <div>
            UserPage
            {console.log(user)}
            
            {/* {console.log(activities)} */}
        </div>
    )
}
