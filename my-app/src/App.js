import css from './App.module.css';
import SideBar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div>
      <div className={css.App}>
        <SideBar />
        <NavBarForm />
        <ContentHooks />
      </div>
    </div>
  );
}

export default App;