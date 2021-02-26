import './App.css';
import Card from './components/item/Card/Card'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
    return (
        <>
        <div className="App">
            <Footer/>
            <Card img = "Img1" name = "Silvester" img2 = "Kiss"/>
            <Sidebar/>
        </div>
    </>
    );
}

export default App;