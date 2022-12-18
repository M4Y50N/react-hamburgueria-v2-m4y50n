import { Global } from "./assets/styles/Global";
import { Reset } from "./assets/styles/Reset";
import { UserProvider } from "./providers/UserContext";

import { RoutesMain as Routes } from "./routes";

function App() {
	return (
		<>
			<Global />
			<Reset />
			<UserProvider>
				<Routes />
			</UserProvider>
		</>
	);
}

export default App;
