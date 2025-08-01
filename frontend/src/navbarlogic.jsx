import "./navbarlogic.css"
import { useNavigate } from 'react-router-dom';
export default function Front(){
    const navigate = useNavigate();
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();
    const navigate4 = useNavigate();
    function handlesumbit(e){
        e.preventDefault();
        navigate("/about");
    }
    function handlesumbit1(e){
        e.preventDefault();
        navigate1("/something1");
    }
    function handlesumbit2(e){
        e.preventDefault();
        navigate2("/something2");
    }
    function handlesumbit3(e){
        e.preventDefault();
        navigate3("/something3");
    }
    function handlesumbit4(e){
        e.preventDefault();
        navigate4("/something4");
    }
    function handlesumbit0(e){
        e.preventDefault();
        navigate4("/firstpage");
    }
    return(
        <div className="box">
            {/* <button onClick={handlesumbit} className="interface1">Gym Members</button>
            <button className="interface2">Gym Owners</button> */}
            <div className="navbar">
                <h1 className="logo" onClick={handlesumbit0}>GYM</h1>
                <button className="navcellA" onClick={handlesumbit}>About</button>
                <button className="navcell" onClick={handlesumbit1}>something1</button>
                <button className="navcell" onClick={handlesumbit2}>something2</button>
                <button className="navcell" onClick={handlesumbit3}>something3</button>
                <button className="navcell" onClick={handlesumbit4}>something4</button>
            </div>
            
        </div>
    )
}