import { Worker } from 'worker_threads';
import os from 'os';

const cpuCount = os.cpus().length;
const MIN_N = 10;

function runFibonacciWorker(n) {
    return new Promise((resolve) => {
        const worker = new Worker('./worker.js', { workerData: n });

        worker.on('message', (payload) => resolve({ status: 'resolved', data: payload }));
        worker.on('error', () => resolve({ status: 'error', data: null }));
    })
}

export const performCalculations = async () => {
    const workerPromises = Array(cpuCount)
        .fill(null)
        .map((_, i) => runFibonacciWorker(MIN_N + i));

    return await Promise.all(workerPromises);
};