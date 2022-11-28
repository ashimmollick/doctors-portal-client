import { createBrowserRouter } from "react-router-dom";
import DashbordLauout from "../../layoute/DashbordLauout";
import Main from "../../layoute/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Adddoctor from "../../pages/Dsahboard/AddDoctor/Adddoctor";
import AllUsers from "../../pages/Dsahboard/Dsahboard/AllUsers/AllUsers";
import Dsahboard from "../../pages/Dsahboard/Dsahboard/Dsahboard";
import ManageDoctors from "../../pages/Dsahboard/ManageDoctor.js/ManageDoctors";
import MyAppointment from "../../pages/Dsahboard/MyAppointment/MyAppointment";
import Payment from "../../pages/Dsahboard/Payment/Payment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PricateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashbordLauout></DashbordLauout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><Adddoctor></Adddoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]

    }
])
export default router;