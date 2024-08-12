import { IRoute } from './navigation.types';
import Home from '@/components/screens/home/Home';
import Heroes from '@/components/screens/heroes/Heroes';

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Heroes',
    component: Heroes,
  },
];
