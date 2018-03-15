// Task4: Requests debugging
const data = {
    "id ": "5",
    "name ":  "Jon Doe",
    "age":  "12"
};
fetch('http://localhost:3000/data.json', {method: 'GET'})
.then(response => response.json())
.then(res => {
  document.getElementById('get').innerHTML= '<code>' + JSON.stringify(res) + '</code>';
});

fetch('http://localhost:3000', {
  method: 'POST',
  body: JSON.stringify(data),
})
.then(response => response.text())
.then(res => {
  document.getElementById('post').innerHTML= '<code>' + res + '</code>';
});

fetch('http://localhost:3000', {
  method: 'PUT',
  body: JSON.stringify(data),
})
.then(response => response.text())
.then(res => {
  document.getElementById('put').innerHTML= '<code>' + res + '</code>';
});
