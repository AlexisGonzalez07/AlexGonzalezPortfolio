import './App.css';
import Nav from './components/nav';
import ProjectCards from './components/projectCards';
import projects from './projects.json'

function App() {
  return (
    <div className="row">
      <Nav />
      <ProjectCards projects={projects}/>
    </div>
  );
}

export default App;
