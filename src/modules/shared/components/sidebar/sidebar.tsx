import React from "react"
import { useNavigate } from "react-router-dom";


export const SideBar = () => {
    const navigation = useNavigate();
    const navigate = (route: string) => {
        navigation(route)
    }
    return (
        <>
            <div style={{ background: '#d8d8ed' }} className="w-1/6">
                <p>Hello Vishnu</p>
                <p onClick={() => {
                    navigate('smartAdmin')
                }}>Smart Admin</p>
                <p onClick={() => {
                    navigate('orgcreate')
                }}>Create Org</p>
            </div>
        </>
    )
}