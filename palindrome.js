/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    const str = x.toString().split("")
    console.log(str)
    
    const reverse = str.reverse()
    console.log(reverse)
    
    console.log(reverse.join(""))
    
    if(reverse.join("") == x){
        return true
    } else {
        return false
    }
    
    };

    // 6 minutes 56 sec