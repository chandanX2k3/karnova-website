
import { NextResponse } from 'next/server';

type ApiResponse<T> = {
    success: boolean;
    data?: T;
    message?: string;
    error?: any;
};

export function successResponse<T>(data: T, message: string = 'Success', status: number = 200) {
    return NextResponse.json(
        {
            success: true,
            data,
            message,
            error: null,
        } as ApiResponse<T>,
        { status }
    );
}

export function errorResponse(message: string = 'Error', error: any = null, status: number = 500) {
    return NextResponse.json(
        {
            success: false,
            data: null,
            message,
            error,
        } as ApiResponse<null>,
        { status }
    );
}
