import { Modal } from "@gluestack-ui/themed"
import {
  Button,
  ButtonText,
  ModalBackdrop,
  ModalContent,
  ModalFooter,
} from "@gluestack-ui/themed"
import { Text } from "react-native"
import tw from "twrnc"

const DeleteModal = ({ showModal, setShowModal, ref }: any) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false)
      }}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>
        <Text style={tw`text-center font-bold text-2xl mt-3`}>Are you sure?</Text>

        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => {
              setShowModal(false)
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            borderWidth="$0"
            onPress={() => {
              setShowModal(false)
            }}
          >
            <ButtonText>Delete</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteModal
