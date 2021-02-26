import './App.css';
import Card from './components/item/Card/Card'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'


const App = () => {
    return (
        <div className="App">
      
            <Footer/>
      
            <Card imgProfile = "Img1" name = "seekerofthecosmos" imgPost= "VR"/>
            <Card imgProfile = "Img2" name = "pepeviyuela" imgPost= "Ball"/>
            <Card imgProfile = "Img3" name = "get.me.now" imgPost= "Blue"/>
            <Card imgProfile = "Img4" name = "donnushka.p" imgPost= "Kiss"/>
            <Card imgProfile = "Img5" name = "salem.aka.cat" imgPost= "Laptop"/>
            <Card imgProfile = "Img6" name = "muyayo.appareal" imgPost= "Robot1"/>
            <Card imgProfile = "Img7" name = "hotsince82" imgPost= "Robot2"/>
            <Card imgProfile = "Img8" name = "tekno.addict" imgPost= "Sad"/>
           
            <Sidebar/>
      
        </div>
    );
}

export default App