import React, { FC } from 'react';
import { Image, Pressable, TouchableOpacity, Text, View } from 'react-native';
import { IMenuItem, TypeNavigate } from './menu.interface';
import cn from 'clsx';

interface IMenuItemProps {
  item: IMenuItem;
  nav: TypeNavigate;
  currentRoute?: string;
}

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
  const isActive = currentRoute === item.path;

  return (
    <TouchableOpacity
      onPress={() => nav(item.path)}
      className={cn(
        'items-center w-[20%]',
        item.path == 'Scanner'
          ? 'w-14 h-14 rounded-full bg-black justify-center items-center'
          : ''
      )}>
      {isActive ? (
        <Image source={icons[item.activeIcon]} className="w-6 h-6" />
      ) : (
        <Image source={icons[item.icon]} className="w-6 h-6" />
      )}
      {item.path !== 'Scanner' && (
        <Text className="mt-1 text-xs">{item.label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MenuItem;
