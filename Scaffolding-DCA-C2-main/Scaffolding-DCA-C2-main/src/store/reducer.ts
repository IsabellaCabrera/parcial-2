import { Actions } from '../types/store';
import {  Product } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case 'EDIT_PRODUCT':
			return {
				...currentState,
				backgroundColor: payload,
			};

		case Actions.REMOVE_PRODUCT:
			return {
				...currentState,
				screen: payload,
			};

		default:
			return currentState;
	}
};
