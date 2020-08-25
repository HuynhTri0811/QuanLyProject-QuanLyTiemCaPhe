/**
 * @param {*} ERROR 
 * @param {*} RESPONSE 
 * @param {*} ERROR_NUMBER 
 */
/**
 ** 400 : Can't not get all  
 ** 401 : Can't not create
 ** 402 : Can't not delete
 ** 403 : Can't not update
 ** 404 : Can't not find 
 */
module.exports.ERROR_RESPONSE = function(ERROR,RESPONSE,ERROR_NUMBER){
    if(ERROR_NUMBER === undefined){
        ERROR_NUMBER = 404;
    }
    console.log(ERROR);
    RESPONSE.json(ERROR_NUMBER);
}

/** Heelo
 **
 **
 **
 **
*/ 
