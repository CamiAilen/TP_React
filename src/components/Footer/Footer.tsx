
export const Footer = () => {
    return (
        <div className='main-footer bg-dark text-white'>
            <div className='container' >
                <div className='row'>
                    {/*column 1*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Our Company</h4>
                        <p>Some information about your company.</p>
                    </div>

                    {/*column 2*/}
                    <div className='col-md-3 col-sm-6 '>
                        <h4>Contact Us</h4>
                        <ul className='list-unsyled'>
                            <li>Email: info@yourcompany.com</li>
                            <li>Phone: (123) 456-7890.</li>
                        </ul>
                    </div>


                </div>
                {/*Footer */}
                <div className='footer-bottom'>
                    <p className='text-center'>
                        &copy;{new Date().getFullYear()} City Guide App - All Right Reserved
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer