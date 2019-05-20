import { IpcRenderer } from "./electronCustomTypings";

export function getElectronIpcRenderer(): IpcRenderer {
    return window.require("electron").ipcRenderer
}
