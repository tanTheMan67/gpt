import { useState } from "react";
import Header from "./Header";

const Login = ()=>{
    const [signIn,setSignIn]=useState(true);
    const toggleSignin=()=>{
 setSignIn(!signIn);
    }
    return(
<div>
<Header/>
<div className="absolute">
<img src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"></img>
</div>
<form className="flex flex-col  w-3/12 h-96 bg-black absolute mx-auto my-36 right-0 left-0 opacity-85  text-white">
    <h1 className="text-white text-4xl font-bold py-4 px-2">{signIn?"SIGN UP":"SIGN IN"}</h1>
   
    <input type="text" placeholder="Enter Email"  className="border border-slate-950  rounded-md  ml-2 mr-2 mt-8 p-2"/>
    { !signIn && <input type="text" placeholder=" Set Username"  className="border border-slate-950  rounded-md  ml-2 mr-2 mt-6 p-2"/>}
    <input type="text" placeholder=" Enter Password"  className="border border-slate-950  rounded-md  ml-2 mr-2 mt-6 p-2"/>
    <button className="p-2 bg-purple-700 m-3 border rounded-lg">{signIn?"SIGN UP":"SIGN IN"}</button>
    {!signIn ? <p className="font-bold p-2 "> New to Movvi?<a onClick={toggleSignin} className="m-2 underline cursor-pointer">Sign Up!</a></p>:<p className="font-bold p-2 "> Already a Customer?<a onClick={toggleSignin} className="m-2 underline cursor-pointer">Sign In!</a></p>}
    
</form>
</div>
    );
}
export default Login;