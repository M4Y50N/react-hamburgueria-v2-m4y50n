import { BlobOptions } from "buffer";
import { useContext, useEffect, useState } from "react";
import { Container } from "../../assets/styles/Container";
import { H2, H3, Headline } from "../../assets/styles/Typography";
import { Button } from "../../Components/Buttons";
import { Modal } from "../../Components/Modal";
import { UserContext } from "../../providers/UserContext";
import { Header } from "./components/Header";
import { StyledProduct, StyledProducts } from "./styles";

interface iCart {
	count: number;
	id: number;
	name: string;
	price: number;
}

export const Products = () => {
	const { products } = useContext(UserContext);

	const [cart, setCart] = useState<iCart[] | []>([]);

	const [showModal, setShowModal] = useState<boolean>(false);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	const addProductInCart = ({
		id,
		name,
		category,
		price,
	}: {
		id: number;
		name: string;
		category: string;
		price: number;
	}) => {
		setCart([
			...cart,
			{
				count: 1,
				id: id,
				name: name,
				price: price,
			},
		]);
	};

	return (
		<>
			<Header />
			<Container>
				<StyledProducts>
					{showModal && (
						<Modal>
							<div className="modal">
								<div className="cart_title">
									<H3 Color="var(--color-gray-0)">Carrinho de compras</H3>
									<button>X</button>
								</div>
								<div className="cart_body">
									<H3>Seu carrinho está vazio</H3>
									<Headline>Adicione itens</Headline>
								</div>
							</div>
						</Modal>
					)}
					{products.map((product, i) => {
						return (
							<StyledProduct key={i}>
								<div className="product_head">
									<img src={product.img} alt={product.name} />
								</div>
								<div className="product_body">
									<H2>{product.name}</H2>
									<p>{product.category}</p>
								</div>
								<div className="product_footer">
									<H3 Color="var(--color-primary)">R$ {product.price}</H3>
									<Button
										onClick={() => addProductInCart(product)}
										ButtonSize="medium"
									>
										Adicionar
									</Button>
								</div>
							</StyledProduct>
						);
					})}
				</StyledProducts>
			</Container>
		</>
	);
};
