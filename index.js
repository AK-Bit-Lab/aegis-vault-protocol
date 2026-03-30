/**
 * AegisVault Protocol - Core blockchain interactions
 * @module aegis-vault-protocol
 */
const VERSION = '0.1.0';
const config = { network: 'mainnet', contractAddress: 'SPXXXX', contractName: 'aegis-vault-core' };
function init(options = {}) { return { ...config, ...options, version: VERSION }; }
module.exports = { init, config, VERSION };
