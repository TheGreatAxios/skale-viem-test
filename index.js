const { createPublicClient, http, zeroAddress } = require("viem");
const { skaleNebula } = require("viem/chains");

async function main() {
	const client = createPublicClient({
		chain: skaleNebula,
		transport: http()
	});


	const res = await client.getBalance({
		address: zeroAddress
	});
	console.log("Res: ", res);
}

main()
	.catch((err) => {
		console.error(err);
		process.exitCode = 1;
	});
