import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Download, BarChart3, Edit3, Code, Hand } from 'lucide-react';

const DashboardHome = () => {
  // Sample data for the chart
  const chartData = [
    { month: 'Jan', netAmount: 600, paidAmount: 550 },
    { month: 'Feb', netAmount: 650, paidAmount: 620 },
    { month: 'Mar', netAmount: 700, paidAmount: 680 },
    { month: 'Apr', netAmount: 750, paidAmount: 720 },
    { month: 'May', netAmount: 800, paidAmount: 770 },
    { month: 'Jun', netAmount: 780, paidAmount: 750 },
    { month: 'Jul', netAmount: 820, paidAmount: 800 },
    { month: 'Aug', netAmount: 600, paidAmount: 580 },
    { month: 'Sep', netAmount: 500, paidAmount: 480 },
    { month: 'Oct', netAmount: 450, paidAmount: 430 },
    { month: 'Nov', netAmount: 500, paidAmount: 470 },
    { month: 'Dec', netAmount: 550, paidAmount: 520 }
  ];

  return (
    <div className="bg-[#222222] text-gray-100 min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Show:</span>
          <div className="bg-gray-800 px-2 py-1 rounded text-sm">
            <select
              name="section"
              className="bg-transparent focus:outline-none text-gray-200"
            >
              <option>This Year</option>
              <option>Last Year</option>
              <option>Last 3 Years</option>
            </select>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded flex items-center gap-2 text-sm transition-colors w-full sm:w-auto justify-center">
          <Download size={16} />
          Generate Report
        </button>
      </div>

      {/* Analytics Overview */}
      <div className="mb-8">
        <div className="bg-[#222222] p-4 sm:p-6 rounded-lg">
          <h2 className="text-lg font-medium mb-6">Analytics Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Sales Card */}
            <div className="bg-[#171717] p-4 sm:p-6 rounded-lg">
              <div className="text-gray-400 text-sm mb-2">SALES</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">$21.2K</div>
              <div className="text-gray-500 text-xs mb-3">($19.2K last year)</div>
              <div className="flex items-center text-green-400 text-sm">
                <span className="mr-1">↗</span>
                <span>10.25 %</span>
              </div>
            </div>

            {/* Purchase Card */}
            <div className="bg-[#171717] p-4 sm:p-6 rounded-lg">
              <div className="text-gray-400 text-sm mb-2">PURCHASE</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">$16.0K</div>
              <div className="text-gray-500 text-xs mb-3">($20.1K last year)</div>
              <div className="flex items-center text-red-400 text-sm">
                <span className="mr-1">↘</span>
                <span>20.15 %</span>
              </div>
            </div>

            {/* Return Card */}
            <div className="bg-[#171717] p-4 sm:p-6 rounded-lg">
              <div className="text-gray-400 text-sm mb-2">RETURN</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">$259.0</div>
              <div className="text-gray-500 text-xs mb-3">($300.5 last year)</div>
              <div className="flex items-center text-green-400 text-sm">
                <span className="mr-1">↗</span>
                <span>15.20 %</span>
              </div>
            </div>

            {/* Marketing Card */}
            <div className="bg-[#171717] p-4 sm:p-6 rounded-lg">
              <div className="text-gray-400 text-sm mb-2">MARKETING</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">$13.1K</div>
              <div className="text-gray-500 text-xs mb-3">($10.5K last year)</div>
              <div className="flex items-center text-green-400 text-sm">
                <span className="mr-1">↗</span>
                <span>32.84 %</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Figures Chart */}
      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h3 className="text-lg font-medium">Sales Figures</h3>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-400">Net amount</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-400">Paid amount</span>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="h-60 sm:h-72 md:h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                domain={[0, 1000]}
                ticks={[0, 200, 400, 600, 800, 1000]}
              />
              <Line
                type="monotone"
                dataKey="netAmount"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: '#3B82F6' }}
              />
              <Line
                type="monotone"
                dataKey="paidAmount"
                stroke="#10B981"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: '#10B981' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Chart Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-400">
          <div className="flex items-center gap-2 p-2 bg-blue-600 rounded cursor-pointer">
            <BarChart3 size={16} className="text-white" />
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors">
            <Hand size={16} />
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors">
            <div className="w-4 h-4 border border-gray-400 rounded"></div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm text-white transition-colors">
            Ask to edit
          </button>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors">
            <Edit3 size={16} />
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors">
            <BarChart3 size={16} />
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors">
            <Code size={16} />
          </div>
        </div>

        {/* Month indicator */}
        <div className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 text-right hidden lg:block">
          <div className="text-gray-400 text-xs">July</div>
          <div className="text-white font-medium">26K</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
