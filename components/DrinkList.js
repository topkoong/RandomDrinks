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
	},
	activityIndicator: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: 80
	}
});

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
		this.setState(
			{
				loadingMore: true
			},
			() => {
				this.fetchDrinks();
			}
		);
	};
	render() {
		const { drinks, isLoading } = this.state;
		return isLoading ? (
			<View style={styles.container}>
				<ActivityIndicator animating size="large" style={styles.activityIndicator} />
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
