/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../providers/userProvider';
import Urls from '../../util/urls';
import UserData from '../../services/user';

import "../../styles/siderBar.css"

const MenuChat = () => {
    
    const [isActive, setIsActive] = useState(false);
    const {userData, logout} = useContext(AuthContext);
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState([]);
    document.body.style.marginLeft = "90px";
    const handleLogout = (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        logout(); // Realizar la lógica de logout
        // Redirigir al usuario después de cerrar sesión
        // Aquí puedes usar window.location.href o cualquier método de navegación que utilices en tu aplicación
        setTimeout(() => {
        window.location.href = "/"; // Por ejemplo, redirigir a la página de inicio después de 1 segundo
        }, 1000); // Cambia el tiempo de espera según tus necesidades
    };
    useEffect(()=>{
        const getPhoto= async ()=> {
            UserData.fetchProfilePhoto({id: userData.idCard,user:userData.user}, (res)=>{
                if(res.response) setPhoto(res.profilePhoto);
            })
        }
        setName(userData.name.split(" "));
        getPhoto();
    },[photo, userData])

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };
        return (
    <div>
        <div className={`sidebar ${isActive ? 'active' : ''}`}>
            <div className="top">
                <div className="logo">
                    <i className="bx bx-hard-hat" style={{color: '#000'}} />
                    <span>Freelancer</span>
                </div>
                <i className="bx bx-menu" id="btn" onClick={toggleSidebar} style={{fontSize: '2.3rem', color:"#fff"}} />
            </div>
            <div className="user">
                {photo!==null? (<>
                    <img src={`data:image/jpeg;base64,${photo}`}  className="user-img" alt="user" />
                </>):(<>
                    <img src="/images/defaultUser.png" alt="user" className="user-img" />
                </>)}
                
                <div className="letter">
                    <p className="bold">{name[0]}</p>
                    <p style={{color: "#fff"}}>carpintera</p>
                </div>
            </div>
            <ul>
                <li>
                    <a href={Urls.home}>
                    <i className="bx bx-cog" />
                    <span className="nav-item">Ofertas</span>
                    </a>
                    <span className="tooltip">Ofertas</span>
                </li>
                <li>
                    <a href="#">
                    <i className="bx bx-notepad" />
                    <span className="nav-item">Contratos</span>
                    </a>
                    <span className="tooltip">Contratos</span>
                </li>
                <li>
                    <a href="http://localhost:3000/chat">
                    <i className="bx bx-message-square-dots" />
                    <span className="nav-item">Mensajes</span>
                    </a>
                    <span className="tooltip">Mensajes</span>
                </li>
                <li>
                    <a href='/' onClick={(e) => handleLogout(e)}>
                    <i className="bx bx-log-out" />
                    <span className="nav-item">Logout</span>
                    </a>
                    <span className="tooltip">Logout</span>
                </li>
            </ul>
        </div>
    </div>

        );
    }


export default MenuChat;