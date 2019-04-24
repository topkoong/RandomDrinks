import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ActivityIndicator
} from "react-native";
import Drink from "./Drink";
import axios from "axios";

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

const dummyData = [
	{
		strDrink: "9 1/2 Weeks",
		strDrinkThumb:
			"https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
		idDrink: "16108"
	},
	{
		strDrink: "A. J.",
		strDrinkThumb:
			"https://www.thecocktaildb.com/images/media/drink/uryyrr1472811418.jpg",
		idDrink: "17833"
	},
	{
		strDrink: "A1",
		strDrinkThumb:
			"https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
		idDrink: "17222"
	},
	{
		strDrink: "Abbey Cocktail",
		strDrinkThumb:
			"https://www.thecocktaildb.com/images/media/drink/quyyuw1472811568.jpg",
		idDrink: "17834"
	},
	{
		strDrink: "Abbey Martini",
		strDrinkThumb:
			"https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
		idDrink: "17223"
	},
	{
		strDrink: "Absolutely Cranberry Smash",
		strDrinkThumb:
			"https://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg",
		idDrink: "15024"
	}
];

const API_ENDPOINT =
	"http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

export default class DrinkList extends Component {
	constructor() {
		super();
		this.state = {
			drinks: [],
			isLoading: true,
			error: null,
			loadingMore: false
		};
	}
	componentDidMount() {
		this.fetchDrinks();
	}

	fetchDrinks = async () => {
		try {
			const { data } = await axios.get(API_ENDPOINT);
			const { drinks } = data;
			this.setState({
				drinks: [...this.state.drinks, ...drinks],
				isLoading: false
			});
			
		} catch (error) {
			this.setState({ error, isLoading: false });
		}
	};
	handleLoadMoreData = () => {
		this.setState({
			loadingMore: true
		}, () => {
			this.fetchDrinks();
		});
	};
	render() {
		const { drinks, isLoading } = this.state;
		return isLoading ? (
			<View style={styles.container}>
				<ActivityIndicator animating size="large" />
			</View>
		) : (
			<View style={styles.container}>
				<FlatList
					data={drinks}
					renderItem={({ item }) => <Drink drink={item} />}
					keyExtractor={item => item.idDrink}
					onEndReached={this.handleLoadMoreData}
					onEndReachedThreshold={0.5}
					initialNumToRender={10}
				/>
			</View>
		);
	}
}
