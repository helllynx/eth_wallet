export function EthProvider(url, id, shortName, fullName) {
    this.url = url;
    this.id = id;
    this.shortName = shortName;
    this.fullName = fullName;
}

export function Wallet(address, private_key) {
    this.address = address;
    this.private_key = private_key;
}

const Ropsten = new EthProvider('wss://ropsten.infura.io/ws/ea2841e43f2c4f3bb00e54892e820864', 3, 'Ropsten', 'Ropsten Test Network');
const Main = new EthProvider('wss://mainnet.infura.io/ws/ea2841e43f2c4f3bb00e54892e820864', 1, 'Main', 'Main Network');
const Kovan = new EthProvider('wss://kovan.infura.io/ws/ea2841e43f2c4f3bb00e54892e820864', 42, 'Kovan', 'Kovan Network');
const Rinkeby = new EthProvider('wss://rinkeby.infura.io/ws/ea2841e43f2c4f3bb00e54892e820864', 4, 'Rinkeby', 'Rinkeby Network');

export const web3ProviderConfig = {
    'Ropsten': Ropsten,
    'Main': Main,
    'Kovan': Kovan,
    'Rinkeby': Rinkeby
};


export const defaultPaymentAddress = new Wallet('0x88a007ec4f1819f24c0988fc9c26496b99b436d1', '396f7f85659d2b43ef05f7abc80586aa3989e8ef7218433350ddd5945f7f9008');

