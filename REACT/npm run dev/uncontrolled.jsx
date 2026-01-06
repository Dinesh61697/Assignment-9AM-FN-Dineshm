import { useRef } from "react";


function App() {
    const nameRef = useRef();


    const handlesubmit = (e) => {
        e.preventDefault();
        alert(nameRef. current.value);
    };

    return (
        <form onsubmit={handlesubmit}>
            <input type="text" ref={nameRef} placeholder="Enter your name"/>
            <button type="submit"></button>
        </form>
    );
}