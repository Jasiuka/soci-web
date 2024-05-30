
// Function which returns class depending on free spaces left (laisvos vietos) percentage
export function colorFreeSpacesColor(valueString: string) {
    const valueArray = valueString.split('/')
    const availableSpaces = valueArray[0]
    const spaces = valueArray[1]
  
    const percent = parseInt(availableSpaces) / parseInt(spaces)
  
    let classToAdd = ''
  
    if (percent < 0.3) {
      classToAdd = 'low'
    } else if (percent < 0.6 && percent > 0.3) {
      classToAdd = 'medium'
    } else if (percent > 0.6) {
      classToAdd = 'alot'
    }
  
    return classToAdd
  }