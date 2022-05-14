import "./stylesheets/App.css";
import { Routes, Route } from "react-router-dom";
import {
  ArchievePage,
  AuthPage,
  ErrorPage,
  Homepage,
  LabelsPage,
  LandingPage,
  ProfilePage,
  TrashPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<AuthPage />} />
        <Route path="/auth/signup" element={<AuthPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/labels" element={<LabelsPage />} />
        <Route path="/archieve" element={<ArchievePage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
