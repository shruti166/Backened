// Create a function writeToFile(filePath, content) that takes the path to a file and user input content as input. 
// The function should write the content to the specified file using the fs module.

function writeToPath(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to file: ${err.message}`);
            return;
        }
        console.log(`Data written to ${filePath}`);
    })
}