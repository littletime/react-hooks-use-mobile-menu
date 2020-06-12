# react-hooks-use-mobile-menu
Your mobile menu state with scroll blocking in one hook!

# All-in-one mobile menu handler

This hook was created to handle all related problems that come with having a mobile menu:
* background scroll blocking
* self closing on link click

# Usage

```
import React from 'react'
import Link from 'my-routing-package'
import useMobileMenu from 'react-hooks-use-mobile-menu'
import logo from '../img/logo.svg'
import burger from '../img/burger.svg'
import cross from '../img/burger.svg'

const MobileHeader = () => {
  const [open, openMenu, closeMenu] = useMobileMenu()
  
  return (
    <div className="my-header">
      <img src={logo} alt="my logo" />
      { !open && <img src={burger} onClick={openMenu} }
      { open && <img src={cross} onClick={closeMenu} }
      <div className=`${open ? 'open' : ''} mobile-menu-fixed-content`>
        <Link to="page1">Page 1</Link>
        <Link to="page2">Page 2</Link>
      </div>
    </div>
  )
}
```
