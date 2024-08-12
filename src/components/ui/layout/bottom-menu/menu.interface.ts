import { TypeRootStackParamList } from "app/navigation/navigation.types";


export interface IMenuItem {
  icon: string,
  activeIcon: string
  path: keyof TypeRootStackParamList
  label: string
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void
