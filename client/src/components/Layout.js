import React from 'react'
import Navbar from './NavBar'

export default function Layout({navbar = true , children, apodDrawer, roverDrawer}) {
    return (
        <>
            {navbar && <Navbar apodDrawer={apodDrawer} roverDrawer={roverDrawer}/>}
            <div className="container mt-3">
                {children}
            </div>
        </>
    )
}

