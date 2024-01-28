import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Subscription from './Components/Subscription';
import UnpaidInvoices from './Components/UnpaidInvoices';
import PaidInvoices from './Components/PaidInvoices';
import SupportTickets from './Components/SupportTickets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user/dashboard' element={<Dashboard/>}/>
        <Route path='/user/subscriptions' element={<Subscription/>}/>
        <Route path='/user/unpaidinvoices' element={<UnpaidInvoices/>}/>
        <Route path='/user/invoices' element={<PaidInvoices/>}/>
        <Route path='/user/support' element={<SupportTickets/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
