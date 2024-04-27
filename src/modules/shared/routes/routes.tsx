import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../../authentication"
import { MainModule } from "../../mainModule/mainModule"
import { CreatOrg } from "../../organization"
import { SmartAdmin } from "../../smartAdmin"


export const AppRoutes = () => {
    return (
        < BrowserRouter >
            <Routes>
                <Route path="/login" element={<Login />}>
                </Route>
                <Route path="/" element={<MainModule />}>
                    <Route
                        path="smartAdmin"
                        element={
                            <SmartAdmin />
                        }
                    />
                    <Route
                        path="orgcreate"
                        element={
                            <CreatOrg />
                        }
                    />
                    <Route
                        path="opertor"
                        element={
                            <CreatOrg />
                        }
                    />
                    <Route
                        path="staff"
                        element={
                            <CreatOrg />
                        }
                    />
                    <Route
                        path="parent"
                        element={
                            <CreatOrg />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}