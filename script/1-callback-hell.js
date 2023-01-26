import fs from "node:fs";

function capitalizeFile(fileName, callback) {
	// 1. Read contents from the file
	fs.readFile(fileName, (readFileError, data) => {
		if (readFileError) {
			callback(readFileError);
			return;
		}

		const contents = data.toString();
		console.log("Read contents:", contents);

		const uppercased = contents.toUpperCase();

		// 2. Write uppercased contents to the file
		fs.writeFile(fileName, uppercased, (writeFileError) => {
			console.log("Finished writing:", uppercased);
			callback(writeFileError);
		});
	});
}

capitalizeFile("./example.txt", (error) => {
	if (error) {
		console.error(error);
		process.exitCode = 1;
	}
});
