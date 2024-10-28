import keys from "../config/keys.js"
import { normalizeParams } from "../utils/normalizeQueryParams.js"

class RequestManager {
  static async getRequest(queryParamsObj = {}) {
    try {
      const params = normalizeParams({
        number: 1,
        query: "pizza",
        ...queryParamsObj,
        apiKey: keys.api_key,
      })
      const requestUrl = `${keys.api_url}?${params}`
      const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      console.log(data)

      return data.products
    } catch (error) {
      console.log(error)
    }
  }
}

export default RequestManager
