export interface Data {
    fetch(id: string): Promise<any>
    fetchAll(): Promise<any>
    create(): Promise<any>
    delete(id: string): Promise<any>
    update(): Promise<any>
}