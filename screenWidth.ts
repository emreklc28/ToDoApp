export const SMALL_DEVICE = 400 ;
export const isSmallDevice = (screenwidth:number): boolean =>{
    return screenwidth < SMALL_DEVICE ? true : false;

};