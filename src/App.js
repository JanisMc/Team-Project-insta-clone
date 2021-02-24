import './App.css';
import Card from './components/Card'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
    return (
        <div className="App">
            <Card img = "Img1" name = "Silvester" img2 = "Kiss"/>
            <Sidebar/>
        </div>
    );
}

export default App;