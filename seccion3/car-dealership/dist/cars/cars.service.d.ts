export declare class CarsService {
    private cars;
    findAll(): {
        id: number;
        brand: string;
        model: string;
    }[];
    findOneById(id: number): {
        id: number;
        brand: string;
        model: string;
    };
}
