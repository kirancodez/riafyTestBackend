export default class HttpQueue {

    constructor (queryFunction) {
      this.requesting = false
      this.stack = []
      this.queryFunction = queryFunction
    }
  
    add (options) {
      if (this.stack.length < 2) {
        return new Promise ((resolve, reject) => {
          this.stack.push({
            options,
            resolve,
            reject
          })
          this.makeQuery()
        })
      }
      return new Promise ((resolve, reject) => {
        this.stack[1] = {
          options,
          resolve,
          reject
        }
        this.makeQuery()
      })
  
    }
  
    makeQuery () {
      if (! this.stack.length || this.requesting) {
        return null
      }
  
      this.requesting = true
  
      this.queryFunction(this.stack[0].options).then(response => {
        this.stack[0].resolve(response)
        this.requesting = false
        this.stack.splice(0, 1)
        this.makeQuery()
      }).catch(error => {
        this.stack[0].reject(error)
        this.requesting = false
        this.stack.splice(0, 1)
        this.makeQuery()
      })
    }
  }