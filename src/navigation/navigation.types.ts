import { ComponentType } from 'react';

export type TypeRootStackParamList = {
  Home: undefined;
  Heroes: undefined;
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}
