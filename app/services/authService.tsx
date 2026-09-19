import { isAxiosError } from "axios";
import api from "./api";

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}

export const authService = {
    login: async (email: string, password: string): Promise<AuthResponse> => {
        try {
            const response = await api.post<AuthResponse>('/login', {
                email,
                password,
            });

            return response.data;
        } catch (error: any) {
            if (isAxiosError(error)) {
                console.log('STATUS:', error.response?.status);
                console.log('DATA:', error.response?.data);

                const message =
                    error.response?.data?.message ||
                    'Error al iniciar sesión';

                throw new Error(message);
            }

            throw error;
        }
    },
}