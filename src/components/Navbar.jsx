// // import React, { useState } from 'react';
// // import './Navbar.css';
// // import logo from './../assets/logo.svg'
// // import underline from '../assets/nav_underline.svg'
// // import AnchorLink from 'react-anchor-link-smooth-scroll';

// // const Navbar = () => {
// //   const [menu,setMenu]=useState('home')
// //   return (
// //     <div className='navbar'>
// //         <img src={logo} alt="" />
// //             <ul className='nav-menu'>
// //                 <li><AnchorLink className='anchore-link'  href='home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu === 'home'? <img src={underline} alt='' />:<></>}</li>
// //                 <li><AnchorLink className='anchore-link' offset={50} href='about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu === 'about'? <img src={underline} alt='' />:<></>}</li>  
// //                 <li><AnchorLink className='anchore-link' offset={50} href='srvices'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu === 'services'? <img src={underline} alt='' />:<></>}</li>  
// //                 <li><AnchorLink className='anchore-link' offset={50} href='work'><p onClick={()=>setMenu('work')}>Portfolio</p></AnchorLink>{menu === 'work'? <img src={underline} alt='' />:<></>}</li>  
// //                 <li><AnchorLink className='anchore-link' offset={50} href='contact' ><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact'? <img src={underline} alt='' />:<></>}</li>  
// //             </ul>
// //              <div className='nav-connect'><AnchorLink className='anchore-link' offset={50} href='about'><p onClick={()=>setMenu('about')}></p>Connect with Me</AnchorLink></div>
// //     </div>
// //   )
// // }

// // export default Navbar;

// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from './../assets/logo.svg'
// import underline from '../assets/nav_underline.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_open from '../assets/menu_open.svg'
// import menu_close from '../assets/menu_close.svg'

// const Navbar = () => {
//   const [menu, setMenu] = useState('home');

//   return (
//     <div className='navbar'>
//       <img src={logo} alt="Logo" />
//       <img src={menu_open} alt="" className='nav-mob-open'/>

//       <ul className='nav-menu'>
//         <img src={menu_close} alt="" className="nav-mob-close" />
//         <li>
//           <AnchorLink className='anchore-link' href='#home'>
//             <p onClick={() => setMenu('home')}>Home</p>
//           </AnchorLink>
//           {menu === 'home' && <img src={underline} alt='underline' />}
//         </li>

//         <li>
//           <AnchorLink className='anchore-link' offset={50} href='#about'>
//             <p onClick={() => setMenu('about')}>About Me</p>
//           </AnchorLink>
//           {menu === 'about' && <img src={underline} alt='underline' />}
//         </li>

//         <li>
//           <AnchorLink className='anchore-link' offset={50} href='#services'>
//             <p onClick={() => setMenu('services')}>Services</p>
//           </AnchorLink>
//           {menu === 'services' && <img src={underline} alt='underline' />}
//         </li>

//         <li>
//           <AnchorLink className='anchore-link' offset={50} href='#work'>
//             <p onClick={() => setMenu('work')}>Portfolio</p>
//           </AnchorLink>
//           {menu === 'work' && <img src={underline} alt='underline' />}
//         </li>

//         <li>
//           <AnchorLink className='anchore-link' offset={50} href='#contact'>
//             <p onClick={() => setMenu('contact')}>Contact</p>
//           </AnchorLink>
//           {menu === 'contact' && <img src={underline} alt='underline' />}
//         </li>
//       </ul>

//       <div className='nav-connect'>
//         <AnchorLink className='anchore-link' offset={50} href='#contact'>
//           Connect with Me
//         </AnchorLink>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';
import logo from './../assets/logo.svg';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='navbar'>
    <p>Albin</p>

      {/* Mobile Menu Button */}
      <img 
        src={menu_open} 
        alt="Open Menu" 
        className='nav-mob-open' 
        onClick={() => setIsMobileMenuOpen(true)} 
      />

      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {/* Close Button for Mobile Menu */}
        <img 
          src={menu_close} 
          alt="Close Menu" 
          className="nav-mob-close" 
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <li>
          <AnchorLink className='anchore-link' href='#home' onClick={() => setMenu('home')}>
            <p>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} alt='underline' />}
        </li>

        <li>
          <AnchorLink className='anchore-link' offset={50} href='#about' onClick={() => setMenu('about')}>
            <p>About Me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} alt='underline' />}
        </li>

        <li>
          <AnchorLink className='anchore-link' offset={50} href='#services' onClick={() => setMenu('services')}>
            <p>Services</p>
          </AnchorLink>
          {menu === 'services' && <img src={underline} alt='underline' />}
        </li>

        <li>
          <AnchorLink className='anchore-link' offset={50} href='#work' onClick={() => setMenu('work')}>
            <p>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src={underline} alt='underline' />}
        </li>

        <li>
          <AnchorLink className='anchore-link' offset={50} href='#contact' onClick={() => setMenu('contact')}>
            <p>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} alt='underline' />}
        </li>
      </ul>

      <div className='nav-connect'>
        <AnchorLink className='anchore-link' offset={50} href='#contact'>
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;


