import { inferFileProperties } from "./inferFileProperties";

describe("inferFileProperties", () => {
	test("should return the file extension", () => {
		const path =
			"/Users/shannon/dev/webdev/shared-react-components/src/components/atoms/Layout.tsx";
		const fileProperties = inferFileProperties(path);
		expect(fileProperties.extension).toBe("tsx");
	});
});
