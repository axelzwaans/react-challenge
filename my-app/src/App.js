import css from './App.module.css';
import SideBar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div>
      <div className={css.App}>
        <SideBar />
        <NavBarSimple />
      </div>
    </div>
  );
}

export default App;