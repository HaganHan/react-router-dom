import { pathToRegexp } from 'path-to-regexp'

import { MatchPathOption, MatchPathKey, Match } from '~src/interface/common'

function matchPath (pathname: string, option: MatchPathOption): Match | null {
  const { path, exact = false, strict = false, sensitive = false } = option

  const keys: MatchPathKey[] = []
  const regexp = pathToRegexp(path, keys, { end: exact, strict, sensitive })
  const match = regexp.exec(pathname)

  if (!match) return null

  const [url, ...queryValues] = match
  const isExact = url === pathname

  if (exact && !isExact) return null

  return {
    path,
    url,
    isExact,
    params: keys.reduce((obj: MatchPathKey, query, index) => {
      obj[query.name] = queryValues[index]
      return obj
    }, {} as MatchPathKey)
  }
}

export default matchPath
