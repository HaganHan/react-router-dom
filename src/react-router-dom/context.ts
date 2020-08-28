import { createContext } from 'react'
import { BrowserHistory } from 'history'

export const ContextBrowserRouter = createContext({ history: ({} as BrowserHistory) })
