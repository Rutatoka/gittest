import React, {useState} from 'react'
import InpTemp from "./InpTemp";
import Verdict from "./Verdict";


function Calcutator() {
const [temperature, setTemperature] = useState(0)

return <div>
<InpTemp temperature={temperature} setTemp={setTemperature}/>
<Verdict temperature={temperature}/>
</div>

}

export default Calcutator