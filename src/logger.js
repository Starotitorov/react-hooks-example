class Logger {
    log() {
        throw new Error('The method should be implemented');
    }
}

export class ConsoleLogger extends Logger {
    log(error, info) {
        console.log(error, info)
    }
}
