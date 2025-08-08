import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { History, Plus } from 'lucide-react';

function StatCard({title, value, subtitle}: {title: string; value: string; subtitle?: string}){
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-neutral-400 text-sm">{title}</div>
          <div className="text-3xl font-semibold mt-1">{value}</div>
          {subtitle && <div className="text-xs text-green-400 mt-2">{subtitle}</div>}
        </div>
        <div className="h-12 w-12 grid place-items-center rounded-full bg-neutral-900/70 border border-neutral-800" />
      </div>
    </Card>
  );
}

export default function Dashboard(){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-neutral-400">SOAP</div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <Button>New Request</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Requests" value="0" subtitle="↑12% from last month" />
        <StatCard title="Pending Approval" value="0" subtitle="↓5% from last week" />
        <StatCard title="Avg Processing Time" value="19 hours" subtitle="↑15% improvement" />
        <StatCard title="Active Systems" value="0" subtitle="All systems operational" />
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Recent Access Requests</h2>
            <Button variant="ghost" className="text-neutral-300">View All</Button>
          </div>
          <div className="text-neutral-400">No recent requests found. <span className="text-primary">Create your first request</span></div>
        </Card>
        <Card className="p-6">
          <h2 className="font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Button block><span className="flex items-center gap-2"><Plus size={18}/> New Request</span></Button>
            <Button variant="ghost" block><span className="flex items-center gap-2"><History size={18}/> View History</span></Button>
            <Button variant="ghost" block>Export Report</Button>
          </div>
          <div className="border-t border-neutral-800 mt-6 pt-4">
            <div className="text-sm text-neutral-400 mb-2">System Status</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between"><span>SmartApp</span><span className="h-2 w-2 rounded-full bg-emerald-500"></span></div>
              <div className="flex items-center justify-between"><span>GitHub</span><span className="h-2 w-2 rounded-full bg-emerald-500"></span></div>
              <div className="flex items-center justify-between"><span>NAP Portal</span><span className="h-2 w-2 rounded-full bg-yellow-500"></span></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}