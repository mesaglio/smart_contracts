// interact.js

const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS



async function main() {
    const contract = require("../artifacts/contracts/JuaniMessage.sol/JuaniMessage.json")

    // Provider
    const alchemyProvider = new ethers.providers.AlchemyProvider(
        (network = "goerli"),
        API_KEY
    )

    // Signer
    const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)

    // Contract
    const juaniMesaglioContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contract.abi,
        signer
    )

    const message = await juaniMesaglioContract.message()
    console.log("The message is: " + message)


    console.log("Updating the message...")
    const tx = await juaniMesaglioContract.update("This is the new message.")
    await tx.wait()
}
main()