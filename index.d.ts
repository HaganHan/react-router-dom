import { ReactNode } from 'react'
import { BrowserHistory } from 'history'

import { Key } from 'path-to-regexp'

declare interface BaseProps {
  children?: ReactNode
}

interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
}

interface Match {
  path: string;
  url: string;
  params: any;
  isExact: boolean;
}

interface ContextBrowserRouterInterface {
  history: BrowserHistory;
  location: Location;
  match: Match | null;
}

interface MatchPathOption {
  path: string;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
}

interface MatchPathKey extends Key {
  [index: string]: string | number;
}
