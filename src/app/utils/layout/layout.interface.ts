
export enum EThemes {
  Default = 'theme-default',
  Pinkpanter = 'theme-pinkpanter',
  Dark = 'theme-dark',
}

export enum EDirection {
  Left = 'left-g',
  Right = 'right-g',
  Center = 'center-g'
}

export interface LayoutStatusInterface {
  edit: boolean;
  form: boolean;
  formid: string | null;
  zoom: boolean;
}
