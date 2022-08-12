
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }
  const aConvertedArray = matrix.map((element, index) => {
    return index % 2 ? element.reverse() : element
  })
  const aVector = aConvertedArray.flat()

  return aVector;
}
