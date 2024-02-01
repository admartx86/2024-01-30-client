// Exercise A: Get a resource from 'https://jsonplaceholder.typicode.com/posts/1'

// ✔ Best Time 3:12.

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));



// Exercise B: List all resources from 'https://jsonplaceholder.typicode.com/posts'

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Exercise C: Create a resource '{ title: 'foo', body: 'bar', userId: 1 }' at 'https://jsonplaceholder.typicode.com/posts'

// ✔ Best Time 3:21.

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

// Exercise D: Update a resource '{ id: 1, title: 'foo', body: 'bar', userId: 1 }' at 'https://jsonplaceholder.typicode.com/posts/1'

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

// Exercise E: Patch a resource '{ title: 'foo' }' at 'https://jsonplaceholder.typicode.com/posts/1'

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

// Exercise F: Delete a resource at 'https://jsonplaceholder.typicode.com/posts/1'

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

// Exercise G: Filter a resource at 'https://jsonplaceholder.typicode.com/posts?userId=1'

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Exercise H: List a nested resource at 'https://jsonplaceholder.typicode.com/posts/1/comments'

// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));