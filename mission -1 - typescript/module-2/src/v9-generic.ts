const wrapInArray = <T>(value: T) => {
    return [value];
};

const stringArr = wrapInArray<string>("abc");
const numArr = wrapInArray<number>(123);

stringArr.map((item) => item.toUpperCase())

console.log(stringArr);
console.log(numArr);

interface User {
        name: string;
        role: string;
}

interface Blog {
        title: string;
        description: string;
        date: string;
}

interface ApiResponse <T>{
    data : T,
    success: boolean;
    statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes : UserResponse = {
    statusCode: 200, 
    success: true,
    data: {
        name: "sdf",
        role: "effd234"
    }
}