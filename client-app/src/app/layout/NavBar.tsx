import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu, Image, Dropdown } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import { store } from  '../stores/store'
export default observer(function NavBar() {
    const { userStore: { user, logout } } = useStore();
    const history = useHistory();
    const logoutHandler = () => {       
            store.commonStore.setToken(null);
            window.localStorage.removeItem('jwt');       
            store.userStore.user = null;     
            history.push('/');      
    }
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: '10px' }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities' />
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity' />
                </Menu.Item>
                <Menu.Item position='right'>
                    {/* <Image src={user?.image! || '/assets/user.png'} avatar spaced='right' /> */}
                    <Image src={'/assets/user.png'} avatar spaced='right' />
                    {/* <Dropdown pointing='top left' text={user?.displayName!}> */}
                    <Dropdown pointing='top left' text={'Sachin'}>
                        <Dropdown.Menu>
                            {/* <Dropdown.Item as={Link} to={`/profile/${user?.username}`}  */}
                            <Dropdown.Item as={Link} to={'/profile/sachin'} 
                                text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logoutHandler} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})