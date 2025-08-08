import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, Label, Select } from '../components/ui/Input';
import { LogOut } from 'lucide-react';

export default function ProfilePage(){
  return (
    <div className="max-w-5xl mx-auto">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-neutral-700 grid place-items-center">NN</div>
            <div>
              <div className="text-xl font-semibold">craftyg10276@gmail.com</div>
              <div className="text-neutral-400 text-sm">User</div>
            </div>
          </div>
          <Button variant="ghost" className="text-red-400"><LogOut size={18}/> Logout</Button>
        </div>
        <div>
          <div className="flex gap-2 mb-4">
            <Button>Personal Information</Button>
            <Button variant="ghost">Security</Button>
            <Button variant="ghost">Notifications</Button>
            <Button variant="ghost">Preferences</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label>First Name</Label>
              <Input />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input />
            </div>
            <div>
              <Label>Employee ID</Label>
              <Input />
            </div>
            <div>
              <Label>Department</Label>
              <Select><option>Select Department</option></Select>
            </div>
            <div>
              <Label>Role/Position</Label>
              <Input />
            </div>
            <div>
              <Label>Email</Label>
              <Input />
            </div>
          </div>
          <div className="flex justify-end mt-6"><Button>Save Changes</Button></div>
        </div>
      </Card>
    </div>
  );
}