function Verdict({temperature}) {
    if (temperature < 0) {
    return <p> Температура воды {temperature} - Вода в твердом состоянии</p>
    }
    if (temperature > 0 && temperature < 100) {
    return <p> Температура воды {temperature} - Вода в жидком состоянии</p>
    }
    if (temperature >= 100) {
    return <p> Температура воды {temperature} - Вода газообразном состоянии</p>
    }
    return <p>Введите температуру</p>
    }
    
    export default Verdict