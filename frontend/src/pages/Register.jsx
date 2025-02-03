import "../css/components/form.css"


export default function Register() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Register!");
    }
    
    
    return(
        <div>
            <form>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="password" placeholder="Repeat password"/>
                <button onClick={(e) => handleSubmit(e)}>Register</button>
            </form>
        </div>
    )
}