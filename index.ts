import * as nacl from "tweetnacl";

const ourKeys = nacl.sign.keyPair();

export function sign(message: string): string {
    let encoder = new TextEncoder();
    let encodedMessage = encoder.encode(message);
    let signedMessage = nacl.sign(encodedMessage, ourKeys.secretKey);
    return Buffer.from(signedMessage).toString("base64");
}

export function verify(message: string): string | null {
    let rawMessage = Buffer.from(message, "base64");
    let decodedMessage = nacl.sign.open(rawMessage, ourKeys.publicKey);
    if (decodedMessage == null) {
        return null;
    }

    let decoder = new TextDecoder();
    return decoder.decode(decodedMessage);
}
