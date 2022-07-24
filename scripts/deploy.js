async function main() {
    const JuaniMessage = await ethers.getContractFactory("JuaniMessage")

    // Start deployment, returning a promise that resolves to a contract object
    const juani_message = await JuaniMessage.deploy()
    console.log("Contract deployed to address:", juani_message.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
