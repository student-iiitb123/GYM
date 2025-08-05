import "./PagesCss/Membership.css"
import { useNavigate } from "react-router-dom";
export default function Memberships(){
    const navigate = useNavigate();
    return(
        <>
    <div className="box1">
       <b className="nothing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>  Memberships

    </div>
    <div className="box">  
    <div className='gymmachine'>
        <img className='imageofmachine'src='silvermemvership.png'alt='...'/>
        <p className='machinename'>Silver Membership</p>
        <p className='description'>Description</p>
        <button onClick={() => navigate('/silvermembershipexplore')} className ="btn1">Explore</button>
        <button onClick={() => navigate('/silvermembershipbuy')} className ="btn2">Buy Now</button>
    </div>
    <div className='gymmachine'>
        <img className='imageofmachine'src='goldmembership.png'alt='...'/>
        <p className='machinename'>Gold Membership</p>
        <p className='description'>Description</p>
        <button onClick={() => navigate('/goldmembershipexplore')} className ="btn1">Explore</button>
        <button onClick={() => navigate('/goldmembershipbuy')}className ="btn2">Buy Now</button>
        
    </div>
    <div className='gymmachine'>
        <img className='imageofmachine'src='dimondmembership.png'alt='...'/>
        <p className='machinename'>Dimond Membership</p>
        <p className='description'>Description</p>
        <button onClick={() => navigate('/dimondmembershipexplore')} className ="btn1">Explore</button>
        <button onClick={() => navigate('/dimondmembershipbuy')} className ="btn2">Buy Now</button>
    </div>
    </div>

    
    </>
    );
}