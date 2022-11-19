export default function Toggler(props){
return (

<div className="setting">
    <span className="option">{props.options[0]}</span>
    <div 
    onClick={props.changeMode} 
    className={`toggler-container ${props.mode ? "on" : "off"}`}>
    <span className="toggler">
    </span>
    </div>
    <span className="option">{props.options[1]}</span>
</div>
)}