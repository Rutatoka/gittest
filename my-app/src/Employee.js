import React from 'react'

function Employee({surname, name, patronymic, salary }) {
return <p>
surname: <span>{surname}</span>&nbsp;
name: <span>{name}</span>&nbsp;
patronymic: <span>{patronymic}</span>&nbsp;
salary: <span>{salary}</span>
</p>

}
export default Employee;