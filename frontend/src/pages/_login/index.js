import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useResolvedPath } from 'react-router'

import LoginDefault from './default'
import LoginWelcome from './welcome'

//PASS NEXT ROUTE AFTER LOGIN FROM ROUTER STATE
export default () => {
    const url = useResolvedPath('').pathname
    return (
        <Routes>
            <Route path="/" element={<LoginDefault />} />
            <Route path="/welcome" element={<LoginWelcome />} />
            {/* <Navigate to={`${match.url}`} /> */}
        </Routes>
    )
}
