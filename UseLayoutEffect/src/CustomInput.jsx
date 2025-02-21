import { useRef, forwardRef, useImperativeHandle } from "react";

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current.focus();
        }
    }));

    return <input ref={inputRef} type="text" />;
});

export default CustomInput;
