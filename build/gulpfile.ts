import { series } from "gulp";

import { withTashNmae, run } from "./utils/index";

export default series(
    // withTashNmae("clean", async () => run("rm -rf ./dist")),
    withTashNmae("buildPackages", () => run("pnpm run --parallel build --filter ./packages"))
);
