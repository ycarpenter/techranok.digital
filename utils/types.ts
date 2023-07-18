import { ReactNode } from 'react'

export interface IMetaData {
  title: string;
  description: string;
  keywords: string;
}

interface IParams {
  locale: string;
}

export interface IRootLayoutProps {
  children: ReactNode;
  params: IParams;
}

export interface INavLink {
  name: string;
  path: string;
}
export interface INavbarProps {
  tLinks: INavLink[];
  togglleMenu?: () => void;
  isOpen?: boolean;
}

export interface ICallToAction {
  name: string;
  path: string;
}

export interface IDictionary {
  nameAgency: string;
  navLinks: INavLink[];
  mainHeading: string;
  callToActions: ICallToAction[];
}
