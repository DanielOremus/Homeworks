import keys from "../../config/keys.js"
import { normalizeParams } from "../../utils/normalizeQueryParams.js"

class RequestManager {
  static async getRequest(queryParamsObj) {
    const { category, ...queryParams } = queryParamsObj
    console.log(category)

    try {
      const params = normalizeParams({
        ...queryParams,
        apiKey: keys.api_key,
      })
      const requestUrl = `${keys.api_url}/${category}/search?${params}`
      const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      console.log(data)
      switch (category) {
        case "ingredients":
          return data.results
        case "menuItems":
          return data.menuItems
        case "products":
          return data.products
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default RequestManager
