
import { Button } from '@chakra-ui/react'

function AddButton (props){
    return (
<Button onClick={props.error ? props.onOpen:props.onClick} type={props.type || 'button'}
colorScheme='teal' size='sm'>{props.children} </Button>
    )
}

export default AddButton;