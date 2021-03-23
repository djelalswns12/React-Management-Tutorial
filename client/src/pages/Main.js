import React from 'react';

const Main = (props,history) => {
    const user= props.location.state.User
    return(
        <div>
            Token : {user[0]}
            <hr />
            Email : {user[1]}
            <hr />
            Name : {user[2]} 
        </div>
    )
}

export default Main;