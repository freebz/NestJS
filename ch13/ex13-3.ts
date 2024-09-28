export interface NestInterceptor<T = any, R = any> {
    intercept(context: ExcutionContext, next: CallHandler<T>): Observable<R> | Promise<Observable<R>>;
}

export interface CallHandler<T = any> {
    handle(): Observable<T>;
}