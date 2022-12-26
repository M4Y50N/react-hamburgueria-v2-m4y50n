import { useContext } from "react";
import { Container } from "../../assets/styles/Container";
import { H2, H3 } from "../../assets/styles/Typography";
import { Button } from "../../Components/Buttons";
import { CartContext } from "../../providers/CartContext";
import { UserContext } from "../../providers/UserContext";
import { Header } from "./components/Header";
import { StyledProduct, StyledProducts } from "./styles";

export const Products = () => {
	const { filteredArray } = useContext(UserContext),
		{ addProductInCart } = useContext(CartContext);

	return (
		<>
			<Header />
			<Container>
				<StyledProducts>
					{filteredArray.map((product, i) => {
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
