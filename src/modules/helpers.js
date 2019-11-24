// Literally just some place to put accessible functions for better Utility while coding. Basically if you want a function but do not want to write it into every module over and over you can write it here and import it to every module that needs it.
export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
 }
 
 export function splitTypeArray(arr){
     return arr.join(" and ");
 }