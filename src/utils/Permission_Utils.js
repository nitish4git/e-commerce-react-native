import { Alert, Platform } from "react-native"
import {check , request , PERMISSIONS,openSettings,RESULTS} from "react-native-permissions"

export const requestGalleryPermission = async()=>{
    const permission = Platform.select({
        android:PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        ios:PERMISSIONS.IOS.PHOTO_LIBRARY
    });

    const result = await check(permission);

    if(result === RESULTS.GRANTED){
        return true
    }
    if(result === RESULTS.DENIED){
         const reqResult = await request(permission);
         console.log(reqResult,"data form reqResult")
         return reqResult === RESULTS.GRANTED;
    }
    if(result === RESULTS.BLOCKED){
        Alert.alert("Permission Blocked","Please allow gallery access in setting",[{
            text:"open setting", onPress:openSettings
        }]);
        return false
    }
    return false
}

// Camera Permission

export const requestCameraPermission = async() =>{
const permission = Platform.select({
    android:PERMISSIONS.ANDROID.CAMERA,
    ios:PERMISSIONS.IOS.CAMERA
});

const result = await check(permission)
    if(result === RESULTS.GRANTED){
        return true
    }
    if(result === RESULTS.DENIED){
        const reqResult = await request(result)
        return reqResult === RESULTS.GRANTED
    }
    if(request === RESULTS.BLOCKED){
        Alert.alert("Permission Blocked","Please allow camera access in setting",[{
            text:"open setting",onPress:openSettings
        }]);
        return false;
    }
return false
}