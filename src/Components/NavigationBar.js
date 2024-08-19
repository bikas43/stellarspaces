import React from 'react';
import TopNavBar1 from '../Assets/NavBar/TopNavBar1';
import logo from '../Images/Logo/logo-color.png';

const menuItems = [
    { id: 'home', label: 'Home', route: '/home' },
    {
        id: 'products',
        label: 'Products',
        route: '/products',
       submenu: [
            { label: 'CCTV Camera', route: '/cctv_camera' },
            { label: 'Biometric Devices', route: '/biometric_devices' },
            { label: 'Video Door', route: '/video_door' },
            { label: 'Wireless CCTV Camera', route: '/wireless_cctv_camera' },
            { label: 'DVR', route: '/dvr' },
            { label: 'GPS', route: '/gps' },
            { label: 'Walkie Talkies', route: '/walkie talkies' },
            { label: 'Fire Extinguisher', route: '/fire_extinguisher' },
            { label: 'Boom Barrier', route: '/boom_barrier' },
        ]
    },
    {
        id: 'services',
        label: 'Services',
        route: '/services',
        submenu: [
            { label: 'Managed Services', route: '/managed_services' },
        ]
    },
   
    {
        id: 'about-us',
        label: 'About Us',
        route: '/about-us',
        submenu: [
            { label: 'About Us', route: '/about_us' },
            { label: 'Contact Us', route: '/contact_us' },
            { label: 'Gallery', route: '/gallery' }
        ]
    }
];

function NavigationBar() {
    

    return (
        <TopNavBar1
            logo={logo}
            menuItems={menuItems}
            erEmail to UpperNavbar
        />
    );
}

export default NavigationBar;
