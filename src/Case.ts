export interface Case {
    id?: string
    email: string;
    category: {
        id: number;
        name: string;
    }
    comments: string;
    time: Date;
    longitude: number;
    latitude: number;
}