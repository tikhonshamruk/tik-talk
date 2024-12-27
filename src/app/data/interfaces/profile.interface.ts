export interface    ProfileInterface{
    id: number,
    username: string,
    avatarUrl: string | null | undefined, 
    subscribersAmount: number, 
    firstName: string, 
    lastName: string, 
    isActive: boolean,
    stack: string[], 
    city: string, 
    description: string
}