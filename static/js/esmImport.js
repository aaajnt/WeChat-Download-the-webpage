window.esmImport = function (source) {
  try {
    var arrowFunction = 'var t = () => {};'
    // eslint-disable-next-line no-new-func
    var f = new Function(arrowFunction)
    return (async () => {
      return await import(source)
    })()
  } catch (e) {
    return ''
  }
}
