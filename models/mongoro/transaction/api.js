const mongoose = require('mongoose')

const TransferSchema = new mongoose.Schema({
    transaction_ID: {
        type: String
    },
    Date: {
        type: Number,
        default: () => Date.now()
    },
    amount: {
        type: String
    },
    balance: {
        type: String
    },
    receiver_status:{
        type: String
    },
    sender_status:{
        type: String
    },
    wallet_ID: {
        type: String
    },
    service_type: {
        type: String
    },
    status: {
        type: String
    },
    full_name: {
        type: String
    },
    account_number: {
        type: String
    },
    bank_name: {
        type: String
    },
    userId: {
        type: String
    },
    biller_name: {
        type: String
    },
    country: {
        type: String
    },
    type: {
        type: String
    },
    flw_id: {
        type: String
    },
    customer: {
        type: String
    },
    narration: {
        type: String
    },
    reference: {
        type: String
    },
    status_type: {
        type: String
    },
    archive: {
        type: Boolean,
        default: false,
    },
    issue: {
        type: Number,
        default: 0
    },
})


const TransferModel = mongoose.model("transaction", TransferSchema)

module.exports = TransferModel