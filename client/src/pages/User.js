import React from 'react';

const users = {
  pkbird: {
    name: '비빔면',
    age: 25,
  },
  fahrenheit: {
    name: '화씨',
    age: 12,
  },
};
const User = ({ match, location,history }) => {
    const { userid } = match.params;
    const queryData = location.search;
    const user = users[userid];
    if (!user) return null;
    return (
      <div>
        <button onClick={() => history.push('/')}>홈으로</button>
        <b>{user.name}</b> ({user.age}살)
        {queryData && <p>{queryData}</p>}
      </div>
    );
  };

export default User;