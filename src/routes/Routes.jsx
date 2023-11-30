import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home/Home";
import Main from "../layouts/MainLayout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ContactUs from "../pages/ContactUs/ContactUs";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import MainDashboard from "../pages/Dashboard/MainDashboard/MainDashboard";
import ParticipantProfile from "../pages/Dashboard/Participants/ParticipantProfile/ParticipantProfile";
import RegisteredCamps from "../pages/Dashboard/Participants/RegisteredCamps/RegisteredCamps";
import PaymentHistory from "../pages/Dashboard/Participants/PaymentHistory/PaymentHistory";
import FeedBack from "../pages/Dashboard/Participants/FeedBack/FeedBack";
import ProfessionalProfile from "../pages/Dashboard/Professionals/ProfessionalProfile/ProfessionalProfile";
import AddUpcomingCamp from "../pages/Dashboard/Organizers/AddUpcomingCamp/AddUpcomingCamp";
import ManageUpcomingCamps from "../pages/Dashboard/Organizers/ManageUpcomingCamps/ManageUpcomingCamps";
import OrganizerProfile from "../pages/Dashboard/Organizers/OrganizerProfile/OrganizerProfile";
import AddCamp from "../pages/Dashboard/Organizers/AddCamp/AddCamp";
import ManageCamps from "../pages/Dashboard/Organizers/ManageCamps/ManageCamps";
import ManageRegisteredCamps from "../pages/Dashboard/Organizers/ManageRegisteredCamps/ManageRegisteredCamps";
import AcceptedCamps from "../pages/Dashboard/Professionals/AcceptedCamps/AcceptedCamps";
import CampDetails from "../pages/CampDetails/CampDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import OrganizerRoute from "./OrganizerRoute";
import UpcomingCampDetails from "../pages/HomePage/UpcomingCamps/UpcomingCampDetails";
import Payment from "../pages/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/camp-details/:campId',
        element:<CampDetails></CampDetails>,
      },
      {
        path:'/upcoming-camp-details/:campId',
        element:<UpcomingCampDetails></UpcomingCampDetails>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/available-camps',
        element: <PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><MainDashboard></MainDashboard></PrivateRoute>,
        children: [
          // 
          // participants
          // 
          {
            path: '/dashboard/participant-profile',
            element: <ParticipantProfile></ParticipantProfile>
          },
          {
            path: '/dashboard/registered-camps',
            element: <RegisteredCamps></RegisteredCamps>
          },
          {
            path: '/dashboard/payment-history',
            element: <PaymentHistory></PaymentHistory>
          },
          {
            path: '/dashboard/feedback-and-ratings',
            element: <FeedBack></FeedBack>
          },
          {
            path : '/dashboard/payment/:id',
            element : <Payment></Payment>
          },

          // 
          // professionals
          // 
          {
            path: '/dashboard/professional-profile',
            element: <ProfessionalProfile></ProfessionalProfile>
          },
          {
            path: '/dashboard/accepted-camps',
            element: <AcceptedCamps></AcceptedCamps>
          },

          // 
          // Organizers
          // 
          {
            path: '/dashboard/organizer-profile',
            element: <OrganizerRoute><OrganizerProfile></OrganizerProfile></OrganizerRoute>
          },
          {
            path: '/dashboard/add-a-camp',
            element: <OrganizerRoute><AddCamp></AddCamp></OrganizerRoute>
          },
          {
            path: '/dashboard/manage-camps',
            element: <OrganizerRoute><ManageCamps></ManageCamps></OrganizerRoute>
          },
          {
            path: '/dashboard/manage-registered-camps',
            element: <OrganizerRoute><ManageRegisteredCamps></ManageRegisteredCamps></OrganizerRoute>
          },
          {
            path: '/dashboard/add-upcoming-camp',
            element: <OrganizerRoute><AddUpcomingCamp></AddUpcomingCamp></OrganizerRoute>
          },
          {
            path: '/dashboard/manage-upcoming-camps',
            element: <OrganizerRoute><ManageUpcomingCamps></ManageUpcomingCamps></OrganizerRoute>
          },

        ]
      }
    ]
  },
]);