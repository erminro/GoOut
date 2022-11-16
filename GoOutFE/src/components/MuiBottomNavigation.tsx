import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
//import 'reactjs-bottom-navigation/dist/index.css'
import HomeOutlined from 'reactjs-bottom-navigation'
import SearchOutlined from 'reactjs-bottom-navigation'
import BellOutlined from 'reactjs-bottom-navigation'
import MenuOutlined from 'reactjs-bottom-navigation'
import { useState } from 'react'

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0)
  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'absolute', bottom: 0 }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}>
      <BottomNavigationAction label='Home' icon={<HomeOutlined />} />
      <BottomNavigationAction label='Favorites' icon={<BellOutlined />} />
      <BottomNavigationAction label='Profile' icon={<MenuOutlined />} />
    </BottomNavigation>
  )
}