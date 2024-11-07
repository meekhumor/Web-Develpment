interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrial(): string
}

// reopen interface
interface User {
    githubToken: string
}

const hitesh: User = {dbId: 22, email: "h@h.com", userId: 2211, 
    startTrial: () => "trial started", githubToken: "github"
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const admin: Admin = {dbId: 24, email: "hello@h.com", userId: 2451, 
    startTrial: () => "trial started again", githubToken: "github2", role: "admin"
}

export {}