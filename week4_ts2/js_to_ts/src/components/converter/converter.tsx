import React, {useState, ChangeEvent} from "react"
import './converter.css'

const Converter: React.FC = ()=>{
    const [temperature, setTemperature] = useState(0);
    const update =(event: ChangeEvent<HTMLInputElement>) => {
        const fahrenheit = parseFloat(event.target.value);
        const celcius = (fahrenheit - 32) * 5/9;
        setTemperature(celcius);
    }
    
    return(<div className="greenborder">
        <FahrenheitComponent update={update} />
        <CelsiusComponent temperature={temperature} />
    </div>
    );
}

interface FahrenheitComponentProps {
    update: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FahrenheitComponent: React.FC<FahrenheitComponentProps> = ({update})=>{
    return (
    <div className="redborder">
        <input type="text" onChange={update} placeholder="Enter temperature in fahrenheit"/>
    </div>);
}

interface CelsiusComponentProps {
    temperature: number;
}

const CelsiusComponent: React.FC<CelsiusComponentProps> = ({ temperature }) => {
    return(
         <div className="blueborder">Temperature in Celcius:{temperature.toFixed(2)}
        {temperature}
    </div>
    );
}

export default Converter;