import {useState} from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

type MyModalProps = {
    show:boolean;
    onHide: () => void;
    handleColorChange: (color:string) => void;
}

export const ModalColorPick = ({show, onHide, handleColorChange}: MyModalProps) => {

    //variables para guardar el valor seleccionado del formulario

    const [selectedColor, setSelectedColor] = useState('#FFF');
    const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setSelectedColor(event.target.value);
    }

    //al hacer clock en aceptar, se pasa el colro elegido a la funcion que proviene del componente padre
    // y se cierra el modal

    const handleAceptClick = () => {
        handleColorChange(selectedColor);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered backgroundColor='static'>
            <Modal.Header closeButton>
                <Modal.Title> Cambiar color</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label htmlFor= 'exampleColorInput'>Elije un color</Form.Label>
                <Form.Control 
                type='color'
                id='exampleColorInput'
                defaultValue='#FFF'
                title="Elije tu color"
                onChange={handleColorPickerChange}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                <Button variant="primary" onClick={handleAceptClick}>Aceptar</Button>
            </Modal.Footer>
        </Modal>

        
    )
}

export default ModalColorPick