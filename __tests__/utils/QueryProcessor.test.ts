import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Faiz"
          ));
    });

    test('should handle math addition', () => {
        const query = "What is 7 plus 43?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("50");
    });

    test('should handle more math addition cases', () => {
        expect(QueryProcessor("What is 21 plus 48?")).toBe("69");
        expect(QueryProcessor("What is 76 plus 45?")).toBe("121");
    });

    test('should find largest number', () => {
        const query = "Which of the following numbers is the largest: 52, 84, 76?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("84");
    });
});