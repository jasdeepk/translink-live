// src/types/index.tsx

export interface IStoreState {
    viewport:IStoreViewport;
    busRequest:IStoreBusRequest;
}

export interface IStoreViewport {
    height:number;
    latitude:number;
    longitude:number;
    width:number;
    zoom:number;
}

export interface IStoreBusRequest {
    buses: IStoreBus[],
    frontend: IStoreFrontend
}

export interface IStoreBus {
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

export interface IStoreFrontend {
    didInvalidate:boolean;
    isFetching:boolean;
    lastUpdated:number;
}



export const defaultBus : IStoreBus = {
    destination: "LIONS BAY-BRUNSWICK",
    direction: "NORTH",
    latitude: 49.362067,
    longitude: -123.264383,
    pattern: "NB1EX",
    recordedTime: "12:22:35 pm",
    routeMapHref: "http://nb.translink.ca/geodata/C12.kmz",
    routeNo: "C12",
    tripId: 9306061,
    vehicleNo: "11302",
  }
    
  export const defaultFrontend: IStoreFrontend = {
    didInvalidate:false,
    isFetching:true,
    lastUpdated:0,
  }
  
  export const defaultBusRequest: IStoreBusRequest = {
    buses: [defaultBus],
    frontend: defaultFrontend,
  }
  
  export const defaultViewport : IStoreViewport = {
    height:1000,
    latitude:49.239993,
    longitude:-123.115060,
    width:1000,
    zoom:11.16
  }
  
  export const defaultState : IStoreState = {
    busRequest:defaultBusRequest,
    viewport:defaultViewport
  }