import { View, Text, StyleSheet, Alert, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../assets/css/styles";
import Slider from "../component/Slider";
import Ionicicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Evilicons from "@expo/vector-icons/EvilIcons";


const Home = ({ route, navigation }) => {
    const { user } = route.params;

    // Account Details Button Handler
    const acc_details = () => {
        Alert.alert(`Account Details ${user}`);
        navigation.navigate("AccountDetail", { user: `${user}` });
    }

    // Logout Button Handler
    const logout = () => {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            {/* Banner View */}
            <View style={styles.welcomeBanner}>
                <Text style={styles.headerText}>Welcome! {user}</Text>
                <View style={styles.headerBtns}>
                    <TouchableOpacity onPress={() => acc_details()}>
                        <Ionicicons name="person-outline" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => logout()} style={styles.logoutbtn}>
                        <Ionicicons name="log-out-outline" size={33} style={{
                            transform: [
                                { scaleX: -1 }
                            ]
                        }} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Main Info View */}
            <View style={styles.infoContainer}>
                <View style={styles.firstRow}>
                    <Text style={styles.infoText}>PA No: 12345</Text>
                    <Text style={styles.infoText}>Member No: {user}</Text>
                </View>
                <Text style={styles.infoText}>Rank: Captain</Text>
                <Text style={styles.infoText}>Name: Hafiz Muhammad Akmal Naseer</Text>
            </View>
            <Slider />
            <View style={styles.infoContainerTwo}>
                <View style={styles.secafterDarkGreen}>
                    <Text style={styles.infoText}>Total Contributions</Text>
                    <Text style={styles.numberText}>60</Text>
                    <Text style={styles.infoText}>Total Contributions Incl{"\n"}Initial Payment</Text>
                    <Text style={styles.numberText}>60</Text>
                </View>

                {/* Light Green Card View */}
                <View style={styles.lightGreenCardView}>
                    <Text style={styles.lgcHeading}>Summary</Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 5,
                        }}
                    />
                    <View style={styles.lgcInfo}>
                        <Text style={styles.lgcText}>Down Payment</Text>
                        <Text style={styles.numberTextTwo}>0</Text>
                        <Text style={styles.lgcText}>Down Payment SUH</Text>
                        <Text style={styles.numberTextTwo}>0</Text>
                        <Text style={styles.lgcText}>Monthly Contribution</Text>
                        <Text style={styles.numberTextTwo}>60</Text>
                        <Text style={styles.lgcText}>Adv Payment</Text>
                        <Text style={styles.numberTextTwo}>0</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 5,
                        }}
                    />
                    <View style={styles.lgcInfo}>
                        <Text style={styles.lgcText}>Grand Total</Text>
                        <Text style={styles.numberTextTwo}>60</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home