/**
 * @param {*} ERROR : Error 
 * @param {*} RESPONSE : Res
 * @param {*} ERROR_NUMBER : error number 
 */
/**
 ** 400 : Can't get all  
 ** 401 : Can't create
 ** 402 : Can't delete
 ** 403 : Can't update
 ** 404 : Can't find 
 */
module.exports.ERROR_RESPONSE = function(ERROR,RESPONSE,ERROR_NUMBER){
    if(ERROR_NUMBER === undefined){
        ERROR_NUMBER = 404;
    }
    console.log(ERROR);
    RESPONSE.json(ERROR_NUMBER);
}


