require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name riot pitch essay inner drop symptom gaze'; 
let testAccounts = [
"0xf3a54e030be687eb1262e7e8846ef399ec32ea36363d879a5fef9503abaf8199",
"0x229986a14dd29cdef9afabac182a15020f3e29e98b765e45296744de89f47bcb",
"0x14a99938bba33615417334bdedc2b62243acacf5bf98c6a70dfe95d8de2c847f",
"0x1d398f66934963d89ac8475abd2eb6c31590aed7a43e5c538946f8dd964a8e4e",
"0x6f31caecb33a26de70eddb3706f82d6ec60ceb93bf44e5c8fed4cf189a928067",
"0x7f27375e52ad3f21b943be603f155edf08dc90c1262c742a9436cf105d9506d7",
"0xd821ee66c9faf6defdaf9d451b20865c59e10a569e75623deacc2ba64a366a8a",
"0x502592844a7e45cb8f138478299bae93c3806e958dc81adee24853cceacb0b95",
"0xe2a692f5b9ee9d161806f1651eab48669f93aaddbb75e015e357f7c5c92fa100",
"0x7640deb2604c818fc7ec3d2e35503b8bec9178e9dd15ad75c0490f01a551131c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


