import * as ethers from 'ethers'
import { apes } from './apes.abi'
import { Apes2981Instance } from './apes.interface';

export const ROPSTEN = "";
export const MAINNET = "";
export const ADDRESS = "0xd4d4ab1bc9dbdbf55300af4e431d7fbca11a01dd"

const providers = ethers.getDefaultProvider('ropsten')
const contract = new ethers.Contract(ADDRESS, apes, providers) as unknown as Apes2981Instance

export const _currentSupply = async () => await (await contract.totalSupply()).toString
export const _price = async () => await (await contract.APE_PRICE()).toString
export const _maxSupply = async () => await (await contract.maxApes()).toString
export const _name = async () => await contract.name();
export const _apesReveal = async () => contract.apesReveal();
export const _revealTimeStamp = async () => (await contract.revealTimestamp()).toString

