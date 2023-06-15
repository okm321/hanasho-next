export const parseRequest = <U, T = U>(
  request: Promise<U>,
  parser: (data: U) => T = (data) => data as unknown as T,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    request
      .then((json) => {
        const parsedData = parser(json)
        resolve(parsedData)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
