import React from 'react'
import { Button, Image } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import fabrics from '../../assets/raghadfabric.svg';

const Header = () => {
    const navigate = useNavigate()
    return (
        <header>
            <nav className="navbar navbar-expand-lg shadow py-2" style={{ fontWeight: '600' }} >
                <div className="container" >
                    <Link to='/' className="navbar-brand" ><Image src={fabrics} alt="Raghad Fabrics" width="30" height="24" preview={false} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link active" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link active" aria-current="page">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Button type='primary' variant='solid' color='default' size='large' shape='round' onClick={() => navigate('/contact')} >Contact Us<MdArrowOutward /></Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header