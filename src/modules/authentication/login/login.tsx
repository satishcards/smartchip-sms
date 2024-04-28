// import React, { useState } from "react"
import React, { useState, useEffect } from "react";
import VideoPlayer from "react-background-video-player";
import * as Components from "./Styled-Component";
import './Login.css'
import { useNavigate } from 'react-router-dom';



export const Login = () => {
    const [signIn, toggle] = useState(true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    //   const navigate = useNavigate();
    //   useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //       navigate('/');
    //     }
    //   }, [navigate]);
    //   const handleSignIn = async (event:any) => {
    //     event.preventDefault();
    //     try {
    //       const body = {
    //         userName: userName,
    //         password: password
    //       };
    //     //   const response = await Login(body)
    //     //   const { token } = response?.data;
    //     //   localStorage.setItem('token', token);
    //       navigate('/');
    //     } catch (error:any) {
    //       setErrorMessage(error.response.data.message);
    //     }
    //   };   
    return (
        <>
            <div className="authentication">
                <VideoPlayer
                      style={{
                        width: "100vw",
                        height: "100vh",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: -1,
                      }}
                    className="video"
                    src='/Assets/Login-Background.mp4'
                    autoPlay={true}
                    muted={true}
                    loop={true}
                />

                <Components.Container>
                    <Components.SignInContainer>
                        <Components.Form>
                            <div className="logo-con">
                                <img className="logo" src="/Assets/dhrushti-logo.svg" alt="Logo"></img>
                            </div>
                            <Components.Input type="text" placeholder="User Name" value={userName} onChange={(e: any) => setUserName(e.target.value)} />
                            <Components.Input type="password" placeholder="Password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
                            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                            <Components.Button>Sign In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer>
                        <Components.Overlay>
                            <Components.RightOverlayPanel>
                                <Components.Title>Hello, Dignitaries!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your Login Details And Start Journey With Us
                                </Components.Paragraph>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </div>
            <footer className="auth-footer">
                {new Date().getFullYear()} &copy; Dhrushti - Educational Management System - Developed By: <a style={{ color: 'rgb(2,0,36)', fontWeight: 'bold' }} href="http://smartchiptechno.com" rel="noopener noreferrer" target="_blank">Smartchip Techno</a>.
            </footer>
        </>
    )
}