import React from "react";
import { SideBar, Header } from "../shared";
import { Outlet, Link } from 'react-router-dom';

export const MainModule = () => {
    return (
        <div className="w-full h-lvh">
            <div className="flex flex-row w-full h-lvh">
                {/* <div className="w-1/6"> */}
                    <SideBar></SideBar>
                {/* </div> */}

                <div className="flex flex-col w-5/6">
                    <div className="h-24 text-center">
                        <Header />
                    </div>
                    <div className="">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}