
import './App.css';
import Navbar from './Nav/NavBar.jsx';
import Vector from './Vector.png';
import About from './Pages/About';
import image from './image.png';
import image1 from './image1.png';
import java from './java.png';
function App() {
  return (
    <div className="App">
     
      <Navbar />
       
      <div className="container">     
        <div className="row" style={{paddingLeft: "55px"}}>
          <div className="col-md-6">
            <p className="head">Making the most of the ever-growing  </p>
            <p className="head-1">Information Technology </p>
            <p className="para">Managed by a team of professional experts with extensive experience and impressive track records
            </p>
            <button className="btn-bg">Read More</button>
            
          </div>
           <div className="col-md-6">           
            <img  className="img" src={Vector}  alt="vector"/>           
          </div>
        </div>
        <hr />
         <div className="row bg">         
           <div className="col-md-6">           
            
            <img src={Vector} className="img" alt="vector"/>
            <span>ORIZON</span>
          </div>
           <div className="col-md-6">
             <p><span className="ag1">Welcome to</span> <span className="ag">Orizon Technologies</span> </p>
         <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.

Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
            <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.

Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
           
          </div>
        </div>
      <About />

      <div className="row">
        <div className="col-md-4">
           <img src={Vector}  className="App-logo"alt="logo" />  
             <span className="lft-org">ORIZON</span>
             <h6>Orizon Technologies Ltd</h6>
             <p>Ruko Jalur Sutera 29A No. 53
Alam Sutera Serpong, Tangerang 15323
</p>
        </div>
        <div className="col-md-4">
        <h6>Contact</h6>
        <p>Phone : +62.21.5314.1135
Fax : +62.21.5314.1135
Email : community@orizon.com</p>
</div>
        <div className="col-md-4">
        <p><img src={image} className="ft-img" alt="img" />
        <img src={image1}  className="ft-img"alt="img" />
        <img src={java}  className="ft-img"alt="img" /></p>
         <p><img src={image} className="ft-img" alt="img" />
        <img src={image1}  className="ft-img"alt="img" />
        <img src={java}  className="ft-img"alt="img" /></p>
        </div>
      </div>
      </div>
    </div>
 
    
  );
}

export default App;
