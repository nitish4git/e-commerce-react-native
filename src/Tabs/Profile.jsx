import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import userIcon from '../../assets/images/user.png';
import { requestGalleryPermission } from '../utils/Permission_Utils';

const Profile = () => {
  const [pickImage, setPickImage] = useState(null);
  const [cameraImage, setCameraImage] = useState(null);

  // Taking Gallery permission
   
  const openGallery = async () => {
    const allowed = await requestGalleryPermission();
    console.log(allowed, 'from profile.js');
    if (!allowed) {
      return;
    }

    launchImageLibrary({ selectionLimit: 1, mediaType: 'photo' }, Response => {
      if (Response.didCancel) {
        console.log('Cancle by user');
      } else if (Response.errorMessage) {
        console.log('Error during image picking', Response.errorMessage);
      } else {
        const uri = Response.assets[0].uri;
        setPickImage(uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.userProfile}>
        {pickImage ? (
          <Image
            source={{ uri: pickImage }}
            resizeMode="contain"
            style={styles.profile}
          />
        ) : (
          <Image
            source={userIcon}
            resizeMode="contain"
            style={styles.profile}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.editProfile}
        activeOpacity={0.7}
        onPress={openGallery}
      >
        <Icon name="pencil" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 100,
  },
  userProfile: {
    height: 130,
    width: 130,
    backgroundColor: 'aliceblue',
    borderRadius: 80,
    elevation: 10,
    borderWidth: 3,
    borderColor: 'white',
    overflow: 'hidden',
  },
  editProfile: {
    height: 40,
    width: 40,
    position: 'relative',
    top: -50,
    left: 50,
    backgroundColor: '#298c13ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    zIndex: 1,
  },
  profile: {
    width: '100%',
    height: '100%',
  },
});
