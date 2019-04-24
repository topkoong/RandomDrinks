import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 175,
		width: 350,
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "white",
        margin: 10,
        padding: 10
	}
});

export default class Drink extends Component {
	render() {
		const {
			strDrink: cocktailName,
			strDrinkThumb: imgURL
		} = this.props.drink;
		return (
			<View style={styles.container}>
				<View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
					<Text style={{ fontSize: 20, fontWeight: "bold", color: '#615c65' }}>
						{cocktailName}
					</Text>
				</View>
				<View>
					<Image
						source={{ uri: imgURL }}
						style={{ width: 130, height: 130 }}
					/>
				</View>
			</View>
		);
	}
}
