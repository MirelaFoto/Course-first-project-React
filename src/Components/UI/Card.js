
import { Center} from '@chakra-ui/react'

function Card (props){
    return (
       
<Center bgColor='white' p='4'w='60%' borderRadius='md' m='4em'>

{props.children}
</Center>



       


    )

}

export default Card;