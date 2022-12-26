import { useContext } from "react";
import { Container } from "../../assets/styles/Container";
import { H2, H3 } from "../../assets/styles/Typography";
import { Button } from "../../Components/Buttons";
import { CartContext } from "../../providers/CartContext";
import { UserContext } from "../../providers/UserContext";
import { replaceDotComma } from "../../utils";
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
					{filteredArray.map(({ id, img, name, category, price }, i) => {
						return (
							<StyledProduct key={i}>
								<div className="product_head">
									<img src={img} alt={name} />
								</div>
								<div className="product_body">
									<H2>{name}</H2>
									<p>{category}</p>
								</div>
								<div className="product_footer">
									<H3 Color="var(--color-primary)">
										R$ {replaceDotComma(price)}
									</H3>
									<Button
										onClick={() =>
											addProductInCart({ id, img, name, category, price })
										}
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
