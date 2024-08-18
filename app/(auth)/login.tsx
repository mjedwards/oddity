import ParallaxScrollView from "@/components/ParallaxScrollView";
import React from "react";
import { Image, StyleSheet } from "react-native";
import LoginForm from "./components/LoginForm";

export default function Login() {

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#ffffff", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/oddly_v1.png")}
					style={styles.reactLogo}
				/>
			}>
			<LoginForm />
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
