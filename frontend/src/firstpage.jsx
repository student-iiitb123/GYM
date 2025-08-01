import "./fistpage.css"
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Gymmemmber from "./gymmember.jsx"
export default function Front(){
    const navigate = useNavigate();
    function handlesumbit(e){
        e.preventDefault();
        navigate("/gymmember");
    }
    return(
        <div className="box">
            {/* <form onSubmit={handlesumbit}> */}
            {/* <Link to="/gymmember"> */}
            {/* <Link to ="/gymmember"><h1>hi</h1></Link> */}
            {/* <Gymmemmber/> */}
            <button onClick={handlesumbit} className="interface1">Gym Members</button>
            {/* </Link> */}
            {/* </form> */}
            <button className="interface2">Gym Owners</button>
            
        </div>
    )
}