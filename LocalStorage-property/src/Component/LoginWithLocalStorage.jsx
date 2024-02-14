import React,{useRef} from 'react'
import "./LoginWithLocalStorage.css"


function LoginWithLocalStorage(){

    const email = useRef();
    const password = useRef();
  const  handleSubmit = () => {
        if (email.current.value == "abc@gmail.com" && password.current == "12345678") {
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345678")

        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={email} />
                </div>
                <div>
                    <input type="password" ref={password} />
                </div>
                <button className='btn'><h2>Login</h2></button>
            </form>
        </div>
    );
}
 export default LoginWithLocalStorage;

