import React,{useState} from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "717096392722-0ukrc6ofn0fuue61ol1ounln68ktvfc4.apps.googleusercontent.com";
function GoogleButton(props){
    let [isLogin,LoginChange]= useState("");

    const onSuccess = async(response) => {
    	console.log(response);
        const { googleId,tokenId, profileObj : { email, name } } = response; 
        //LoginChange([googleId,email,name]);
        props.GoToMain([googleId,email,name]);
        }
        

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            {isLogin[1]}
            <GoogleLogin
                buttonText="구글 로그인!"
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}
export default GoogleButton