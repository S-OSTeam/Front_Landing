import React, {useState, useRef, useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Box, TextField, InputAdornment, Button} from "@mui/material"
import PersonIcon from "@mui/icons-material/Person"
import KeyIcon from '@mui/icons-material/Key';
import BoxTemplate from "../components/templates/BoxTemplate";
import Buttons from "../components/atoms/Buttons";
import FontTemplate from "../components/templates/FontTemplate";
import "../styles/CenterStyle.css"

const Login = () => {
    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");
    const navigate = useNavigate();

    const onIDHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setID(event.currentTarget.value);
    }

    const onPWHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPW(event.currentTarget.value);
    }

    const onLoginClick = () => {
        navigate("/signup");
    }

    const onSignUpClick = () => {
        navigate("/signup");
    }

    const inputRef = useRef<HTMLInputElement>(null);
    useLayoutEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            <Box>
                <BoxTemplate width={512} height={308} marginTop={96} marginBottom={5}>
                    <form>
                        <FontTemplate content="로그인" size={25} color="#000000" justify="center" direction="column"
                                      marginTop={15}/>
                        <br/>
                        <Box className="LoginID">
                            <TextField
                                onChange={onIDHandler} label="아이디"
                                ref={inputRef}
                                autoComplete="off"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon/>
                                        </InputAdornment>
                                    )
                                }}
                                sx={{
                                    marginRight: 10,
                                    marginLeft: 10,
                                    width: 370,
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                            />
                        </Box>
                        <Box className="LoginPW">
                            <TextField
                                onChange={onPWHandler} label="비밀번호"
                                ref={inputRef}
                                autoComplete="off"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <KeyIcon/>
                                        </InputAdornment>
                                    )
                                }}
                                sx={{
                                    marginTop: 3,
                                    marginRight: 10,
                                    marginLeft: 10,
                                    width: 370,
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                            />
                        </Box>
                        <Box className="loginBtn">
                            <Buttons content="로그인" onClick={onLoginClick}/>
                        </Box>
                    </form>
                </BoxTemplate>
            </Box>
            <Box className="signupBtn">
                <Button type="button" onClick={onSignUpClick} variant="text">회원가입</Button>
            </Box>
        </>
    );
}
export default Login;