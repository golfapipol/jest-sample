const Wallet = require('./wallet')

describe('Wallet', () => {
    describe('Case Transfer Success', () => {
        it('account have 1999 baht and receivedMoney is 3000 baht should be transfer success', () => {
            const accountMoney = 1999;
            const receivedMoney = 3000;
            expect(Wallet.TransferMoney(receivedMoney, accountMoney)).toBe(true)            
        });

        it('account have 1999 baht and receivedMoney is 3000 baht should be transfer success', () => {
            const accountMoney = 2000;
            const receivedMoney = 3000;
            expect(Wallet.TransferMoney(receivedMoney, accountMoney)).toBe(true)
        });
    });

    describe('Case Transfer Failed', () => {
        it('account have 2001 baht and receivedMoney is 3000 baht should be transfer success', () => {
            const accountMoney = 2001;
            const receivedMoney = 3000;
            expect(Wallet.TransferMoney(receivedMoney, accountMoney)).toBe(false)
        });
    });
});