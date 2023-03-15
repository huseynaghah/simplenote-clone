import React, { useState } from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/logo.png"
import { Dropdown, Space, ConfigProvider } from 'antd';
import ic_menu from "../../assets/ic_menu.png"
import ic_cross from "../../assets/ic_cross.png"




export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    {
      label: <a href="/contact">Contact Us</a>,
      key: '0',
    },
    {
      label: <a href="/help">Help</a>,
      key: '1',
    },
    {
      label: <a href="/blog">Blog</a>,
      key: '2',
    },
    {
      label: <a href="#">Log In</a>,
      key: '4',
    },
    {
      label: <a href="#">Sign Up</a>,
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
            <a className={styles.a} href="/contact" style={isDark ? darkTheme : lightTheme}>Contact Us</a></div>
          <div className={styles.li}>
            <a className={styles.a} href="/help" style={isDark ? darkTheme : lightTheme}>Help</a></div>
          <div className={styles.li}>
            <a className={styles.a} href="/blog" style={isDark ? darkTheme : lightTheme}>Blog</a></div>
          <div className={styles.seperator}></div>
          <div className={styles.li}>
            <a className={styles.a} href="https://app-simplenote-clone.netlify.app/" style={isDark ? darkTheme : lightTheme}>Log In</a></div>
          <div className={styles.li}>
            <a className={styles.a} href="https://app-simplenote-clone.netlify.app/signup" style={isDark ? darkTheme : lightTheme}> <div className={styles.lilast}>Sign Up</div></a></div>
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
