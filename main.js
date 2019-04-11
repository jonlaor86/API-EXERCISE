// ex 1

// const fetch = function (isbn){
   
//     $.ajax ({
//         method:"GET",
//         url:`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data){
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch(9781945048470)


// ex 2


// const fetch = function ( queryType, queryValue){
   
//     $.ajax ({
//         method:"GET",
//         url:`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data){
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }


// fetch("title", "How to Win Friends and Influence People")
// fetch("isbn", 9789814561778)



// ex 3

// const fetch = function ( queryType, queryValue){
   
//     $.ajax ({
//         method:"GET",
//         url:`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data){
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             data.items.forEach(e => { console.log (`title: + ${e.volumeInfo.title} + author: + ${e.volumeInfo.author} + isbn + ${e.volumeInfo.industryIdentifiers.isbn}`)
                
//             });
//         }
//     })
// }


// fetch("title", "How to Win Friends and Influence People")
// fetch("isbn", 9789814561778)






















