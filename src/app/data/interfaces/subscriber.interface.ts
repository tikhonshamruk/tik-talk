export interface SubscriberInterface{
    items: User[],
    total: number,
    page: number,
    size: number,
    pages: number
}

export interface User {
    id: number;
    username: string;
    avatarUrl: string;
    subscribersAmount: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    stack: string[]; // Предполагаем, что stack - это массив строк
    city: string;
    description: string;
  }