import { Actions } from '../types/store';
import { Screens } from '../types/store';
import {  Product } from '../types/store';

export const editProducts = (payload: Product) => {
	return {
		action: Actions.EDIT_PRODUCT, // Tipo de acción: agregar tarea.
		payload, // El objeto tarea que se va a agregar.
	};
};


export const removeProduct = (payload: number) => {
	return {
		action: Actions.REMOVE_PRODUCT, // Tipo de acción: eliminar tarea.
		payload, // El id de la tarea que se va a eliminar.
	};
};

