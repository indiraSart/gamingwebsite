import "../css/components/form.css"
import {useState, useContext} from "react";
import axios from "axios";
import { AuthContext } from "../auth/Authcontext"


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [msg, setMsg] = useState("");
    const { user } = useContext(AuthContext);

    if(user) window.location.href="/profile";



function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, 
    {email, password}, {withCredentials:true})
    .then ((response) => {
        console.log(response.data, "RESPONSE DATA")
        setMsg(response.data.msg)
            setTimeout(() => {
                if(response.status == 202) window.location.replace("/profile")
            },1500);


    })
}

    return(
        <div className="login">
            <h1>Logg inn</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" placeholder = "submit">Logg inn</button>

            </form>
            {msg?<div><p>{msg}</p></div>:<div></div>}

        </div>
    )
}