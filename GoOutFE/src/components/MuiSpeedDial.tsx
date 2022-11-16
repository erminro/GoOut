import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'
import HomeOutlined from 'reactjs-bottom-navigation'
import SearchOutlined from 'reactjs-bottom-navigation'
import BellOutlined from 'reactjs-bottom-navigation'
import MenuOutlined from 'reactjs-bottom-navigation'

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel='Navigation speed dial'
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<HomeOutlined />} />}>
      <SpeedDialAction icon={<SearchOutlined />} tooltipTitle='Copy' tooltipOpen />
      <SpeedDialAction icon={<BellOutlined />} tooltipTitle='Print' tooltipOpen />
      <SpeedDialAction icon={<MenuOutlined />} tooltipTitle='Share' tooltipOpen />
    </SpeedDial>
  )
}