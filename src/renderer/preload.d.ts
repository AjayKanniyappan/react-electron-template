declare global {
  interface Window {
    ipc: {
      send(channel: string, args: unknown);
      receive(channel: string, callBack: (...args: unknown[]) => void);
    };
  }
}

export {};
