export interface ApiResponse<T> {
    message: string;
    data: T | null
}
//T=> Product|Product[]