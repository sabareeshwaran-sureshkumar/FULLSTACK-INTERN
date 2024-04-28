import './App.css';
import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { GoLocation } from "react-icons/go";
import {BsFillCarFrontFill} from "react-icons/bs";
import {LiaUsersSolid} from "react-icons/lia";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {CgMail } from "react-icons/cg";
function App() {
  return (
    <div>
     <Row>
      <img className='align' src='https://trumpwallpapers.com/wp-content/uploads/Lamborghini-Wallpaper-17-2560x1600-1.jpg'      style={{height:'100%',width:'100%'}} alt="" />
      <p className="overlay-text">logo</p>
      <p className="overlaytext">Page1</p>
      <p className='text1'>car services</p>
      <p className='text2'>Travel In
       <br/>Luxury And Style</p></Row><br/>
       <Row>
      
          <Col md={6} lg={6} xl={6}>
              <div class='black' >
                <img src="//images03.nicepage.com/c461c07a441a5d220e8feb1a/07a9666d670150be8047edcd/billionphotos1010979min.jpg" style={{marginTop:"70px", height:"400px",width:"700px",marginLeft:'70px',marginBottom:'400px'}}  alt="Car" />
              </div>
          </Col>
       
        <Col>
        <h1 className='textalign1'>Best Car</h1>
        <h3 className='textalign2'>Service</h3>
        <p className='textalign3'>
            A regular service schedule can help keep your car running <br/>at its best.
            A regular service schedule can help keep your <br/>car running at its best
        </p>
        <Button className='darky' variant="dark">READ MORE</Button>
        </Col>
       </Row>
       <Row ><Col>
        <h3 className='text3'>RENTAL CAR SERVICES</h3>
         <p className='text4'>Find the best rental car rate.Compare rates worldwide <br/> and save up to 60% on deals from over 1,053 car <br/>rental comapanies</p></Col>
       <Col>
       <div className='align3'>
       
       <div className='icon1'>
       <GoLocation size={70} /><br/><h5 style={{padding:'0px 100px'}}>Location</h5></div>
       <div className='icon2'><BsFillCarFrontFill size={70} /><br/><h5 style={{padding:'0px 100px'}}>250+ cars</h5></div>
       <div className='icon3'><LiaUsersSolid size={70} /><br/><h5 style={{padding:'0px 100px'}}>Happy Users</h5></div>
       </div></Col>
       </Row>
       <div style={{ backgroundColor: 'black' }}>
        <Row>
        <Col md={6} lg={6} xl={6}>
              <div class='red' >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VCwxJ_ybqo-v2gbSe50oOfd-maoKBEsa3A&usqp=CAU" style={{marginTop:"50px", height:"300px",width:"450px",marginLeft:'80px',marginBottom:'400px'}}  alt="Car" />
              </div>
          </Col>
       <Col>
      
        <h3  className='textalign5' style={{color:'white'}}>CAR RENTAL</h3>
        <br/><h3  style={{color:'red'}}>SERVICES</h3>
        <p style={{color:'white',fontSize:'20px'}} >A regular service schedule can help keep your car running at its best.A regular service schedule can keep your car running at its best</p>
       </Col>
        </Row>
        <Row>
        <Col md={6}>
        <h4 style={{color:'white',paddingTop:'80px',paddingLeft:'100px',textAlign:'left',fontWeight:"700"}}>SEARCH 36,000+ CAR RENAL <br/>LOCATIONS WORLDWIDE</h4>
        
        <p style={{color:'white',padding:' 20px 100px',textAlign:'left',fontSize: '20px'}}> Lorem ipsum dolor sit amet,consectetur adipiscing elit nullam nunac justo sagittis suscipit ultrices</p>
        <Button className='darky' style={{backgroundColor:'#e9395d',border: '2px solid #e9395d' }}>READ MORE</Button>
        </Col>
        <Col>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AqK2lLMsIdIHWSHTgiKusuAVvbb0ViTuFg&usqp=CAU" alt="" style={{height:"400px",width:"500px",paddingRight:'50px',paddingBottom:'100px'}}/>
        
        </Col>
        <Col>
        </Col>
        </Row>
       </div >
       <Row style={{backgroundColor:'black'}}>
        <Col md={6}>
        <img src="https://img.freepik.com/free-vector/lightened-luxury-sedan-car-darkness-with-headlamps-rear-lights-lit-realistic-image-reflection_1284-28803.jpg?size=626&ext=jpg&ga=GA1.2.1502203183.1674726100&semt=ais" alt=""/>
        </Col>
        <Col>
        <p style={{color:'white',fontSize:'50px',fontWeight:'700',paddingTop:'130px',paddingLeft:'30px',marginRight:'10px'}}>SAFE.RELAXING.<br/>GOOD TO DRIVE IN</p>
        </Col>
       </Row>
       
       <Row>
        <p style={{textAlign:'center',fontSize:'45px',fontWeight:'500',paddingTop:'100px',color:'#e9395d'}}><b>Our Technologies</b></p>
        <div className='ca_rd'>
        <div><img src="https://img.freepik.com/premium-photo/front-view-generic-brandless-moder-car_110488-502.jpg" alt="" style={{height:'200px',width:'200px'}}/><h5 style={{paddingTop:'30px'}}><b>SMARTLINQ</b></h5></div>
        <div><img src="https://img.freepik.com/free-photo/lamborghini_1308-39994.jpg" alt="" style={{height:'200px',width:'200px'}} /><h5 style={{paddingTop:'30px'}}><b>EPIC</b></h5></div>
        <div><img src="https://img.freepik.com/free-photo/gps-navigation-system-phone-self-driving-car_53876-95820.jpg?size=626&ext=jpg&ga=GA1.1.1502203183.1674726100&semt=ais" alt="" style={{height:'200px',width:'200px'}}/><h5 style={{paddingTop:'30px'}}><b>SMARTNAV</b></h5></div>
        <div><img src="https://img.freepik.com/free-photo/front-view-black-sedan-sport-car-bridge_114579-4068.jpg?w=2000" alt="" style={{height:'200px',width:'200px'}}/><h5 style={{paddingTop:'30px'}}><b>SMARTAIR</b></h5></div>
        <div><img src="https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?size=626&ext=jpg&ga=GA1.1.1502203183.1674726100&semt=ais" alt="" style={{height:'200px',width:'200px'}}/><h5 style={{paddingTop:'30px'}}><b>APEX</b></h5></div>
        </div>
       </Row>
       <Row>
        <Col md={6}>
        <p style={{paddingLeft:'100px',paddingTop:'150px',fontSize:'30px'}}><b>Location</b></p>
        <p style={{paddingLeft:'100px',paddingTop:'10px',fontSize:'20px'}}>28 Jackson Blvd Ste 1020 Chicago IL 60604-2340</p>
        <p style={{paddingLeft:'100px',paddingTop:'30px',fontSize:'20px',fontWeight:'600'}}><b>FOLLOW US</b></p>
        <div  className="ace"style={{paddingLeft:'100px'}}>
        <div><BsFacebook size={30} /></div>
        <div><AiFillTwitterCircle size={30} /></div>
        <div><AiFillInstagram size={30} /></div>
        <div><CgMail size={30} /></div></div><br/>
        <div style={{paddingLeft:'100px'}}><p><b> &copy;2018 Privacy Policy</b></p></div></Col>
       <Col> <p style={{textAlign:'center',paddingTop:'100px',fontSize:'30px',color:'#e9395d'}}><b>CONTACT FORM</b></p>
       <div class="form">
  
       <input type="text" placeholder="Enter Your Name" style={{padding:'10px'}}></input>
       <input type="text" placeholder="Enter a Valid Email Address"style={{padding:'10px'}}></input>
       <input type="text" placeholder="Enter your message"style={{padding:'50px 20px',textAlign:'left'}}></input>  <div>
      <Button  style={{backgroundColor:'#e9395d',border: '2px solid #e9395d' }}>SUBMIT</Button></div>
      </div> 
       </Col></Row><Row>
        <div className='footer'><p>Sample text. Click to select the text box. Click again or<br/> double click to start editing the text.</p></div></Row>        
      </div>
  );
}

export default App;
