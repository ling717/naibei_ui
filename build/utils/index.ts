import { spawn } from "child_process";
import { projectRoot } from "./paths";

export const withTashNmae = <T extends Object>(name: string, fn: T) =>
    Object.assign(fn, { displayName: name });

export const run = async (command: string) => {
    return new Promise((resolve) => {
        const [cmd, ...args] = command.split(" ");
        const app = spawn(cmd, args, {
            cwd: projectRoot,
            stdio: "inherit",
            shell: true, //默认情况下 linux 才自持rm -rf
        });
        app.on("close", resolve);
    });
};
