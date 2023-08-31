import { Routes, Route } from 'react-router-dom';
import IssueListPage from './pages/IssueListPage';
import ErrorPage from './pages/ErrorPage';
import IssueDetailPage from './pages/IssueDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={IssueListPage} />
      <Route path="/issue/:id" Component={IssueDetailPage} />
      <Route path="*" Component={ErrorPage} />
    </Routes>
  );
};

export default AppRoutes;
