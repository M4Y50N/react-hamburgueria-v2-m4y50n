import { useContext } from "react";
import kenzieburguer from "../../../../assets/imgs/kenzieburguer.png";
import { Container } from "../../../../assets/styles/Container";
import { H3, Headline } from "../../../../assets/styles/Typography";
import { Button } from "../../../../Components/Buttons";
import { StyledCartList } from "../../../../Components/Cart/styles";
import { Modal } from "../../../../Components/Modal";
import { CartContext } from "../../../../providers/CartContext";
import { UserContext } from "../../../../providers/UserContext";
import { StyledHeader } from "./styles";

import trash from "../../../../assets/imgs/trash.svg";

export const Header = () => {
	const { userLogout } = useContext(UserContext);

	const {
		showModal,
		setShowModal,
		total,
		setTotal,
		cart,
		increaseProductCart,
		decreaseProductCart,
		rmvProductCart,
	} = useContext(CartContext);

	return (
		<StyledHeader>
			{showModal && (
				<Modal>
					<div className="modal">
						<div className="cart_title">
							<H3 Color="var(--color-gray-0)">Carrinho de compras</H3>
							<button
								onClick={() => {
									setShowModal(false);
								}}
							>
								X
							</button>
						</div>
						<div className="cart_body">
							{cart.length ? (
								<>
									<StyledCartList>
										{cart.map((product, i) => {
											return (
												<li key={i}>
													<div className="cart_product_head">
														<img src={product.img} alt={product.name} />
													</div>
													<div className="cart_product_body">
														<H3>{product.name}</H3>
														<H3 Color="var(--color-primary)">
															R$ {product.price}
														</H3>
														<div className="product_count">
															<button
																onClick={() => {
																	decreaseProductCart(
																		product.id,
																		product.price
																	);
																}}
															>
																-
															</button>
															<p>{product.count}</p>
															<button
																onClick={() => {
																	increaseProductCart(
																		product.id,
																		product.price
																	);
																}}
															>
																+
															</button>
														</div>
													</div>
													<Button
														onClick={() => {
															rmvProductCart(product.id);
															setTotal(total - product.price);
														}}
													>
														<img src={trash} alt="trash" />
													</Button>
												</li>
											);
										})}
									</StyledCartList>
									{total}
								</>
							) : (
								<div className="empty">
									<H3>Seu carrinho está vazio</H3>
									<Headline>Adicione itens</Headline>
								</div>
							)}
						</div>
					</div>
				</Modal>
			)}
			<Container>
				<img src={kenzieburguer} alt="kenzie burguer" />

				<div>
					<Button
						onClick={() => {
							setShowModal(true);
						}}
					>
						Cart
					</Button>
					<Button ButtonSize="medium" onClick={userLogout}>
						Logout
					</Button>
				</div>
			</Container>
		</StyledHeader>
	);
};
