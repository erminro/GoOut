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

// function App() {
//   // items

//   const bottomNavItems = [
//     {
//       title: 'Home',

//       icon: <HomeOutlined style={{ fontSize: '18px' }} />,

//       activeIcon: <HomeOutlined style={{ fontSize: '18px', color: '#fff' }} />
//     },

//     {
//       title: 'Search',

//       icon: <SearchOutlined style={{ fontSize: '18px' }} />,

//       activeIcon: <SearchOutlined style={{ fontSize: '18px', color: '#fff' }} />
//     },

//     {
//       title: 'Notifications',

//       icon: <BellOutlined style={{ fontSize: '18px' }} />,

//       activeIcon: <BellOutlined style={{ fontSize: '18px', color: '#fff' }} />
//     },

//     {
//       title: 'Menu',

//       icon: <MenuOutlined style={{ fontSize: '18px' }} />,

//       activeIcon: <MenuOutlined style={{ fontSize: '18px', color: '#fff' }} />,

//       onClick: () => alert('menu clicked')
//     }
//   ]

//   return (
//     <div>
//       <BottomNavigation
//         items={bottomNavItems}
//         selected={0}
//         onItemClick={(item) => console.log(item)}
//       />
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
