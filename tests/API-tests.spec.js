const {test, expect} = require('@playwright/test');

test.describe.parallel("API Testing", () => {
    const baseUrl = "https://jsonplaceholder.typicode.com"

    test("API Test - /posts/1 GET Response Structure and Status", async ({request}) => {

        const response = await request.get(`${baseUrl}/posts/1`);
        const json = await response.json();

        expect(response.status()).toBe(200);
        expect(json).toMatchObject({
          userId: expect.any(Number),
          id: expect.any(Number), 
          title: expect.any(String), 
          body: expect.any(String)
        });

    });

    test("API Test - /posts GET Response Structure and Status", async ({request}) => {

        const response = await request.get(`${baseUrl}/posts`);
        const json = await response.json();

        expect(response.status()).toBe(200);
        expect(json.length).toBeGreaterThan(0);

        json.forEach(element => {

            expect(element).toMatchObject({
              userId: expect.any(Number),
              id: expect.any(Number), 
              title: expect.any(String), 
              body: expect.any(String)
            });

        });

    });

});
