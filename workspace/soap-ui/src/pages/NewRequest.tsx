import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, Label, Select } from '../components/ui/Input';

export default function NewRequest(){
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold mb-2">New Access Request</h1>
        <p className="text-neutral-400 mb-6">Submit a request for system access. All fields marked with * are required.</p>
        <div className="h-2 rounded-full bg-neutral-800 overflow-hidden mb-6">
          <div className="h-full w-1/3 bg-primary"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label>Full Name *</Label>
            <Input placeholder="Enter your full name" />
          </div>
          <div>
            <Label>Employee ID *</Label>
            <Input placeholder="Enter your employee ID" />
          </div>
          <div>
            <Label>Department *</Label>
            <Select>
              <option>Select Department</option>
              <option>Engineering</option>
              <option>Finance</option>
              <option>Operations</option>
            </Select>
          </div>
          <div>
            <Label>Role/Position *</Label>
            <Input placeholder="Enter your role/position" />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button>Next</Button>
        </div>
      </Card>
    </div>
  );
}