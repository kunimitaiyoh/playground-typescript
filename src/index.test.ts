import { fizzbuzz } from "@/index";

describe("fizzbuzz", () => {
    test("number", () => {
        expect(fizzbuzz(1)).toBe("1");
    });

    test("Fizz", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });

    test("Buzz", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
    });

    test("Fizz Buzz", () => {
        expect(fizzbuzz(15)).toBe("Fizz Buzz");
    });
});
