import { useEffect, useState } from "react";

const useMobile = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

	const handleWindowSizeChange = () => {
		setIsMobile(window.innerWidth <= 767);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);
	return isMobile;
};
export default useMobile;
