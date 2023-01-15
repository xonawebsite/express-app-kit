/**
 * Basic error reporting middleware
 * @function errorMiddleware
 * @param {string} message  custom message to show on error
 * @return {RequestHandler} middleware function
 **/
export function errorMiddleware(message?: string) {
  return (err: any, req: any, res: any, next: any) => {
    res.status(500).send(message ? message : 'Something broke!');
  }
}