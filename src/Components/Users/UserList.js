import { Box,Text } from "@chakra-ui/react";
import Card from "../UI/Card";


const UserList = (props) => {
  return (
    <Card >
      <Box w='100%'>
        {props.users.map((user) => (
          <Text border='1px' borderColor='teal.600' key={user.id}
          m='5px' borderRadius='lg' p='2'
          >
            {user.name} ({user.age} years old)
            
          </Text>
        

        ))}
      </Box>
      
    </Card>
  );
};

export default UserList;