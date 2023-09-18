import React, {useState} from "react";
import UserInput from "../components/atoms/UserInput";

const Login = () => {

    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");

    const onIDHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setID(event.currentTarget.value);
    }

    const onPWHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPW(event.currentTarget.value);
    }

    return(
        <div>
            <form >
                <UserInput hint="아이디" onChange={onIDHandler}/>
                <UserInput hint="비밀번호" onChange={onPWHandler}/>
            </form>
        </div>
    );
}
export default Login;