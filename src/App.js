import SideBar from "./components/SideBar";
import "./styles/style.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/admin/Home";
import AddStudents from "./pages/admin/AddStudents";
import Students from "./pages/admin/Students";
import SendMail from "./pages/admin/SendMail";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="app_content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add-student" element={<AddStudents />}></Route>
            <Route path="/students" element={<Students />}></Route>
            <Route path="/send-mail" element={<SendMail />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
