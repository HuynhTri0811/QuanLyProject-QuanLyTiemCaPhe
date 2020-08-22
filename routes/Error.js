/**
 * @param {*} ERROR 
 * @param {*} RESPONSE 
 * @param {*} ERROR_NUMBER 
 */
/**
 ** 400 : CAN'T NOT GET ALL  
 ** 401 : CAN'T NOT CREATE
 ** 402 : CAN'T NOT DELETE
 ** 403 : CAN'T NOT UPDATE
 ** 404 : CAN'T NOT FIND 
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
