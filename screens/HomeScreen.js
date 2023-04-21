import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text
				style={{
					fontSize: 30,
					textAlign: "center",
					marginTop: "20%",
				}}
			>
				Home Screen
			</Text>

			<TouchableOpacity onPress={() => navigation.navigate("Stack")}>
				<Text>Te llevo al StackScreen</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
