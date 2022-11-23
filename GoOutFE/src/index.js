import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'
import HomeOutlined from 'reactjs-bottom-navigation'
import SearchOutlined from 'reactjs-bottom-navigation'
import BellOutlined from 'reactjs-bottom-navigation'
import MenuOutlined from 'reactjs-bottom-navigation'
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(LabelBottomNavigation());
ReactDOM.render(LabelBottomNavigation, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
