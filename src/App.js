import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from '../src/modules/Auth/Login';
import Layout from '../src/components/Layout';
import User from '../src/modules/User';
import ProtectedRoute from '../src/components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginPage />} />

        {/* Protected Users Module */}
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<User.Listing />} />
          {/* <Route path=":id" element={<UserDetailsPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
