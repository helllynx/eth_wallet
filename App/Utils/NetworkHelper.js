import NetInfo from "@react-native-community/netinfo";
import Web3 from "web3";
import {web3ProviderConfig} from "../Config/Web3Config";


export let web3 = null;
export let subscription = null;

export const networkEventsListener = () => {
    try {
        const urlConfig = web3ProviderConfig['Ropsten'].url;

        if (!urlConfig)
            return null;

        let web3Provider = null;

        NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if (state.type !== 'none') {
                console.log('network is OK');
                if (!web3) {
                    web3Provider = new Web3.providers.WebsocketProvider(urlConfig);

                    if (!web3Provider)
                        return null;

                    web3 = new Web3(web3Provider);

                    if (!subscription)
                        subscription = subscribeToTransfer();
                }
            } else {
                console.log('network is NONE');
                // subscription.unsubscribe();
                if (web3Provider)
                    web3Provider.disconnect();
                web3Provider = null;
                web3 = null;
            }

        });
    } catch (e) {
        console.log(e);
    }
};


export async function subscribeToTransfer() {
    try {
        console.log('subscribeToTransfer');

        return web3.eth.subscribe('logs', {
            // address: ['0xB7db906fF24c131087DCB5B57c9e8f1D7B271a16', '0x96f55B7d683EB46FF23aBEf2aFb41EB54FCF524b'],
            topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef']
        }, (error, result) => {
            if (!error) {
                console.log('subscription');
                console.log(result);
            }
        })
            .on("data", (log) => {
                console.log('data');
                console.log(log);
            })
            .on("changed", (log) => {
                console.log('changed');
                console.log(log);
            });
    } catch (e) {
        console.log('Error subscribeToTransfer: ' + e)
    }
}
