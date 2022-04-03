import { useState, useEffect } from "react";
function Hello() {
    useEffect(() => {
        console.log("hi");
        return () => console.log("bye");
    }, []);
    return <h1>Hello</h1>;
}
function App() {
    const [showing, setShowing] = useState(false);

    const onClick = () => setShowing((prev) => !prev);

    useEffect(() => console.log("call the api"), []);

    console.log("i run all the time");

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
