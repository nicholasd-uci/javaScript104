let games = ['Skyim', 'Mario Party 3', 'Fallout 3', 'Halo', 'Zelda', 'CSGO', 'Pokemon', 'Warzone', 'Kingdom of Hearts']
    let sports = ['Football', 'Lacrosse', 'Golf', 'MMA', 'Rugby', 'Hockey', 'Baseball', 'Tennis', 'Surfing']
    let foods = ['Pasta', 'Tacos', 'Filet', 'Gyro', 'Cheesecake', 'Cereal', 'Bagels', 'Rice Pilaf', 'Mac n Cheese']
    let hobbies = ['Golfing', 'Lacrosse', 'Coding', 'Dog Beach', 'Gaming', 'Boxing', 'Running', 'Coaching', 'Working Out']

    // Function generateFavorites - hands back a list of favorites
    const generateFavorites = () => {

      let possibleFavorites = []
      let guaranteedFavorites = []
      let favorites = []


      let length = parseInt(prompt('How many favorites do you want (Min: 4 , Max: 49)'))

      if (length < 5 || length > 49) {
        alert('Please make a valid choice')
        return
      }

      if (confirm('Would you like me to add some of my favorite games?')) {
        // Testing Button
        // console.log('yes I want to include games')

        // We then set var to itself and then give it an "action" = concat with this var
        possibleFavorites = possibleFavorites.concat(games)
        // pushing 1 random item into the guaranteedFavorites Array
        guaranteedFavorites.push(games[Math.floor(Math.random() * games.length)])
      }

      if (confirm('Would you like me to add some of my favorite sports?')) {
        possibleFavorites = possibleFavorites.concat(sports)
        guaranteedFavorites.push(sports[Math.floor(Math.random() * sports.length)])
      }

      if (confirm('Would you like me to add some of my favorite foods?')) {
        possibleFavorites = possibleFavorites.concat(foods)
        guaranteedFavorites.push(foods[Math.floor(Math.random() * foods.length)])
      }

      if (confirm('Would you like me to add some of my favorite hobbies?')) {
        possibleFavorites = possibleFavorites.concat(hobbies)
        guaranteedFavorites.push(hobbies[Math.floor(Math.random() * hobbies.length)])
      }
      // Developer Purposes ONLY
      console.log(possibleFavorites)
      console.log(guaranteedFavorites)

      for (let i = 0; i < length; i++) {
        //  we will push one favorite to a  possible random Favorite
        favorites.push(possibleFavorites[Math.floor(Math.random() * possibleFavorites.length)])
      }

      for (let i = 0; i < guaranteedFavorites.length; i++) {
        //  change favorites[i] to be guaranteedFavorites[i]
        favorites[i] = guaranteedFavorites[i]
      }
      // .join() method lets you turn an array into a string
      // *Best Practice: comma 'space'
      return favorites.join(', ')
    }

    document.getElementById('genFavs').addEventListener('click', () => {
      let favorites = generateFavorites()

      document.getElementById('favorites').textContent = favorites
    })