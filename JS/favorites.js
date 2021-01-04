// let Variables that hold our array of information
let movies = ['The Mask', 'Toy Story', 'Gone With Whe Wind', 'Wheres papa?', 'Whats up Doc?', 'Wolf of WallStreet', 'Braveheart', 'Joke', 'A Knights Tale']

// For Loop that lets i always = 0
// as long as i is less than the length of our Array it will continue to render info
for (let i = 0; i < movies.length; i++) {
  // We use the .createElement method to create each item as a ('li') for every time For Loop Runs 
  // It will not appear on the page but bring it into existence 
  let movieElement = document.createElement('li')
  // We then use .className to make sure that each item has 'list-group-item' as a class name (bootstrap purposes) 
  movieElement.className = 'list-group-item'
  // We then grab the movie elements by grabbing its text content from the Array (let movies || let games etc)
  movieElement.textContent = movies[i]
  // We then grab the id element from UL Tag and make sure that we append each ('li')
  // This will make it always append to the bottom
  document.getElementById('movies').append(movieElement)
}