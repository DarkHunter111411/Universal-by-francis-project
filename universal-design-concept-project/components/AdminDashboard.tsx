
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { TrendingUp, Users, DollarSign, Music, ArrowUpRight, Plus } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const data = [
    { name: 'Mon', streams: 4000, revenue: 240 },
    { name: 'Tue', streams: 3000, revenue: 198 },
    { name: 'Wed', streams: 2000, revenue: 150 },
    { name: 'Thu', streams: 2780, revenue: 190 },
    { name: 'Fri', streams: 1890, revenue: 120 },
    { name: 'Sat', streams: 2390, revenue: 160 },
    { name: 'Sun', streams: 3490, revenue: 210 },
  ];

  const stats = [
    { label: 'Total Streams', value: '1.2M', growth: '+12%', icon: <Music /> },
    { label: 'Followers', value: '45.2K', growth: '+5%', icon: <Users /> },
    { label: 'Revenue', value: '$8,240', growth: '+8%', icon: <DollarSign /> },
    { label: 'Top Genre', value: 'Afro-Soul', growth: 'Steady', icon: <TrendingUp /> },
  ];

  return (
    <div className="pt-24 pb-12 px-6 bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-syncopate font-black">PRO PORTAL</h1>
            <p className="text-zinc-500">Welcome back, Universal Artist Management</p>
          </div>
          <button className="udc-gradient px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            <Plus className="w-5 h-5" /> NEW RELEASE
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl hover:border-red-500/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-red-600/10 text-red-500 rounded-xl">{stat.icon}</div>
                <span className={`text-xs font-bold ${stat.growth.startsWith('+') ? 'text-green-500' : 'text-zinc-500'}`}>
                  {stat.growth}
                </span>
              </div>
              <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-3xl font-syncopate font-bold">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest">Streaming Velocity</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorStreams" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '12px' }}
                    itemStyle={{ color: '#ef4444' }}
                  />
                  <Area type="monotone" dataKey="streams" stroke="#ef4444" fillOpacity={1} fill="url(#colorStreams)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest">Revenue Forecast</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '12px' }}
                  />
                  <Bar dataKey="revenue" fill="#facc15" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-6 uppercase tracking-widest">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { text: 'New distribution payout processed', time: '2 hours ago', type: 'Payment' },
              { text: 'Track "Global Fire" added to "Afro Summer" playlist', time: '5 hours ago', type: 'Playlisting' },
              { text: 'Monthly royalty report ready for download', time: '1 day ago', type: 'Report' }
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-xl">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-red-500' : 'bg-zinc-700'}`}></div>
                  <span className="text-zinc-300 font-medium">{activity.text}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-zinc-500">{activity.time}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
