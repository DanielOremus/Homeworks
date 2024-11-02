class ComponentLoader {
  static async load(pathArr) {
    try {
      for (const path of pathArr) {
        const response = await fetch(path)
        const componentText = await response.text()

        const parser = new DOMParser()
        const doc = parser.parseFromString(componentText, "text/html")

        const bodyElements = doc.body.children

        for (const el of bodyElements) {
          document.body.append(el.cloneNode(true))
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export default ComponentLoader
