class User {
    private _courseCount = 1;

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum > 0) {
            throw new Error("Invalid course count")
        }
        this._courseCount = courseNum
    }
}