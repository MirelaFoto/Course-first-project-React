import { Button, useDisclosure} from "@chakra-ui/react";


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'



const ErrorModal = (props) => {
     let{ isOpen, onOpen, onClose } = useDisclosure()
    

    return (
      <>
       <Button onClick={onOpen}>Open modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
       
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>{props.title} </ModalHeader>
              <ModalCloseButton />
  
              <ModalBody>
                {props.message}
              </ModalBody>
  
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
               
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </>
  


    )
  };
  
  export default ErrorModal;
  