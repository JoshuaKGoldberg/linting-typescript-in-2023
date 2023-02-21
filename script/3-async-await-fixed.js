import { promises as fs } from "node:fs";

async function capitalizeFile(fileName) {
	// 1. Read contents from the file
	const data = await fs.readFile(fileName);
	const contents = data.toString();
	console.log("Read contents:", contents);

	// 2. Write uppercased contents to the file
	const uppercased = contents.toUpperCase();
	await fs.writeFile(fileName, uppercased);
	console.log("Finished writing:", uppercased);
}

try {
	await capitalizeFile("./example.txt");
} catch (error) {
	console.error(error);
	process.exitCode = 1;
}
