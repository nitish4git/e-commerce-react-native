import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CrossIcon from 'react-native-vector-icons/Entypo'
import CheckIcon from "react-native-vector-icons/FontAwesome" // name -check-circle

const Modalpopup = props => {
  const [openModal, setOpenModal] = useState(props.isVisible);
  const handleModal = () => {
    return setOpenModal(!openModal);
  };
   {/* Props this component takes
              miniMsg="Success!"
              majorMsg="Congraa!,You are eligilebe for the test. Best of Luck"
              btnText="Go Ahead"
              color={"green"}
              Icon={true}
           */}
  return (
    <View>
      <Modal
        animationType="slide"
        backdropColor={'transparent'}
        visible={openModal}
      >
        <View style={styles.modelContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity
              onPress={() => setOpenModal(false)}
              style={styles.closeBtnStyle}
              activeOpacity={0.95}
            >
              <Text style={{ fontSize: 16 }}>❌</Text>
            </TouchableOpacity>
            {/* first view  */}
            <View style={[styles.firstInsideContainer,{backgroundColor:props.color}]}>
              {
                props.Icon ? (
                  <CheckIcon name="check-circle" size={100} color="white"/>
                ):(
              <CrossIcon name="circle-with-cross" size={100} color="white"/>

                )
              }
            </View>
            {/* second view  */}
            <View style={styles.secondInSideContainer}>
              <Text style={styles.mainText}>{props.miniMsg}</Text>
              <Text style={styles.messageText}>
                {props.majorMsg}
                {/* You are not eligible for the test.Please try after something */}
              </Text>
            </View>
            <View style={styles.actionButtonContainer}>
              <TouchableOpacity style={[styles.actionButton,{backgroundColor:props.color}]} activeOpacity={0.9} onPress={()=>setOpenModal(false)}>
                <Text style={{textAlign:"center",color:'white',fontSize:18,fontWeight:"400"}}>{props.btnText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* for toggle pop-up  */}
     
      <Button title="Pop-Up Modal" onPress={handleModal} />
    </View>
  );
};

export default Modalpopup;

const styles = StyleSheet.create({
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    backgroundColor: 'white',
    height: 400,
    width: 300,
    borderRadius: 10,
  },
  closeBtnStyle: {
    backgroundColor: 'white',
    elevation: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -15,
    top: -25,
    borderRadius: 50,
    zIndex: 1,
  },
  firstInsideContainer: {
    // backgroundColor:'green',
    height: '40%',display:"flex",justifyContent:"center",alignItems:'center'
  },
  secondInSideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    paddingTop: 35,
  },
  messageText: {
    width: 200,
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
  },
  actionButtonContainer: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },actionButton:{
    backgroundColor:'red',marginTop:25,borderRadius:50,paddingHorizontal:25,paddingVertical:15
  }
});












