const users = [
    {
        "id":1,
        "name":"Albert"
    },
    {
        "id":2,
        "name":"Nrupul"
    },
    {
        "id":3,
        "name":"Prateek"
    },
    {
        "id":4,
        "name":"Aman"
    },
    {
        "id":5,
        "name":"Yogesh"
    },
    {
        "id":6,
        "name":"Ankush"
    },
    {
        "id":7,
        "name":"Vineet"
    },
    {
        "id":8,
        "name":"Tasneem"
    },
    {
        "id":9,
        "name":"Sumeet"
    },
    {
        "id":10,
        "name":"Anamika"
    }
]

function getAllUsers(page=1){
    const start = (page-1)*3;
    const end = start+3;
    return users.slice(start, end);
    // return users;
}

function getUsers(index){
    if(index>=0 && index<users.length){
        return users[index];
    }
    else
    return null;
}

function addUser(name){
    users.push({id:users.length+1, name:name});
}

function getUserById(id=1){
    for(let val in users){
        if(users[val].id === id)
        return users[val];
    }
    
}
module.exports ={
    getAllUsers,
    getUsers,
    addUser,
    getUserById
}