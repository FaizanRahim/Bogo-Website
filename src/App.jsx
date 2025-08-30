// import React from 'react'



// import SignIn from './components/SignIn'
// import Forgot from './components/Forget'
// import Otp from './components/Otp'
// import NewPassword from './components/NewPassword'
// import Register from './components/Register'
// import Dashboard from './components/Administration/Dashboard'

// const App = () => {
//   return (
//     <div>
//       <SignIn/>
//       <Forgot/>
//       <Otp/>
//       <NewPassword/>
//       <Register/>
//       <Dashboard/>


//     </div>
//   )
// }

// export default App



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import your 21 pages here
import RoleManagement from "./components/Administration/RoleManagement";
import Customers from "./components/Administration/Customers";
import Merchants from "./components/Administration/Merchants";
import Product from "./components/Administration/Product";
import Promotion from "./components/Administration/Promotion";
import Payment from "./components/Administration/Payment";
import Orders from "./components/Administration/Orders";
import Reservation from "./components/Administration/Reservation";
import Subscriptions from "./components/Administration/Subscriptions";
import LiveChat from "./components/Administration/LiveChat";
import Contact from "./components/Administration/Contact";
import Review from "./components/Administration/Review";
import Notification from "./components/Administration/Notification";
import Report from "./components/Administration/Report";
import AdsManagement from "./components/Administration/AdsManagement";
import TicketManagement from "./components/Administration/TicketManagement";
import Affiliate from "./components/Administration/Affiliate";
import XPpointManagement from "./components/Administration/XPpointManagement";
import AppManagement from "./components/Administration/AppManagement";
import OffersManagement from "./components/Administration/OffersManagement";

// Dashboard Home page
import DashboardHome from "./components/Administration/DashboardHome";


import SignIn from "./components/SignIn";
import Forgot from "./components/Forget";
import Otp from "./components/Otp";
import NewPassword from "./components/NewPassword";
import Register from "./components/Register";
import Dashboard from "./components/Administration/Dashboard";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Layout with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="role-management" element={<RoleManagement />} />
          <Route path="customers" element={<Customers />} />
          <Route path="merchants" element={<Merchants />} />
          <Route path="product" element={<Product />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orders" element={<Orders />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="live-chat" element={<LiveChat />} />
          <Route path="contact" element={<Contact />} />
          <Route path="review" element={<Review />} />
          <Route path="notification" element={<Notification />} />
          <Route path="report" element={<Report />} />
          <Route path="ads-management" element={<AdsManagement />} />
          <Route path="ticket-management" element={<TicketManagement />} />
          <Route path="affiliate" element={<Affiliate />} />
          <Route path="xp-management" element={<XPpointManagement />} />
          <Route path="app-management" element={<AppManagement />} />
          <Route path="offers-management" element={<OffersManagement />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
