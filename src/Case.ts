export interface Case {
    id: number;
    category: {
        id: number;
        name: string;
    }
    longitude: number,
    latitude: number;
    comments: string;
}