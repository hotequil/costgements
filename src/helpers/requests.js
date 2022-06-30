export const requestConfig = (method = "GET", params = {}) => ({ method, headers: { "Content-type": "application/json" }, ...params })
