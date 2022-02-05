export interface Case {
    id: number;
    category: {
        id: number;
        name: string;
    }
    latitude: string;
    comments: string;
}