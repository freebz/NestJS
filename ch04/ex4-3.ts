// 커스텀 프로바이더

@module({
  providers: [UsersService],
})
export class AppModule {}



export interface ModuleMetadata {
    /**
     * Optional list of imported modules that export the providers which are
     * required in this module.
     */
    imports?: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
    /**
     * Optional list of controllers defined in this module which have to be
     * instantiated.
     */
    controllers?: Type<any>[];
    /**
     * Optional list of providers that will be instantiated by the Nest injector
     * and that may be shared at least across this module.
     */
    provider?: Provider[];
    /**
     * Optional list of the subset of providers that are provided by this module
     * and should be available in other modules which import this module.
     */
    exports?: Array<DynamicModule | Promise<DyanmicModule> | string | symbol | Provider | ForwardReference | Abstract<any> | Function>;
}



export declare type Provider<T = any> = Type<any> | ClassProvider<T> | ValueProvider<T> | FactoryProvider<T> | ExistingProvider<T>;

export interface ClassProvider<T = any> {
    /**
     * Injection token
     */
    provide: string | symbol | Type<any> | Abstract<any> | Function;
    /**
     * Type (class name) of provider (instance to be injected).
     */
    useClass: Type<T>;
    /**
     * Optional enum defining lifetime of the provider that is injected.
     */
    scope?: Scope;
}

export interface ValueProvider<T = any> {
    /**
     * Injection token
     */
    provide: string | symbol | Type<any> | Abstract<any> | Function;
    /**
     * Instance of a provider to be injected.
     */
    useValue: T;
}

export interface FactoryProvider<T = any> {
    /**
     * Injection token
     */
    provide: string | symbol | Type<any> | Abstract<any> | Function;
    /**
     * Factory function that returns an instance of the provider to be injected.
     */
    useFactory: (...args: any[]) => T;
    /**
     * Optional list of providers to be injected into the context of the Factory function.
     */
    inject?: Array<Type<any> | string | symbol | Abstract<any> | Function>;
    /**
     * Optional enum defining lifetime of the provider that is returned by the Factory Function.
     */
    scope?: Scope;
}

export interface ExistingProvider<T = any> {
    /**
     * Injection token
     */
    provide: string | symbol | Type<any> | Abstract<any> | Function;
    /**
     * Provider to be aliased by the Injection token.
     */
    useExisting: any;
}