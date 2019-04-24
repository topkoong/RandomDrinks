import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ingredients = ["Tequilla", "Apple Cider"];

const styles = StyleSheet.create({
	drinkContainer: {
		flex: 1,
		height: 170,
		width: 350,
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "white",
		margin: 10,
		padding: 15
    },
    drinkInfoContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    drinkTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#615c65"
    },
    ingredientsContainer: {
        flex: 1,
    },
    ingredientText: {
        fontWeight: 'bold',
        color: '#7d8b99'
    }
});

export default class Drink extends Component {
	render() {
		const {
			strDrink: cocktailName,
			strDrinkThumb: imgURL
		} = this.props.drink;
		return (
			<TouchableOpacity style={styles.drinkContainer}>
				<View style={styles.drinkInfoContainer}>
					<View style={styles.ingredientsContainer}>
						<Text style={styles.drinkTitle}>
							{cocktailName}
						</Text>
					</View>
                    <View style={styles.ingredientsContainer}>
                        {ingredients.map((ingredient, index) => (
                            <Text key={index} style={styles.ingredientText}>
                            • {ingredient}
                            </Text>
                        ))}
					</View>
				</View>
				<View>
					<Image
						source={{ uri: imgURL }}
						style={{
							width: 140,
							height: 140,
							resizeMode: "contain"
						}}
					/>
				</View>
			</TouchableOpacity>
		);
	}
}
