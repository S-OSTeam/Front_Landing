import React, {useState, useRef, useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Box, TextField, InputAdornment, Button} from "@mui/material"
import PersonIcon from "@mui/icons-material/Person"
import KeyIcon from '@mui/icons-material/Key';
import BoxTemplate from "../components/templates/BoxTemplate";
import FontTemplate from "../components/templates/FontTemplate";

const SignUp = () => {
    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");
    const navigate = useNavigate();

    const onIDHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setID(event.currentTarget.value);
    };

    const onPWHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPW(event.currentTarget.value);
    };

    const onSignUpClick = () => {
        navigate("/signup");
    };

    const inputIDRef = useRef<HTMLInputElement | null>(null); // 아이디 입력 필드용 ref
    const inputPWRef = useRef<HTMLInputElement | null>(null); // 비밀번호 입력 필드용 ref

    useLayoutEffect(() => {
        if (inputIDRef.current !== null) {
            inputIDRef.current.focus();
        }
    }, [inputIDRef]);

    useLayoutEffect(() => {
        if (inputPWRef.current !== null) {
            inputPWRef.current.focus();
        }
    }, [inputPWRef]);

    return (
        <BoxTemplate width={512} height={708} marginTop={96} marginBottom={32}>
            <form>
                <FontTemplate
                    content="로그인"
                    size={25}
                    color="#000000"
                    justify="center"
                    direction="column"
                    marginTop={15}
                />
                <br/>
                <Box className="LoginID">
                    <TextField
                        onChange={onIDHandler}
                        label="아이디"
                        autoComplete="off"
                        ref={inputIDRef}
                        value={ID}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon/>
                                </InputAdornment>
                            ),
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
                        onChange={onPWHandler}
                        ref={inputPWRef}
                        label="비밀번호"
                        autoComplete="off"
                        value={PW}
                        type="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <KeyIcon/>
                                </InputAdornment>
                            ),
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
                    <Button variant="contained" onClick={onSignUpClick}>
                        회원가입
                    </Button>
                </Box>
            </form>
        </BoxTemplate>
    );
};
export default SignUp;