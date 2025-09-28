class ApiResponse {
    constructor(statusCode,data,Message = "Success"){
        this.StatusCode = statusCode
        this.data = data,
        this.message = message,
        this.success = statusCode < 400

    }
}


export { ApiResponse }