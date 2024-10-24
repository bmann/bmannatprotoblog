import { CredentialManager, XRPC } from "@atcute/client";

export const MY_DID = "did:plc:2cxgdrgtsmrbqnjkwyplmp43";
export const MY_PDS = "https://morel.us-east.host.bsky.network";

const handler = new CredentialManager({ service: MY_PDS, fetch });
export const bsky = new XRPC({ handler });
