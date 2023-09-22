import React, {useState, useRef, useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {Box, TextField, InputAdornment, Button} from "@mui/material"
import PersonIcon from "@mui/icons-material/Person"
import KeyIcon from '@mui/icons-material/Key';
import Buttons from "../components/atoms/Buttons";
import FontTemplate from "../components/templates/FontTemplate";
import "../styles/CenterStyle.css"
import "../styles/_login.scss"

const Login = () => {
    const [ID, setID] = useState<string>('');
    const [PW, setPW] = useState<string>('');
    const [accessToken, setAccessToken] = useState<string>('')
    const [refreshToken, setRefreshToken] = useState<string>('')
    const navigate = useNavigate();

    const onIDHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setID(event.currentTarget.value);
    }

    const onPWHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPW(event.currentTarget.value);
    }

    const onLoginClick = () => {
        axios.post("https://moviethree.synology.me/back/user/login", {
            id:ID,
            pwd:PW,
        }).then(function (response) {
            if (response.status === 200) {
                const {accessToken, refreshToken} = response.data;
                setAccessToken(accessToken);
                setRefreshToken(refreshToken)
                console.log("로그인 되었습니다.");
                console.log(response.data);
                console.log(response.data);
                localStorage.clear()
                localStorage.setItem('accessToken', `${accessToken}`);
                localStorage.setItem('refreshToken', `${refreshToken}`);
                navigate("/");
            } else {
                console.log("로그인이 실패했습니다.");
            }
        }).catch(function (error) {
            console.log(error);
        });
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
            <Box className="loginTemplate">
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
                        type="password"
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
            </Box>
            <Box className="signupBtn">
                <Button type="button" onClick={onSignUpClick} variant="text">회원가입</Button>
            </Box>
        </>
    );
}
export default Login;