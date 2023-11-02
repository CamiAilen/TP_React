import {useState} from 'react';
import { ModalColorPick } from '../ModalColorPick/ModalColorPick';
import { Button } from 'react-bootstrap';


export const ButtonColorPick = () => {
  
  //color inicial del boton
  const [buttonColor, setButtonClor] = useState('#3d7c40');

  //manejo del modal
  const [showModal, setShowModal] = useState(false);

  //funcion para cambiar el color del boton
  const handleColorChange = (color: string) => {
    setButtonClor(color);
  };

  //funcion que al hacer click en el boton se muestre el modal
  const handleShowModal = () => {
    setShowModal(true);
  }
    return (
        <div className='m-3'>
            <h2>Ejemplo 3</h2>

            {/* Componente padre*/}
            <Button variant='primary' style={{backgroundColor:buttonColor}}
            onClick={handleShowModal}>Cambiar Color</Button>

            {/* Componente hijo*/}
            {showModal && <ModalColorPick
            show={showModal}
            onHide={() => setShowModal(false)}
            handleColorChange={handleColorChange}/>}

        </div>
  )
}

export default ButtonColorPick