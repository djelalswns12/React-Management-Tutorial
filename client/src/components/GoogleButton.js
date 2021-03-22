import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "717096392722-0ukrc6ofn0fuue61ol1ounln68ktvfc4.apps.googleusercontent.com";

export default function GoogleButton({ onSocial }){
    const onSuccess = async(response) => {
    	console.log(response);
    
        const { googleId,tokenId, profileObj : { email, name } } = response; 
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}