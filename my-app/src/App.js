import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimpleHtml from './components/NavBarSimple';


function App() {
  return (
    <div className={css.App}>
      <Sidebar/> 
      <NavBarSimpleHtml/>

    </div>
  );
}

export default App;