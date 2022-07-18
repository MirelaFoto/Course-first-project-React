import AddUser from "../Users/AddUser";
import UserList from "../Users/UserList"
import {VStack} from '@chakra-ui/react';
import {useState} from 'react'

function Home(){
const [userList,setUserList]= useState([])

const addUserHandler=(name,age)=>{
setUserList((firstList)=>{
    return [...firstList,{name:name, age:age, id:Math.random.toString()}]})
}

    return(
    <VStack bgColor='gray.600' h='100vw'>
<AddUser onAddUser={addUserHandler} ></AddUser>
<UserList users={userList} ></UserList>
</VStack>
    )
}

export default Home;