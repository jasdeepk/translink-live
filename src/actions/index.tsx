import * as constants from '../constants'

// Change Viewport
export interface IChangeViewport {
    type: constants.CHANGE_VIEWPORT;
    height:number;
    latitude:number;
    longitude:number;
    width:number;
    zoom:number;
}

export type ViewportAction = IChangeViewport;

export function changeViewport(height:number, latitude:number, longitude:number, width:number, zoom:number): IChangeViewport {
    return {
        height,
        latitude,
        longitude,
        type: constants.CHANGE_VIEWPORT,
        width,
        zoom,
    }
}

// Request Buses
export interface IRequestBuses {
    type: constants.REQUEST_BUSES;
    buses: IRequestBus[],
    frontend: IRequestFrontend
}

export type RequestBusAction = IRequestBuses;

export interface IRequestBus {
    destination:string;
    direction:string;
    latitude:number;
    longitude:number;
    pattern:string;
    recordedTime:string;
    routeMapHref:string;
    routeNo:string;
    tripId:number;
    vehicleNo:string;
}

export interface IRequestFrontend {
    didInvalidate:boolean;
    isFetching:boolean;
    lastUpdated:number;
}

export function requestBuses(buses:IRequestBus[], frontend:IRequestFrontend) : IRequestBuses {
    return {
        buses,
        frontend,
        type: constants.REQUEST_BUSES
    }
}

// Recieve Buses
export interface IReceiveBuses {
    geodata: number;
    type: constants.RECEIVE_BUSES;
    buses: JSON;
    receivedAt: number;
}

export type ReceiveBusAction = IReceiveBuses;

export function receiveBuses(geodata:number, json: any) : IReceiveBuses {
    return {
        buses: json.data.children.map((child : any) => child.data),
        geodata,
        receivedAt: Date.now(),
        type: constants.RECEIVE_BUSES
    }
}