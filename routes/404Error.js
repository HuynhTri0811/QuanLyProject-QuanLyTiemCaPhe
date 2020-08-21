/**
 * @param {*} ERROR 
 * @param {*} RESPONSE 
 * @param {*} ERROR_NUMBER 
 */
/**
 * 
 */


module.exports.ERROR_RESPONSE = function(ERROR,RESPONSE,ERROR_NUMBER){
    if(ERROR_NUMBER === undefined){
        ERROR_NUMBER = 404;
    }
    console.log(ERROR);
    RESPONSE.json(ERROR_NUMBER);
}

