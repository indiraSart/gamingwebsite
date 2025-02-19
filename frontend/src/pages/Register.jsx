import "../css/components/form.css";
import {useState} from "react";
import axios from "axios";


export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [msg, setMsg] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        //console.log("Register!");
        //console.log(email,"email", password, "pass", repeatPassword, "r pass");
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, 
        {email, password, repeatPassword}, {withCredentials:true})
        .then ((response) => {
            console.log(response.data, "RESPONSE DATA")
            setMsg(response.data.msg)
            setTimeout(() => {
                if(response.status == 201) window.location.replace("/profile")
            },1500);
        })
    }
    
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder="Repeat password" onChange={(e) => setRepeatPassword(e.target.value)}/>
                <button type="submit" placeholder = "submit">Submit</button>
            </form>
            {msg?<div><p>{msg}</p></div>:<div></div>}
        </div>
    )
}