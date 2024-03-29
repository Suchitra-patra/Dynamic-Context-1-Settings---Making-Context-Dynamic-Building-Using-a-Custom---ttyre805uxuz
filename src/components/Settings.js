import React from "react"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Settings = () =>{
    const {changeGreeting} = useContext(UserContext)

    return(
        <div style={{border:'5px solid red',padding:'8px'}} id="settings">
            <h4>Settings</h4>
            <input type={'text'} onChange={(e)=>changeGreeting(e.target.value)} />
        </div>
    )
}