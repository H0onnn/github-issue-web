import { BrowserRouter as Router } from 'react-router-dom';
import PageLayout from './layout/PageLayout';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <PageLayout>
        <AppRoutes />
      </PageLayout>
    </Router>
  );
};

export default App;
