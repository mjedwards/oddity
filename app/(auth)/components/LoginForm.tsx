import React from "react";
import { Text, View, TextInput, Button, Image, StyleSheet } from "react-native";

export default function LoginForm() {
	const [formData, setFormData] = React.useState({
		email: "",
		password: "",
	});

	const handleChange = (name: any, text: any) => {
		setFormData((prevData) => ({ ...prevData, [name]: text }));
	};
	const handleSubmit = () => {
		console.log("Form submitted:", formData);
		// Here you would typically send the form data to your server
	};
	return (
		<>
			<Text>login</Text>
			<View>
				<TextInput
					style={styles.input}
					onChangeText={(text) => handleChange("email", text)}
					value={formData.email}
					placeholder='Email'
					keyboardType='email-address'
				/>
				<TextInput
					style={styles.input}
					onChangeText={(text) => handleChange("email", text)}
					value={formData.email}
					placeholder='Password'
					secureTextEntry
				/>
				<View style={styles.button}>
					<Button title='Submit' onPress={handleSubmit} color={"#ffffff"} />
				</View>
				{/* <TouchableOpacity style={styles.customButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity> */}
				<View>
					<Text>Don't have an account yet? Sign Up</Text>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	button: {
		backgroundColor: "#782CF6",
	},
});
