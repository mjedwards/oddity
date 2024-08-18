import { Stack, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import Login from "./(auth)/login";

export default function Home() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({ headerShown: false });
	}, [navigation]);

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
			{isLoggedIn && <Text>if user is logged in send them to dashboard</Text>}
			{!isLoggedIn && <Login />}
			{/* if user is logged in send them to dashboard */}
			{/* else if user is not logged in send them to login */}
		</View>
	);
}
