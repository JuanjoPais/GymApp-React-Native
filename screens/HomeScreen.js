import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import {useNavigation} from "@react-navigation/native";

const image = {
	uri: "https://as1.ftcdn.net/v2/jpg/01/51/46/38/1000_F_151463899_Ab08hKzTS1PvBifzl4hmWgPmuvcy2RC2.jpg",
};

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<View style={{flex: 1, flexDirection: "column"}}>
			<ImageBackground
				source={image}
				style={{
					flex: 1,
					resizeMode: "cover",
					justifyContent: "center",
					alignItems: "center",
					alignContent: "center",
				}}
			>
				<Text
					style={{
						fontSize: 30,
						textAlign: "center",
						marginTop: "20%",
					}}
				>
					Home Screen
				</Text>

				<TouchableOpacity
					onPress={() => navigation.navigate("Stack")}
					style={{
						justifyContent: "center",
						backgroundColor: "white",
					}}
				>
					<Text>Te llevo al StackScreen</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default HomeScreen;
