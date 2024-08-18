import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: "#fff",
				},
				headerTintColor: "#000",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}>
			{/* Optionally configure static options outside the route.*/}
			<Stack.Screen name='index' options={{}} />
		</Stack>
	);
}
