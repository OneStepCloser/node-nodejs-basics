import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    spawn('node', ['./files/script.js', ...args], { stdio: [process.stdin, process.stdout, process.stderr] });
};
