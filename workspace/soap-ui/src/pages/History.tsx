import { Card } from '../components/ui/Card';

export default function HistoryPage(){
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-semibold">Request History</h1>
      <p className="text-neutral-400 mt-2">No requests yet.</p>
    </Card>
  );
}