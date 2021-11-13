import * as ethers from 'ethers'
import { apes } from './apes.abi'
import { Apes2981Instance } from './apes.interface';

export const NETWORK = "ropsten";
export const INFURA = "https://ropsten.infura.io/v3/c2659dd137f742b2b26c4a423d59895f"
export const ADDRESS = "0xd4d4ab1bc9dbdbf55300af4e431d7fbca11a01dd"

// Specify your own API keys
// Each is optional, and if you omit it the default
// API key for that service will be used.
const providers = ethers.getDefaultProvider(NETWORK, {
  // etherscan: YOUR_ETHERSCAN_API_KEY,
  infura: "c2659dd137f742b2b26c4a423d59895f",
  // Or if using a project secret:
  // infura: {
  //   projectId: YOUR_INFURA_PROJECT_ID,
  //   projectSecret: YOUR_INFURA_PROJECT_SECRET,
  // },
  // alchemy: YOUR_ALCHEMY_API_KEY,
  // pocket: YOUR_POCKET_APPLICATION_KEY
  // Or if using an application secret key:
  // pocket: {
  //   applicationId: ,
  //   applicationSecretKey:
  // }
});

const contract = new ethers.Contract(ADDRESS, apes, providers) as unknown as Apes2981Instance

export const _currentSupply = async () =>  {
  const res = (await contract.totalSupply()).toString()
  console.log(res)
  return res
}
export const _price = async () => {
  const res =  (await contract.APE_PRICE()).toString()
  console.log(res)
  return res;
}
export const _maxSupply = async () => {
  const res =  (await contract.maxApes()).toString()
  console.log(res)
  return res
}
export const _name = async () => {
  const res = await contract.name();
  console.log(res)
  return res;
}
export const _apesReveal = async () => {
  const res =  await contract.apesReveal();
  console.log(res)
  return res
}
export const _revealTimeStamp = async () => {
  const res =  await contract.revealTimestamp()
  console.log(res)
  return res
}

