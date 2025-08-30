import React, { useState } from "react";
import logo from "../../assets/bogo.png";
import { DollarSign } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  Store,
  Package,
  Tag,
  CreditCard,
  ShoppingBag,
  Calendar,
  Layers,
  MessageCircle,
  Phone,
  Star,
  Bell,
  FileText,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  Search,
  Flag,
  Ticket,
  Gift,
  Smartphone,
  Award,
  Send,
  Mail,
  ChevronDown,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy Data for Chart
const salesData = [
  { month: "Jan", value1: 40, value2: 30 },
  { month: "Feb", value1: 50, value2: 20 },
  { month: "Mar", value1: 60, value2: 35 },
  { month: "Apr", value1: 70, value2: 45 },
  { month: "May", value1: 50, value2: 55 },
  { month: "Jun", value1: 65, value2: 50 },
  { month: "Jul", value1: 80, value2: 60 },
  { month: "Aug", value1: 70, value2: 65 },
  { month: "Sep", value1: 85, value2: 75 },
  { month: "Oct", value1: 90, value2: 80 },
  { month: "Nov", value1: 95, value2: 70 },
  { month: "Dec", value1: 100, value2: 85 },
];

// Sidebar Items
const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Role Management", icon: Flag },
  { name: "Customers", icon: Users },
  { name: "Merchants", icon: Store },
  { name: "Product", icon: Package },
  { name: "Promotion", icon: Tag },
  { name: "Payment", icon: CreditCard },
  { name: "Orders", icon: ShoppingBag },
  { name: "Reservation", icon: Calendar },
  { name: "Subscriptions", icon: Layers },
  { name: "Live Chat", icon: MessageCircle },
  { name: "Contact", icon: Phone },
  { name: "Review", icon: Star },
  { name: "Notification", icon: Bell },
  { name: "Report", icon: FileText },
  { name: "Ads Management", icon: Megaphone },
  { name: "Ticket Management", icon: Ticket },
  { name: "Affiliate", icon: Users },
  { name: "XP point management", icon: Award },
  { name: "App Management", icon: Smartphone },
  { name: "Offers Management", icon: Gift },
];

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#0d0d0d] text-white">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-[#111] p-4 flex flex-col transition-all duration-300 relative`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-6 bg-gray-800 rounded-full p-1"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>

        {/* Logo */}
        <h1 className="text-2xl font-bold mb-6">
          <img src={logo} alt="logo" />
        </h1>

        {/* Country Selector */}
        <div className="bg-black px-3 py-2 rounded-lg mb-6 text-center text-sm">
          Canada
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-full transition ${
                idx === 0
                  ? "bg-green-500 text-black font-semibold"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {isOpen && <span>{item.name}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* ✅ Top Bar */}
        <div className="flex justify-between items-center">
          {/* Search Box */}
          <div className="flex items-center bg-[#1a1a1a] px-4 py-2 rounded-full w-96">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>

          {/* Right Icons + Profile */}
          <div className="flex items-center gap-4">
            {[{ icon: Send }, { icon: Bell, notification: true }, { icon: Mail }].map(
              (item, idx) => (
                <div
                  key={idx}
                  className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-800 cursor-pointer"
                >
                  <item.icon className="w-5 h-5 text-gray-300" />
                  {item.notification && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </div>
              )
            )}

            {/* Profile */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-9 h-9 rounded-full"
              />
              <span className="hidden md:inline">Alex Robert</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* ✅ Dashboard Body */}

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[ 
            { title: "Total Sales", value: "$21.2K", change: "+8.5%", icon: ShoppingBag },
            { title: "Expenses", value: "$16.0K", change: "-2.1%", icon: CreditCard },
            { title: "Profit", value: "$259.0", change: "+5.2%", icon: DollarSign },
            { title: "Visitors", value: "13.1K", change: "+10.4%", icon: Users }
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-5 rounded-2xl flex items-center gap-4 shadow-lg"
            >
              <div className="p-3 bg-green-500 text-black rounded-xl">
                <card.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{card.title}</p>
                <h3 className="text-xl font-bold">{card.value}</h3>
                <p
                  className={`text-sm mt-1 ${
                    card.change.includes("+") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {card.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Chart */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Sales Figures</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value1"
                stroke="#4ade80"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="value2"
                stroke="#6366f1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* New Customers */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4">New Customers</h2>
            <ul className="space-y-3">
              {["John Doe", "Sarah Smith", "Mike Johnson"].map((name, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{name}</span>
                  <span className="text-gray-400 text-sm">Active</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transaction History */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
            <table className="w-full text-sm">
              <thead className="text-gray-400">
                <tr>
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[{ name: "Payment Received", status: "Success", amount: "$240.0" }, { name: "Payment Failed", status: "Failed", amount: "$99.0" }, { name: "Refund Issued", status: "Refund", amount: "$120.0" }].map((row, idx) => (
                  <tr key={idx} className="border-t border-gray-800">
                    <td className="py-2">{row.name}</td>
                    <td className={`py-2 ${row.status === "Success" ? "text-green-500" : row.status === "Failed" ? "text-red-500" : "text-yellow-500"}`}>
                      {row.status}
                    </td>
                    <td className="py-2">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
