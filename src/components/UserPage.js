import React from 'react'
import userReducer from '../ducks/users/reducer'
import { shallowEqual, useSelector } from 'react-redux'
import {RootState} from '../ducks/store'



export default function UserPage(props) {
    
    const user = useSelector(state=> state.userReducer.user)

    //const counter = useSelector((state: RootState) => state.counter)

    return (
        <div>
            UserPage
            {console.log(user)}
        </div>
    )
}
