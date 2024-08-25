// 6.3 Nest에서 제공하는 Config 패키지

static forRoot(options?: ConfigModuleOptions): DynamicModule;



export interface ConfigModuleOptions {
    cache?: boolean;
    isGlobal?: boolean;
    ignoreEnvFile?: boolean;
    ignoreEnvVars?: boolean;
    envFilePath?: string | string[];
    encoding?: string;
    validate?: (config: Record<string, any>) => Record<string, any>;
    validationSchema?: any;
    validationOptions?: Record<string, any>;
    load?: Array<ConfigFactory>;
    expandVariables?: boolean;
}