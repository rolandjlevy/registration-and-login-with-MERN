
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Users />
    </div>
  );
}

export default App;