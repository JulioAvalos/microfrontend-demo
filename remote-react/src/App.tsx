import './App.css'
import {useState} from "react";

function App() {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <div style={{padding: '1rem'}}>
                <h1>Remote React MFE</h1>
                <p>Hello from React!</p>
                <p>Counter: {counter}</p>
                <div style={{display: 'flex'}}></div>
                <button
                    onClick={() => {setCounter(counter + 1)}}
                    style={{background: 'blue', color: 'white', marginRight: '10px'}}
                >
                    Add
                </button>
                <button
                    onClick={() => {setCounter(counter - 1)}}
                    style={{background: 'red', color: 'white'}}
                >
                    Subtract
                </button>
            </div>
        </>
    )
}

export default App
