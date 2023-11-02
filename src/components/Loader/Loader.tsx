import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
    return (
        <div className='loader'>
            <Spinner animation="grow" className='loader-spinner' variant='info' />;
        </div>
    )
}

export default Loader