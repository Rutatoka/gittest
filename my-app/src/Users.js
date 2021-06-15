import React, {useState} from 'react'
import {nanoid} from "nanoid";
import User from "./User";

const initUsers = [
{id: nanoid(), name: 'user1', surname: 'surn1', age: 30, banned: false},
{id: nanoid(), name: 'user2', surname: 'surn2', age: 31, banned: false},
{id: nanoid(), name: 'user3', surname: 'surn3', age: 32, banned: false},
];

function Users() {
const [prods, setProds] = useState(initUsers)

function banUser(id) {
setProds(prods.map(prod =>{
if (prod.id ===id){
prod.banned = true
}
return prod
}))
}

const items = prods.map(prod => {
return <User key={prod.id}
id={prod.id}
name={prod.name}
surname={prod.surname}
banned={prod.banned}
banUser={banUser}
/>
})

return <div>
{items}
</div>

}

export default Users
