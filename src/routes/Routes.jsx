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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/camp-details/:campId',
        element:<CampDetails></CampDetails>,
      }
      ,
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
        element: <AvailableCamps></AvailableCamps>
      },
      {
        path: '/dashboard',
        element: <MainDashboard></MainDashboard>,
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
            element: <OrganizerProfile></OrganizerProfile>
          },
          {
            path: '/dashboard/add-a-camp',
            element: <AddCamp></AddCamp>
          },
          {
            path: '/dashboard/manage-camps',
            element: <ManageCamps></ManageCamps>
          },
          {
            path: '/dashboard/manage-registered-camps',
            element: <ManageRegisteredCamps></ManageRegisteredCamps>
          },
          {
            path: '/dashboard/add-upcoming-camp',
            element: <AddUpcomingCamp></AddUpcomingCamp>
          },
          {
            path: '/dashboard/manage-upcoming-camps',
            element: <ManageUpcomingCamps></ManageUpcomingCamps>
          },

        ]
      }
    ]
  },
]);