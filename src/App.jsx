import "./App.css";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { MdEmail,MdVilla } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp} from 'react-icons/fa';

import Technologies from "./technologies/Technologies";
import Services from "./services/Services";
import {BsFillHouseDoorFill} from 'react-icons/bs';
import {GiLandMine, GiVillage} from 'react-icons/gi';
import {HiOfficeBuilding} from 'react-icons/hi';
function App() {
  function sendEmail() {
    console.log('clicked');
    window.location.assign("mailto:sleman.goldenkey@gmail.com");
  }

  return (
    <div className="homePageContainer" dir="rtl">
     <div className="contentDiv">
      
        <div className="Name">סלימאן גרייב</div>
        <h2 className="Job">תיווך נדל"ן</h2>
        <div className="backgroundImage">
        <div className='aboveImage'></div>
          {/* Background image goes here */}
        </div>
        
        {/* <h3 className="tech">Technologies</h3> */}
        {/* <h4 className="techs"> HTML | CSS | React | Node.js<br/> Express | MongoDB</h4> */}
      </div>
      <div className="icons">
        <BsFillHouseDoorFill className="iconT"/>
        <GiLandMine className="iconT"/>
        <HiOfficeBuilding className="iconT"/>
        <MdVilla className="iconT"/>
        <GiVillage className="iconT"/>

        
      </div>
      <div className="social-icons">
        {/* Removed the surrounding divs */}
        <BsTelephoneFill className="iconPhone" onClick={() => window.open("tel:0545985446", "_blank")} />
        <a href="https://api.whatsapp.com/send?phone=972545985446" target="_blank" rel="noreferrer">
          {/* Replace 'YourPhoneNumberHere' with the actual phone number in international format (e.g., +1234567890) */}
           <FaWhatsapp className="iconInstagram" />
        </a>
        <MdEmail className="iconEmail" onClick={sendEmail} />
      
        {/* <a href="https://www.instagram.com/shhadyse/" target="_blank" rel="noreferrer">
          <FaInstagram className="iconInstagram" />
        </a> */}
        <a href="https://www.facebook.com/profile.php?id=100056328623646" target="_blank" rel="noreferrer">
          <FaFacebook className="iconFacebook" />
        </a>
        
      </div>
      <div className="detailsAnimation">
      <div className="details">
      <details  style={{ color:"white"}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", marginBottom:"20px", padding:"10px 20px 0px 40px",}}>
      <span style={{color:'goldenrod'}}>Golden</span><span style={{color:'silver'}}>Key</span>
    </summary>
    <div className="about">
      משרד שיווק, תיווך וייעוץ נדל"ןהמכובד בתחומו.
      ניסיון מקצועי וידע רב שנרכש מאינספור עסקאות מוצלחות באיזור נצרת, נוף הגליל והסביבה הביא אותי לעמדה של עליונות מקצועית. 
</div>
</details>
{/* <details  style={{ color:"white",backgroundColor: 'rgb(20, 20, 20)'}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", padding:"20px 20px 20px 40px",}}>
    Work experience
    </summary>
      <div className="workExp">
      <div className="exp1">
              <h3>2022-Present</h3>
              <h3>Full Stack Development Teacher</h3>
              <p>Inspiring the next generation of web developers through engaging and comprehensive teaching. Designed and delivered curriculum covering both front-end and back-end technologies. Guided students in building practical projects, fostering critical thinking and hands-on skills.</p>
            </div>
            <div className="exp2">
              <h3>2021-Present</h3>
              <h3>Freelance Full Stack Developer</h3>
              <p>Delivering bespoke web solutions for clients worldwide. Developed responsive and user-centric websites and applications utilizing cutting-edge technologies. Collaborated closely with clients to understand their needs, implement solutions, and ensure seamless functionality.</p>
            </div>
            <div className="exp3">
            <h3>2015-2020</h3>
            <h3>Account Manager - eToro Ltd</h3>
            <p>Managed a $45M portfolio for over 300 investors, acting as their primary liaison with the company. Analyzed market trends across diverse assets, offering tailored strategies to align with each client's risk tolerance and financial goals.</p>
          </div>
      </div>
</details> */}
<details  style={{ color:"white",backgroundColor: 'rgb(20, 20, 20)'}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", marginBottom:"20px", padding:"20px 20px 0px 40px",}}>
  שירותים
    </summary>
    שירותי המשרד כינם נרחבים ומגוונים וכוללים בין היתר שירותי תיווך, ניהול נכסים, ליווי אישי בכל תהליך המשכנתא וכו'...
</details>
<details  style={{ color:"white"}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", padding:"20px 20px 20px 40px",}}>
      המלצות
    </summary>
     
</details>
<details  style={{ color:"white",backgroundColor: 'rgb(20, 20, 20)'}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", padding:"20px 20px 20px 40px",}}>
      נכסים
    </summary>
    
</details>
{/* <details  style={{ color:"white"}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", marginBottom:"20px", padding:"20px 20px 0px 40px",}}>
      Projects
    </summary>
      <div className="projects">
        <div>
        <a href="https://funan.org/" target="_blank" rel="noreferrer">
        <div className="logoOfProject1"></div>
        </a>
        </div>
        <div>
        <a href="https://main--shiny-stroopwafel-a155e4.netlify.app/" target="_blank" rel="noreferrer">
          <div className="logoOfProject"></div>
        </a>
        </div>
      </div>
</details> */}
</div>
</div>
    </div>
  );
}

export default App;
