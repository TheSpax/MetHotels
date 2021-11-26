export class Smestaj{
    hotelName: string;
    hotelDesc: string;
    roomNumber: number;
    price: number;

    constructor(hotelName: string, hotelDesc: string, roomNumber: number, price: number){
        this.hotelName = hotelName;
        this.hotelDesc = hotelDesc;
        this.roomNumber = roomNumber;
        this.price = price;
    }
}