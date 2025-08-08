import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { AppShell } from './layout/AppShell';
import Dashboard from './pages/Dashboard';
import NewRequest from './pages/NewRequest';
import HistoryPage from './pages/History';
import ProfilePage from './pages/Profile';

export default function App(){
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/request" element={<NewRequest/>} />
          <Route path="/history" element={<HistoryPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
