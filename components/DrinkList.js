import React, { Component } from "react";
import {
	StyleSheet,
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

	// componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
	// Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, 
	// this is a good place to instantiate the network request.
	
	componentDidMount() {
		this.fetchDrinks();
	}

	// Fetches drinks by making a GET request to fetch a list of drinks from the API,

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

	// Handles infinite scroll list using the FlatList component
	// For application performance, it’s important to not load or display data the user isn’t looking at yet.
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
