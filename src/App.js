import './App.css';
import Card from './components/item/Card/Card'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <div className="App">
            <Footer/>
            <Card img = "Img1" name = "Silvester" img2 = "Kiss"/>
        </div>
    );
}

export default App;