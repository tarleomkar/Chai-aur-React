import { useRef } from "react";
import CustomInput from "./CustomInput";

const App = () => {
    const inputRef = useRef();

    return (
        <div>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
        </div>
    );
};

export default App;
