import { ReactNode } from 'react'
import { BrowserHistory } from 'history'

import { Key } from 'path-to-regexp'

export interface BaseProps {
  children?: ReactNode
}

export interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
}

export interface Match {
  path: string;
  url: string;
  params: any;
  isExact: boolean;
}

export interface ContextBrowserRouterInterface {
  history: BrowserHistory;
  location: Location;
  match: Match | null;
}

export interface MatchPathOption {
  path: string;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
}

export interface MatchPathKey extends Key {
  [index: string]: string | number;
}
