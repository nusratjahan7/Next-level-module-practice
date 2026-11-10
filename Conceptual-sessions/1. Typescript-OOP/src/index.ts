class Account {
    nominee?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number,
    ) {}

    deposite(amount: number) {
        if (amount < 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }

    private verifyAccount() {}
    private calculateFee() {}

    get balance() {
        return this._balance;
    }
}

const account = new Account(1, "Nusrat", 0);
account.deposite(1000);

console.log(account.balance);
