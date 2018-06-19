module.exports = {
    TransferMoney: function (receivedMoney, accountMoney) {
        const sum = receivedMoney + accountMoney
        if (sum <= 5000) {
            return true
        }
        return false
    }
}