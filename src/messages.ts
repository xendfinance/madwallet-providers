const messages = {
  errors: {
    disconnected: () =>
      'MadWallet: Disconnected from chain. Attempting to connect.',
    permanentlyDisconnected: () =>
      'MadWallet: Disconnected from MadWallet background. Page reload required.',
    sendSiteMetadata: () =>
      `MadWallet: Failed to send site metadata. This is an internal error, please report this bug.`,
    unsupportedSync: (method: string) =>
      `MadWallet: The MadWallet Ethereum provider does not support synchronous methods like ${method} without a callback parameter.`,
    invalidDuplexStream: () => 'Must provide a Node.js-style duplex stream.',
    invalidNetworkParams: () =>
      'MadWallet: Received invalid network parameters. Please report this bug.',
    invalidRequestArgs: () => `Expected a single, non-array, object argument.`,
    invalidRequestMethod: () => `'args.method' must be a non-empty string.`,
    invalidRequestParams: () =>
      `'args.params' must be an object or array if provided.`,
    invalidLoggerObject: () => `'args.logger' must be an object if provided.`,
    invalidLoggerMethod: (method: string) =>
      `'args.logger' must include required method '${method}'.`,
  },
  info: {
    connected: (chainId: string) =>
      `MadWallet: Connected to chain with ID "${chainId}".`,
  },
  warnings: {
    // deprecated methods
    enableDeprecation: `MadWallet: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
    sendDeprecation: `MadWallet: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    // deprecated events
    events: {
      close: `MadWallet: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect`,
      data: `MadWallet: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`,
      networkChanged: `MadWallet: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged`,
      notification: `MadWallet: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`,
    },
    rpc: {
      ethDecryptDeprecation: `MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686`,
      ethGetEncryptionPublicKeyDeprecation: `MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686`,
    },
    // misc
    experimentalMethods: `MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning.`,
  },
};
export default messages;
