import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    //console.log(currentUser);

    // const signOutHandler = async() => {
    //   await signOutUser(); // sign out
    //   setCurrentUser(null); // clear user context
    // }

    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo' />
            </Link>
            
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                    : (<Link className='nav-link' to='/auth'>
                        SIGN IN
                      </Link>
                  )
                }
                
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;