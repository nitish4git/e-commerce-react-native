import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';

const { height } = Dimensions.get('window');
const BottomModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <Button title="open modal" onPress={() => setIsVisible(true)} />
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        style={styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.cancleBtn}
            onPress={() => setIsVisible(false)}
          >
            <Text>❌</Text>
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <Text>This is slide model</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    height: height * 0.6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cancleBtn: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    position: 'absolute',
    top: -60,
    left: '44%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
