import ProgressBar from 'react-bootstrap/ProgressBar';


//Se especifica cuales son los props y el tipo de dato que el componente hijo puede recibir 
type DangerBarProps ={
    value: number;
};

//Logica segun el valor recibido del componente padre se mostrara un color diferente 
const DangerBar = ({value}:DangerBarProps) => {
    const getVariant = (value:number) => {
        if (value < 30) {
            return 'sucess';
        } else if (value <60) {
            return 'warning';
        } else {
            return 'danger';
        }
    }


  return (<ProgressBar animated now={value} variant={getVariant(value)}/>)
}
export default DangerBar;