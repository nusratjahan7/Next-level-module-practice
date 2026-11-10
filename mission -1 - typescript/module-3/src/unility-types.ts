//* Utility Types

//* Portial

interface User {
    id: string;
    name: string;
    email: string;
}

const updateProfile = (id: string, data: User) => {
    // some backend logic
};

//* Required

interface Config {
    apiKey?: string;
    timeOut?: number;
}

const initiaze = (config: Config) => {
    // some logic
};

//* Pick

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}

const preview = {};

//* Omit

interface Employee {
    id: number;
    name: string;
    salary: number;
    nid: string;
}

const directoryEntry: Employee = {
    id: 43,
    name: "Bob",
    salary: 30000,
    nid: "3432342",
};

//* Record

type Environment = "developmnet" | "staging" | "production";

const apiUrls = {
    development: "http://localhost:3000",
    staging: "https://staging.com",
    production: "https://api.com",
};
