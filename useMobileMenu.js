import { useState, useEffect } from 'react'

export default () => {
  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(null)

  const openMenu = () => {
    setScrollPosition(window.scrollY)
    setOpen(true)
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    document.body.style.top = '0'
    document.body.style.position = 'unset'
    document.body.style.overflow = 'auto'
    setOpen(false)
    window.scrollTo(0, scrollPosition)
  }

  // Close menu and unset body css position when changing page
  useEffect(() => closeMenu, []);

  return [
    open,
    openMenu,
    closeMenu
  ]
}
