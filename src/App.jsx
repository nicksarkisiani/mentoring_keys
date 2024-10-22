import {useEffect, useRef, useState} from "react";
import Text from "./Text.jsx";

function App() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")

    const ref = useRef()

    const onChange = (event) => {
        if (event.target.name === "email") {
            setEmail(event.target.value)
            // if (!email.includes("@")) console.log("incorrect email")
        } else {
            setUsername(event.target.value)
        }
    }




    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log(e.target.children[0].value)
                }}
            >
                <input name="email" placeholder="email" value={email} onChange={onChange} ref={ref}/>
                <input name="username" placeholder="username" value={username} onChange={onChange}/>
                <button type="submit">Submit</button>
            </form>
            {
                arr.map((elem ) => (
                    <Text label={elem.title}  />
                ))
            }
        </>
    )
}

export default App
