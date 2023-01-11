import React, { useState } from "react";
import BottomNavigation  from 'reactjs-bottom-navigation'
import { HomeOutlined }  from '@ant-design/icons'
import { SearchOutlined }  from '@ant-design/icons'
import { PlusOutlined }  from '@ant-design/icons'
import { MenuOutlined }  from '@ant-design/icons'
import {SettingOutlined } from '@ant-design/icons'
import 'reactjs-bottom-navigation/dist/index.css'

const HandleClick = (state) => {
  // counter++;
  // console.log("counter", counter);
  // renderContent();
  useState(state)
};

export const Navbar = () => {
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

const bottomNavItems = [
    {
      icon: <HomeOutlined style={{ fontSize: '18px', color: '#000'  }} />,
      activeIcon: <HomeOutlined style={{ fontSize: '18px', color: '#000' }} />,
      onClick: () => HandleClick('home')
    },
    {
      icon: <SearchOutlined style={{ fontSize: '18px', color: '#000' }} />,
      activeIcon: <SearchOutlined style={{ fontSize: '18px', color: '#000' }} />,
      onClick: () => HandleClick('search')
    },
    {
      icon: <PlusOutlined style={{ fontSize: '18px', color: '#000' }} />,
      activeIcon: <PlusOutlined style={{ fontSize: '18px', color: '#000' }} />,
      onClick: () => HandleClick('plus')
    },
    {
      icon: <MenuOutlined style={{ fontSize: '18px', color: '#000' }} />,
      activeIcon: <MenuOutlined style={{ fontSize: '18px', color: '#000' }} />,
      onClick: () => HandleClick('menu')
    },
    {
        icon: <SettingOutlined style={{ fontSize: '18px', color: '#000' }} />,
        activeIcon: <SettingOutlined style={{ fontSize: '18px', color: '#000' }} />,
        onClick: () => HandleClick('login')
      }
  ]
  return(
  <div>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={4}
        onItemClick={(item) => console.log(item)}
      />
</div>
  );
}