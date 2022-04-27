//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]



function findWords(){
    let dog_array = []
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            dog_array.push(dog_names[i])
        }
    }
    if (dog_array.length == 0){
        return 'No Matches'
    } else {
        return dog_array
    }

}

console.log(findWords(dog_string, dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(array1){
    for(let i = 0; i < array1.length; i++){
        if(i % 2 == 0){
            array1.splice(i,1, 'even index')
        }
    }
    return array1
}

console.log(replaceEvens(array))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
