import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => console.log("call the api"), []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("SerachFor", keyword);
        }
    }, [keyword]);
    console.log("irun allthe time");
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="text"
            ></input>
            <h1 className={styles.title}>{counter}</h1>
            <Button text={"Contiune"} />
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

export default App;
