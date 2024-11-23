import requests

url = "http://localhost:3000/"

r = requests.get(url)
print(r.text)

r = requests.post(url+"/api/users", data={"user": "John", "password": "1234"})
print(r.text)

r = requests.get(url+"/api/users")
print(r.text)

r = requests.get(url+"/api/users/admin")
print(r.text)