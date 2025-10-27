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

    test('should handle multiplication queries', () => {
        expect(QueryProcessor("What is 54 multiplied by 1?")).toBe("54");
        expect(QueryProcessor("What is 23 multiplied by 45?")).toBe("1035");
        expect(QueryProcessor("What is 43 multiplied by 38?")).toBe("1634");
        expect(QueryProcessor("What is 93 multiplied by 9?")).toBe("837");
        expect(QueryProcessor("What is 51 multiplied by 95?")).toBe("4845");
    });

    test('should find numbers that are both square and cube', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 2203, 4958, 3015, 3626, 256, 2744, 64?")).toBe("64");
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 3136, 729, 4528, 1150, 1, 183, 1180?")).toBe("729");
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 1796, 4109, 324, 3952, 1850, 729?")).toBe("729");
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 64, 1305, 721, 125, 1807, 2768, 36?")).toBe("64");
    });

    test('should handle largest number queries with different formats', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 27, 88, 98?")).toBe("98");
        expect(QueryProcessor("Which of the following numbers is the largest: 61, 42, 46?")).toBe("61");
        expect(QueryProcessor("Which of the following numbers is the largest: 9, 21, 52?")).toBe("52");
        expect(QueryProcessor("Which of the following numbers is the largest: 51, 78, 67?")).toBe("78");
        expect(QueryProcessor("Which of the following numbers is the largest: 1, 55, 39?")).toBe("55");
        expect(QueryProcessor("Which of the following numbers is the largest: 52, 50, 77?")).toBe("77");
        expect(QueryProcessor("Which of the following numbers is the largest: 59, 45, 22?")).toBe("59");
        expect(QueryProcessor("Which of the following numbers is the largest: 78, 1, 88?")).toBe("88");
        expect(QueryProcessor("Which of the following numbers is the largest: 35, 92, 25?")).toBe("92");
        expect(QueryProcessor("Which of the following numbers is the largest: 10, 99, 66?")).toBe("99");
        expect(QueryProcessor("Which of the following numbers is the largest: 59, 54, 92?")).toBe("92");
    });

    test('should handle additional multiplication and addition queries', () => {
        expect(QueryProcessor("What is 60 multiplied by 56?")).toBe("3360");
        expect(QueryProcessor("What is 37 multiplied by 12?")).toBe("444");
        expect(QueryProcessor("What is 88 multiplied by 29?")).toBe("2552");
        expect(QueryProcessor("What is 7 plus 89?")).toBe("96");
        expect(QueryProcessor("What is 32 plus 95?")).toBe("127");
        expect(QueryProcessor("What is 42 plus 78?")).toBe("120");
        expect(QueryProcessor("What is 77 plus 17?")).toBe("94");
    });

    test('should handle more square and cube queries', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 279, 4489, 729, 2915, 2263, 1331, 339?")).toBe("729");
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 1782, 4777, 1, 2652, 402, 2916, 2197?")).toBe("1");
    });
});