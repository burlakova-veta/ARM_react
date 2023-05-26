import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from "react-router-dom"

export default function Roo() {
    return (
        <div className="App">
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}