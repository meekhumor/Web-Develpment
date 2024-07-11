// Client --> (Request) Server --> (Response) Client

// Now this request made my client are of types:
// 1. GET :
// # Simple requests for information
// # Should only retrieve data
// # Should not change data

// 2. POST :
// # Should create new data
// # Should not retrieve data
// # Should not change data

// 3. PUT :
// # Should update existing data
// # Should not create new data
// # Should not retrieve data

// 4. DELETE :
// # Should delete existing data
// # Should not create new data
// # Should not retrieve data
// # Should not change data

// In simpler term:

// GET: retrieve the resource from database
// POST: create a resource on database
// PUT: update existing resource on database
// DELETE: delete existing resource from database