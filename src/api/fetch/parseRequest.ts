export const parseRequest = <U, T = U>(
  request: Promise<Response>,
  parser: (data: U) => T = (data) => data as unknown as T,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    request
      .then((res) => {
        if (res.ok) {
          res.json().then((json) => {
            const parsedData = parser(json)
            resolve(parsedData)
          })
        } else {
          reject(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
