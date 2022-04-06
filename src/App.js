import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return; //to Do가 없으면 이 함수가 동작하지 않도록
        }
        setToDo(""); // submit후 input에 value값 삭제  초기화
        setToDos((currentArray) => {
            const newArray = [toDo, ...currentArray];
            console.log(newArray);
            return newArray;
        });
        console.log(toDos);
    };
    const onClick = (index) => {
        setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex));
    };
    return (
        <div>
            <h1>My To Do List({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => onClick(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
