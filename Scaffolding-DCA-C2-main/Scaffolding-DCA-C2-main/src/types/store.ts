export type Product  = {
	image?: string;
    titleproduct?: string;
    description?: string;
    category?: string;
    price?: number;
    stock?: number;
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
	'EDIT_PRODUCT' = 'EDIT_PRODUCT',
	'REMOVE_PRODUCT' = 'REMOVE_PRODUCT',
}

export enum Screens {

	'DASHBOARD' = 'DASHBOARD',
	
}
