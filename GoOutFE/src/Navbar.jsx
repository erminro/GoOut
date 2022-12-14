import React from "react";
import BottomNavigation  from 'reactjs-bottom-navigation'
import { HomeOutlined }  from '@ant-design/icons'
import { SearchOutlined }  from '@ant-design/icons'
import { PlusOutlined }  from '@ant-design/icons'
import { MenuOutlined }  from '@ant-design/icons'
import {SettingOutlined } from '@ant-design/icons'
import 'reactjs-bottom-navigation/dist/index.css'

export const Navbar = () => {
const bottomNavItems = [
    {
      icon: <HomeOutlined style={{ fontSize: '18px', color: '#000'  }} />,
      activeIcon: <HomeOutlined style={{ fontSize: '18px', color: '#000' }} />
    },
    {
      icon: <SearchOutlined style={{ fontSize: '18px', color: '#000' }} />,
      activeIcon: <SearchOutlined style={{ fontSize: '18px', color: '#000' }} />
    },
    {
      icon: <PlusOutlined style={{ fontSize: '18px', color: '#000' }} />,
      activeIcon: <PlusOutlined style={{ fontSize: '18px', color: '#000' }} />
    },
    {
      icon: <MenuOutlined style={{ fontSize: '18px', color: '#000' }} />,
      activeIcon: <MenuOutlined style={{ fontSize: '18px', color: '#000' }} />,
      //onClick: () => alert('menu clicked')
    },
    {
        icon: <SettingOutlined style={{ fontSize: '18px', color: '#000' }} />,
        activeIcon: <SettingOutlined style={{ fontSize: '18px', color: '#000' }} />,
        //onClick: () => alert('menu clicked')
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