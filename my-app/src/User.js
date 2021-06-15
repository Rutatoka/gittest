// import React from 'react'

// function User() {
// return <p>User Data</p>
// }

// export default User;


import React from "react";

function User({name, surname, age, id, banned, banUser}) {
return <div>
name: <span>{name}</span>
surname: <span>{surname}</span>
age: <span>{age}</span>
id: <span>{id}</span>
<span>{banned ? 'Забанен' : 'Не забанен'}</span>
<button onClick={() => banUser(id)}>Ban</button>
</div>

}

export default User