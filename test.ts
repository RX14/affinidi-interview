import { sign, verify } from "./index";

test("sign function returns encoded string", () => {
    let message = sign("hello world");
    expect(message.length).toBeGreaterThanOrEqual(11);
});

test("verify function returns signed message", () => {
    let message = sign("hello world");
    let verifiedMessage = verify(message);
    expect(verifiedMessage).toBe("hello world");
})

test("verify function returns null when verify fails", () => {
    let message = sign("hello world");
    let modifiedMessage = "a" + message.slice(1);
    let verifiedMessage = verify(modifiedMessage);
    expect(verifiedMessage).toBeNull();
})
