import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		totalPrice: 0,
		items: []
	},
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = state.items.reduce((sum, obj) => {
				return (obj.price * obj.count) + sum;
			}, 0);
		},

		removeItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.count--
				state.items = state.items.filter(obj => obj.id !== action.payload);
				state.totalPrice = state.items.reduce((sum, obj) => {
					return (obj.price * obj.count) + sum;
				}, 0);
			}

			if (findItem.count === 0) {
				const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
				state.items = state.items.filter((item, index) => index !== itemIndex);
			}
		}
	}
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer