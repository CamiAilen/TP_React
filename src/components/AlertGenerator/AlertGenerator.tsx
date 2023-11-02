import { Alert } from 'react-bootstrap';

type AlertGeneratorProps = {
    message: string;
}

//El componente hijo tiene argumentos de tipo AlertGeneratorProps
export const AlertGenerator = ({ message }: AlertGeneratorProps) => {

    return (
        <Alert variant='succes' className='mt-2 w-25'>
            <Alert.Heading>Mensaje Recibido</Alert.Heading>
            <p>{message}</p>
        </Alert>)
}

export default AlertGenerator
