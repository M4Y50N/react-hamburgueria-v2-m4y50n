import { createContext, useEffect, useRef, useState } from "react";

interface iCart {
	count: number;
	id: number;
	img: string;
	name: string;
	category: string;
	price: number;
}

interface iCartProvider {
	children: React.ReactNode;
}

interface iCartProduct {
	id: number;
	img: string;
	name: string;
	category: string;
	price: number;
}

interface iCartContext {
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	total: number;
	setTotal: React.Dispatch<React.SetStateAction<number>>;
	cart: iCart[];
	setCart: React.Dispatch<React.SetStateAction<iCart[]>>;
	addProductInCart: ({ id, name, category, price }: iCartProduct) => void;
	rmvProductCart: (id: number) => void;
	increaseProductCart: (id: number, price: number) => void;
	decreaseProductCart: (id: number, price: number) => void;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProvider) => {
	const [cart, setCart] = useState<iCart[]>([]),
		[total, setTotal] = useState(0);

	const [showModal, setShowModal] = useState<boolean>(false);

	// useEffect(() => {
	// 	console.log(cart);
	// }, [cart]);

	const addProductInCart = ({
		id,
		img,
		name,
		category,
		price,
	}: iCartProduct) => {
		const repeatedProducts = cart.find((item) => item.id === id);

		if (repeatedProducts) {
			increaseProductCart(id, price);

			return null;
		}

		setCart([
			...cart,
			{
				count: 1,
				id: id,
				img: img,
				name: name,
				category: category,
				price: price,
			},
		]);

		setTotal(total + price);
	};

	const rmvProductCart = (id: number) => {
		const updateCart = cart.filter((item) => item.id !== id);

		const item = cart.find((item) => item.id === id);

		if (item !== undefined) {
			setTotal(total - item?.count * item?.price);
		}
		setCart(updateCart);
	};

	const increaseProductCart = (id: number, price: number) => {
		const updateCart = cart.map((item) =>
			item.id === id ? { ...item, count: item.count + 1 } : item
		);
		setCart(updateCart);
		setTotal(total + price);
	};

	const decreaseProductCart = (id: number, price: number) => {
		const updateCart = cart.map((item) =>
			item.id === id ? { ...item, count: item.count - 1 } : item
		);

		setCart(updateCart);
		setTotal(total - price);

		const [{ count }] = cart.filter((item) => item.id === id);

		if (count <= 1) {
			rmvProductCart(id);
		}
	};

	return (
		<CartContext.Provider
			value={{
				showModal,
				setShowModal,
				total,
				setTotal,
				cart,
				setCart,
				addProductInCart,
				rmvProductCart,
				increaseProductCart,
				decreaseProductCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
