import { RequestInit } from 'next/dist/server/web/spec-extension/request'

export const fetchWrapper = <T>(request: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    request
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then((json) => {
              resolve(json)
            })
            .catch((err) => {
              reject(err)
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

export const customFetch = async (
  path: RequestInfo | URL,
  options?: RequestInit
) => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
  const basicAuthUsername = process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME
  const basicAuthPassword = process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD
  const res = await fetch(`${baseURL}${path}`, {
    headers: {
      Authorization: `Basic ${btoa(
        `${basicAuthUsername}:${basicAuthPassword}`
      )}`,
    },
    credentials: 'include',
    ...options,
  })

  return res
}
