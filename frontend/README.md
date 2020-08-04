{
    _id: "5f28b212bdb5ff010820a12d",
    email: "eugenefromrus@gmail.com",
    password: "bfdh8bc7g8",
    date: "2020-08-04T00:55:46.537Z",
    __v: 0
}

fetch('http://localhost:5000/api/users/register', {
    method: 'POST',
    body: JSON.stringify({
      email: 'example2@gmail.com',
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))