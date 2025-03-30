import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carService;
    constructor(carService: CarsService);
    getAllCars(): {
        id: number;
        brand: string;
        model: string;
    }[];
    getCarById(id: number): {
        id: number;
        brand: string;
        model: string;
    };
    createCar(body: any): {
        body: any;
    };
    updateCar(body: any, id: number): {
        body: any;
    };
    deleteCar(id: number): {
        ok: boolean;
    };
}
