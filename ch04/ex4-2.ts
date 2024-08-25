// 컨트롤러에 스코프 적용하기

export declare function Controller(options: ControllerOptions): ClassDecorator;

export interface ControllerOptions extends ScopeOptions, VersionOptions {
  path?: string | string[];
  host?: string | RegExp | Array<string | RegExp>;
}

export interface ScopeOptions {
  scope?: ScopeOptions;
}



@Controller({
  path: 'cats',
  scope: Scope.REQUEST,
})
export class CatsController {}