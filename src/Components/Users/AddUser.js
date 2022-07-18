import { useState } from 'react'
import { Input,VStack} from '@chakra-ui/react'
import Card from "../UI/Card"
import AddButton from "../UI/Button"
import ErrorModal from '../UI/ErrorModal'
import {
    
    FormLabel,
    
  } from '@chakra-ui/react'

  const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
  
    const addUserHandler = (event) => {
      event.preventDefault();
      if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid name and age (non-empty values).',
        });
        return;
      }
      if (+enteredAge < 1) {
        setError({
          title: 'Invalid age',
          message: 'Please enter a valid age (> 0).',
        });
        return;
      }
      props.onAddUser(enteredUsername, enteredAge);
      setEnteredUsername('');
      setEnteredAge('');
    };
  
    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    };
  
    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    };
  
    const errorHandler = () => {
      setError(null);
      
    };
  
    

    return (
<Card>
    <VStack>
    {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}

        />
      )}
      <form onSubmit={addUserHandler}>
  <FormLabel htmlFor='name'>Username</FormLabel>
   <Input id='name' type='text' variant='filled' placeholder='username...' 
    
    value={enteredUsername}
    onChange={usernameChangeHandler} />
   <FormLabel htmlFor='age'>Age</FormLabel>
   <Input mb='2' id='age' type='number'variant='filled' placeholder='age...' 
    value={enteredAge}
    onChange={ageChangeHandler}/>
    <AddButton  type="submit" >Add user</AddButton>
</form>

</VStack>
</Card>


    )

}

export default AddUser;