import css from './App.module.css';
import SideBar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div>
      <div className={css.App}>
        {/* <SideBar /> */}
        <NavBarForm />
      </div>
    </div>
  );
}

export default App;