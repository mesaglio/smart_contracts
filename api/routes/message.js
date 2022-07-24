const express = require('express')
const contractService = require('../service/contract')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const message = await contractService.GetMessage()
        res.status(200).send({ "msg": message })
    } catch (e) {
        res.status(500).send(e.message)
        console.log(e.message)
        console.log(e.stack)
    }
})

router.post('/', async (req, res) => {
    try {
        const newMessage = req.query.message
        if (!newMessage) return res.status(400).send()

        await contractService.UpdateMessage(newMessage)
        res.status(201).send()
    } catch (e) {
        res.status(500).send(e.message)
        console.log(e.message)
        console.log(e.stack)
    }
})

module.exports = router