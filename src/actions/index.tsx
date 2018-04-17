import * as constants from '../constants'

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