import React, { useContext }  from 'react';
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import { Context } from '../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite"
import { useNavigate } from 'react-router-dom';

/* observer to check of changing values */
const NavBar = observer( ()=>{
    const {user} = useContext(Context)
    const history = useNavigate()

    console.log(user)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white"}} to={SHOP_ROUTE}>Buy device</NavLink>
                {
                /*ternar operator*/
                user.isAuth ?
                    <Nav className="ml-2" style={{color:"dark"}}>
                        <Button 
                            variant={'outline-light'} 
                            onClick={()=>history(ADMIN_ROUTE)} 
                            style={{marginRight:"20px"}}
                        >
                                Admin Panel
                        </Button>
                        <Button 
                            variant={'outline-light'} 
                            onClick={()=>history(LOGIN_ROUTE)} 
                            className="ml-4"
                        >
                                Sign out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:"white"}}>
                        <Button variant={'outline-light'} onClick={()=>user.setIsAuth(true)}>Autorization</Button>
                    </Nav>
                }
            </Container>
      </Navbar>
    );
});

export default NavBar;