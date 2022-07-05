declare class User {
    private name;
    private viewPage;
    constructor(name: string, viewPage: string[]);
    exec(): void;
}
export declare class UserFactory extends User {
    constructor(name: string, viewPage: string[]);
    create(role: string): UserFactory;
}
export {};
//# sourceMappingURL=FactoryMethodPattern.d.ts.map