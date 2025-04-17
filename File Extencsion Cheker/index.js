const path = require('path')

function fileExtensionChecker (filePath, expectedExtension) {

    const actualExtension = path.extname(filePath).toLowerCase()
    if (actualExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
    }
}