import React, { useState } from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/logo.png"
import { Dropdown, Space, ConfigProvider } from 'antd';
import ic_menu from "../../assets/ic_menu.png"
import ic_cross from "../../assets/ic_cross.png"
import { Link } from 'react-router-dom';




export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    {
      label: <Link href="/contact">Contact Us</Link>,
      key: '0',
    },
    {
      label: <Link to="/help">Help</Link>,
      key: '1',
    },
    {
      label: <Link to="/blog">Blog</Link>,
      key: '2',
    },
    {
      label: <Link to="https://app-simplenote-clone.netlify.app/">Log In</Link>,
      key: '4',
    },
    {
      label: <Link to="https://app-simplenote-clone.netlify.app/signup">Sign Up</Link>,
      key: '5',
    }
  ];

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches

  const lightTheme = {
    color: "#2c3338"
  }

  const darkTheme = {
    color: "#fff"
  }
  return (
    <>
      <header className={styles.head}>
        <div className={styles.watermark}>
          <img src={logo} alt="logo" width="25px" height="25px" />
          <a className={styles.a} href='/' style={isDark ? darkTheme : lightTheme}>Simplenote</a>
        </div>
        <div className={styles.list}>
          <div className={styles.li}>
            <Link className={styles.a} to="/contact" style={isDark ? darkTheme : lightTheme}>Contact Us</Link></div>
          <div className={styles.li}>
            <Link className={styles.a} to="/help" style={isDark ? darkTheme : lightTheme}>Help</Link></div>
          <div className={styles.li}>
            <Link className={styles.a} to="/blog" style={isDark ? darkTheme : lightTheme}>Blog</Link></div>
          <div className={styles.seperator}></div>
          <div className={styles.li}>
            <Link className={styles.a} to="https://app-simplenote-clone.netlify.app/" style={isDark ? darkTheme : lightTheme}>Log In</Link></div>
          <div className={styles.li}>
            <Link className={styles.a} to="https://app-simplenote-clone.netlify.app/signup" style={isDark ? darkTheme : lightTheme}> <div className={styles.lilast}>Sign Up</div></Link></div>
        </div>
        <div className={styles.toggle}>
        <Dropdown
          menu={{
            items,
          }}
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <div className={isMenuOpen ? styles.triggeropened : styles.triggerclosed} onClick={handleMenu}>            
              </div>
            </Space>
          </a>
        </Dropdown>
        </div>
      </header>
    </>
  )
}
