import { useContext, useEffect, useState } from "react";
import kenzieburguer from "../../../../assets/imgs/kenzieburguer.png";
import { Container } from "../../../../assets/styles/Container";
import { H3, Headline } from "../../../../assets/styles/Typography";
import { Button } from "../../../../Components/Buttons";
import {
	StyledCartList,
	StyledTotal,
} from "../../../../Components/Cart/styles";
import { Modal } from "../../../../Components/Modal";
import { CartContext } from "../../../../providers/CartContext";
import { UserContext } from "../../../../providers/UserContext";
import { StyledHeader } from "./styles";

import trash from "../../../../assets/imgs/trash.svg";
import logout from "../../../../assets/imgs/logout.svg";
import cartIcon from "../../../../assets/imgs/cart.svg";
import search from "../../../../assets/imgs/search.svg";
import { replaceDotComma } from "../../../../utils";

export const Header = () => {
	const { userLogout, filterSearch } = useContext(UserContext);

	const {
		showModal,
		setShowModal,
		total,
		setTotal,
		cart,
		setCart,
		increaseProductCart,
		decreaseProductCart,
		rmvProductCart,
	} = useContext(CartContext);

	const [showSearch, setShowSearch] = useState(false);

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
						{cart.length ? (
							<>
								<div className="cart_body">
									<StyledCartList>
										{cart.map(({ id, img, name, price, count }, i) => {
											return (
												<li key={i}>
													<div className="cart_product_head">
														<img src={img} alt={name} />
													</div>
													<div className="cart_product_body">
														<H3>{name}</H3>
														<H3 Color="var(--color-primary)">
															R$ {replaceDotComma(price)}
														</H3>
														<div className="product_count">
															<button
																onClick={() => {
																	decreaseProductCart(id, price);
																}}
															>
																-
															</button>
															<p>{count}</p>
															<button
																onClick={() => {
																	increaseProductCart(id, price);
																}}
															>
																+
															</button>
														</div>
													</div>
													<Button
														onClick={() => {
															rmvProductCart(id);
														}}
													>
														<img src={trash} alt="trash" />
													</Button>
												</li>
											);
										})}
									</StyledCartList>
								</div>
								<StyledTotal>
									<div className="total">
										<p>Total</p>
										<p>R$ {replaceDotComma(total)}</p>
									</div>

									<Button
										ButtonBackground="gray"
										onClick={() => {
											setCart([]);
											setTotal(0);
										}}
									>
										Remover Todos
									</Button>
								</StyledTotal>
							</>
						) : (
							<div className="cart_body">
								<div className="empty">
									<H3>Seu carrinho está vazio</H3>
									<Headline>Adicione itens</Headline>
								</div>
							</div>
						)}
					</div>
				</Modal>
			)}
			<Container>
				{!showSearch ? (
					<>
						<img src={kenzieburguer} alt="kenzie burguer" />

						<div className="actions">
							<div className="search_box">
								<input
									type="text"
									onChange={filterSearch}
									placeholder="Digitar Pesquisa"
								/>
								<button
									onClick={() => {
										setShowSearch(!showSearch);
									}}
								>
									<img src={search} alt="search" />
								</button>
							</div>
							<Button
								onClick={() => {
									setShowModal(true);
								}}
							>
								<img src={cartIcon} alt="cart icon" />
								<span>{cart.length}</span>
							</Button>
							<Button ButtonSize="medium" onClick={userLogout}>
								<img src={logout} alt="logout" />
							</Button>
						</div>
					</>
				) : (
					<div className="maximized">
						<div className="">
							<input
								type="text"
								onChange={filterSearch}
								placeholder="Digitar Pesquisa"
							/>
							<button
								onClick={() => {
									setShowSearch(!showSearch);
								}}
							>
								<img src={search} alt="search" />
							</button>
						</div>
					</div>
				)}
			</Container>
		</StyledHeader>
	);
};
