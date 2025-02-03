import "../css/components/form.css"


export default function Login() {

        function handleSubmit(e) {
            e.preventDefault();
            console.log("Register!");
        }

    return(
        <div>
            <form>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button onClick={(e) => handleSubmit(e)}>Login</button>

            </form>
        </div>
    )
}