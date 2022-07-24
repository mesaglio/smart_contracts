const { ethers } = require("ethers")

const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

function getContract() {
    const contract = require("../../artifacts/contracts/JuaniMessage.sol/JuaniMessage.json")

    // Provider
    const alchemyProvider = new ethers.providers.AlchemyProvider(
        (network = "goerli"),
        API_KEY
    )

    // Signer
    const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)

    // Contract
    return new ethers.Contract(
        CONTRACT_ADDRESS,
        contract.abi,
        signer
    )
}

async function getMessage() {
    const message = await getContract().message()
    return message
}

async function updateMessage(newMessage) {
    const tx = await getContract().update(newMessage)
    await tx.wait()
}

module.exports = {
    GetMessage: getMessage,
    UpdateMessage: updateMessage
}