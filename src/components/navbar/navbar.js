import { useEffect, useState, useRef } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const nav = useRef();
  const toggle = useRef();
  const location = useLocation();
  const [isFirstIconClicked, setIsFirstIconClicked] = useState(false);
  const [otherIconsClicked, setOtherIconsClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const toggleButton = toggle.current;
    const navBar = nav.current;

    const handleClick = () => {
      navBar.classList.toggle('active');
    };

    if (toggleButton) {
      toggleButton.addEventListener('click', handleClick);
    }

    const timeoutId = setTimeout(() => {
      handleClick();
    }, 1500);

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener('click', handleClick);
      }
      clearTimeout(timeoutId); // Cleanup the timeout on unmount
    };
  }, [location.pathname]);

  // Determine the position based on the clicks
  const getPositionStyle = () => {
    if (isFirstIconClicked) {
      return { top: '20%', left: '35%', transform: 'translate(-50%, -50%)' };
    }
    if (otherIconsClicked) {
      return { top: '15%', left: '5%' };
    }
  };
  const handleItemClick = (item) => {
    setSelectedItem(item); // Update the selected item
    if (item === 'first') {
      setIsFirstIconClicked(true);
      setOtherIconsClicked(false);
    } else {
      setIsFirstIconClicked(false);
      setOtherIconsClicked(true);
    }
  };

  return (
    <div
      className='navbar'
      ref={nav}
      style={getPositionStyle()} // Call the function to get position
    >
      <div className='toggle' ref={toggle}>
        <li
          className={selectedItem === 'first' ? 'selected' : ''}
          style={{ '--i': 0 }}
          onClick={() => handleItemClick('first')}
        >
          <Link to={'/'}>
            <ion-icon name="add-outline"></ion-icon>
          </Link>
        </li>
        <li
          className={selectedItem === 'home' ? 'selected' : ''}
          style={{ '--i': 1 }}
          onClick={() => handleItemClick('home')}
        >
          <Link to={'/home'}>
            <ion-icon name="home-outline"></ion-icon>
          </Link>
        </li>
        <li
          className={selectedItem === 'about' ? 'selected' : ''}
          style={{ '--i': 2 }}
          onClick={() => handleItemClick('about')}
        >
          <Link to={'/about'}>
            <ion-icon name="person-outline"></ion-icon>
          </Link>
        </li>
        <li
          className={selectedItem === 'call' ? 'selected' : ''}
          style={{ '--i': 3 }}
          onClick={() => handleItemClick('call')}
        >
          <Link to={'/contact'}>
            <ion-icon name="call-outline"></ion-icon>
          </Link>
        </li>
        <li
          className={selectedItem === 'arrow' ? 'selected' : ''}
          style={{ '--i': 4 }}
          onClick={() => handleItemClick('arrow')}
        >
          <Link to={'/projects'}>
            <ion-icon name="arrow-down-outline"></ion-icon>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
