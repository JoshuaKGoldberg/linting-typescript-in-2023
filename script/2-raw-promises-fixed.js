import { promises as fs } from "node:fs";

function capitalizeFile(fileName) {
	return (
		// 1. Read contents from the file
		fs
			.readFile(fileName)
			.then((data) => {
				const contents = data.toString();
				console.log("Read contents:", contents);
				return contents;
			})
			// 2. Write uppercased contents to the file
			.then((contents) => {
				const uppercased = contents.toUpperCase();

				return fs.writeFile(fileName, uppercased).then(() => {
					console.log("Finished writing:", uppercased);
				});
			})
	);
}

capitalizeFile("./example.txt").catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
