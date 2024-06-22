import { View, Text, Image, StyleSheet, TextInput, Alert, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "../../assets/css/styles";

const Login = ({ navigation }) => {
    // State variable to hold the password 
    const [password, setPassword] = useState('');

    // State variable to track password visibility 
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility state 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    //Fetching User Credentials
    const [memNo, setMemNo] = useState("");

    //Evaluating User Credentials
    const submit = () => {
        if (memNo === "12345" && password === "12345") {
            Alert.alert(`Welcome ${memNo}`);
            navigation.navigate("Home", { user: `${memNo}` });
        } else {
            Alert.alert(`Invalid Credentials`);
        }
    }

    return (
        <View style={styles.mainContainerLogin}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Membership No</Text>
                <TextInput style={styles.inputField}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={memNo}
                    onChangeText={(actualData) => setMemNo(actualData)}
                />
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput style={styles.inputField}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#aaa"
                    style={styles.icon}
                    onPress={toggleShowPassword}
                />
                <TouchableHighlight style={styles.loginbtn} onPress={() => submit()}>
                    <Text style={styles.loginbtnText}>Sign In</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default Login