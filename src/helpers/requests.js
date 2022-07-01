export const requestConfig = (method = "GET", params = {}) => ({ method, headers: { "Content-type": "application/json" }, ...params })

export const ok = request =>
  new Promise((resolve, reject) => {
    request.then(async response => {
      const body = await response.json()

      response.ok ? resolve(body) : reject(body)
    })
  })
