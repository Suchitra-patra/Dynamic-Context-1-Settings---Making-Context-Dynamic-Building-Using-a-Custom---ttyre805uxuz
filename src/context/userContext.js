import React, { createContext, useState } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    const [greeting, setGreeting] = useState('Hello')
    const changeGreeting = (newGreeting) => {
        setGreeting(newGreeting)
    }
    return (
        <UserContext.Provider value={{ greeting, changeGreeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }