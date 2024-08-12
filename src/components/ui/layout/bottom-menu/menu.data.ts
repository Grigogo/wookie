import { IMenuItem } from "./menu.interface";

export const menuItems: IMenuItem[] = [
  {
    icon: 'home',
    activeIcon: 'home_active',
    path: 'Home',
    label: 'Автомойки',
  },
  {
    icon: 'map',
    activeIcon: 'map_active',
    path: 'Map',
    label: 'На карте',
  },
  {
    icon: 'scanner_active',
    activeIcon: 'scanner_active',
    path: 'Scanner',
    label: '',
  },
  {
    icon: 'history',
    activeIcon: 'history_active',
    path: 'History',
    label: 'История',

  },
  {
    icon: 'profile',
    activeIcon: 'profile_active',
    path: 'Profile',
    label: 'Профиль',
  },
]
