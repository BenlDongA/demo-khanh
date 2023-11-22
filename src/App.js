import logo from './logo.svg';
import './App.css';
import FimTN from './componant/phimtn';
import FimTH from './componant/phimth';
import image1 from './componant/img/image 9.png'
import image2 from './componant/img/image 10.png'
import image3 from './componant/img/image 12.png'
import image4 from './componant/img/image 13.png'
import image5 from './componant/img/image 11.png'
import image6 from './componant/img/image 14.png'
import image7 from './componant/img/image 15.png'
import image8 from './componant/img/image 16.png'
import image9 from './componant/img/image 17.png'
import image10 from './componant/img/image 18.png'


function App() {
  return (
    <div className="App">
     
       <div className="f-tn">
       <h2> Phim Thiên Nhiên</h2>
        <FimTN img={image1}/>
        <FimTN
        img={image2}/>
        <FimTN
        img={image3}/>
        <FimTN
        img={image4}/>
        <FimTN
        img={image5}/>
       </div>
       <div className="f-th">
       <h2> Phim Truyền Hình</h2>
        <FimTH img={image6}/>
        <FimTH
        img={image7}/>
        <FimTH
        img={image8}/>
        <FimTH
        img={image9}/>
        <FimTH
        img={image10}/>
       </div>

    </div>
  );
}

export default App;
