// Get a resource from 'https://jsonplaceholder.typicode.com/posts/1'

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// List all resources from 'https://jsonplaceholder.typicode.com/posts'

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Create a resource '{ title: 'foo', body: 'bar', userId: 1 }' at 'https://jsonplaceholder.typicode.com/posts'

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Update a resource '{ id: 1, title: 'foo', body: 'bar', userId: 1 }' at 'https://jsonplaceholder.typicode.com/posts/1'

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Patch a resource '{ title: 'foo' }' at 'https://jsonplaceholder.typicode.com/posts/1'

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Delete a resource at 'https://jsonplaceholder.typicode.com/posts/1'

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.status
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Filter a resource at 'https://jsonplaceholder.typicode.com/posts?userId=1'

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// List a nested resource at 'https://jsonplaceholder.typicode.com/posts/1/comments'

// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));