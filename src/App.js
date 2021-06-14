import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header> 
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;