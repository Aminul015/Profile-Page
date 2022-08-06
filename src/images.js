import React from "react";
import {View, Image , StyleSheet} from "react-native";

const ImageFile = () =>{
    return(
        <View>
            <Image style={styles.imageStyle}
            source ={require("../assets/Aminul.jpg")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        display: 'flex',
       width: 400,
       height: 400,
       
    },
  });

export default ImageFile;