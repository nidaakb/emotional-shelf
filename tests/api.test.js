// Describe se usa para separar los tests
describe("/api/books", ()=> {
    // Aqui van los diferentes test para ese endpoint
    it('Should return an array of books',async ()=>{
        const response = await fetch("http://localhost:3000/api/books");

        const data = await response.json();
        
        expect(response.status).toBe(200);
        expect(data.message).toBe("Query executed successfully");
        expect(data.results.length).toBeGreaterThan(0);
    })
});

describe("/api/books/recommendation/:emotion/random", ()=> {
    it('Should return a random book related to the emotion - Sadness', async() => {
        const response = await fetch("http://localhost:3000/api/books/recommendations/Sadness/random");

        const data = await response.json();

        // Status code 200
        expect(response.status).toBe(200);

        // Array has only 1 element
        expect(data.results).toHaveLength(1);

        // property emotion of the book ioncludes the value sadness
        expect(data.results[0].emotions).toContain("Sadness")

    })
})