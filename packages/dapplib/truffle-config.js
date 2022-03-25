require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stone remember noble mistake injury light army gas'; 
let testAccounts = [
"0x9b2755b19d89d8107386572ae9393dc14dbe135b4be2288b771c8bca4536e2bc",
"0xd94e5526396abc8d2065ff35d0ee1f981b44803bdc1041900d3320194450fa9c",
"0x050551832fd7ac3cc55deb68f3c7c86ec244c1803ac33ad868679cb166d818aa",
"0xb633f7fdbf7701b748a53fde0888c5fbef475bfd7e8c5e2f84779bece7e6ee07",
"0x45b0a4707f4065a3e9c9033d663434ca0e5b76b3a1db3385643d947288bbc82e",
"0x167feedfa3e5f6a61fc34b5ab80f7980ed3b7f928f78fc44b38b161e22bf6d35",
"0x6564cc22bcc1076dbe3a6d00bceccafe63761af63257cfac7f6b3fe13311a81c",
"0x837c66bde878514951aab9941a34f7e6fa35219f5ff698c152beec67609ad1c0",
"0xfa2f016ad5fc8cd9fea70fceec67991b361f546a51166d1ac20f061525f54cb5",
"0xef3f08797a0ce7ea16375bcd639c0e2027abc30713ed0116b5126e0e74cff5a9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

