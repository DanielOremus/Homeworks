export function normalizeParams(queryParamsObj) {
  const query = new URLSearchParams()
  for (const param in queryParamsObj) {
    if (Array.isArray(queryParamsObj[param])) {
      for (const paramValue of queryParamsObj[param]) {
        query.append(param, paramValue)
      }
    } else {
      query.set(param, queryParamsObj[param])
    }
  }
  return query.toString()
}
