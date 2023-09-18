import React from "react";

interface UserInfoProps{
    hint:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
}

const UserInput=({hint,onChange}:UserInfoProps)=>
{

    return(
        <input onChange={onChange} placeholder={hint}/>
    );
}
export default UserInput;