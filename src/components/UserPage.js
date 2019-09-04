import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authenticateUser } from "../ducks/users/actions"
import {Link} from "react-router-dom"
import { getUserActivity } from '../ducks/activities/actions';
import {useEffect} from "react"
export default function UserPage(props) {
    
     const dispatch = useDispatch();

     const state = useSelector(state=>state)
    
    const user = state.userReducer.user

    // dispatch(authenticateUser({email, password}, props.history))
 function getActivities(id){
    dispatch(getUserActivity(id, props.historty))
 }

 useEffect(() => {
getActivities(user.id)
 }, [])


    return (
        <div>
            UserPage
            <Link to={`/activitypage`}>activities</Link>
            {console.log(user)}
            {console.log(state)}
        </div>
    )
}
