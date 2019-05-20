declare global {
    interface Window {
        require: any;
    }
}

interface EventEmitter {
    addListener(event: string, listener: Function): this;
    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    removeListener(event: string, listener: Function): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
    listenerCount(type: string): number;
    prependListener(event: string, listener: Function): this;
    prependOnceListener(event: string, listener: Function): this;
    eventNames(): string[];
}

export interface IpcRenderer extends EventEmitter {
    on(channel: string, listener: Function): this;
    once(channel: string, listener: Function): this;
    removeAllListeners(channel: string): this;
    removeListener(channel: string, listener: Function): this;
    send(channel: string, ...args: any[]): void;
    sendSync(channel: string, ...args: any[]): any;
    sendTo(webContentsId: number, channel: string, ...args: any[]): void;
    sendToHost(channel: string, ...args: any[]): void;
}
