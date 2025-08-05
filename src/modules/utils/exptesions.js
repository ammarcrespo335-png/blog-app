export class notFound extends Error{
    constructor() {
        super("user not found",{cause:404})
    
    }
}
export class handleNotFound extends Error {
  constructor() {
    super('invalid', { cause: 404 })
  }
}
