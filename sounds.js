/*const notepad = document.querySelector("#notepad");
const notepad_save = document.querySelector("#notepad_save");
const notepad_view = document.querySelector("#notepad_view");

// Add listeners for buttons
notepad_save.addEventListener("click", () => setNotepad(notepadValue.value, 365)); // Save notepad on mouse click for 1 year
notepad_view.addEventListener("click", () => notepad.value = getNotepad()); // Save notepad on mouse click for 1 year

//deleteNotepad();
setNotepad("hello", 365)

function setNotepad(notepadVal, daysToLive) // Function to set the stress notepad
{
    const date = new Date(); // Create date variable
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000); // Set the date to current date plus expiry (converted to milliseconds)
    let expires = "expires=" + date.toUTCString(); // Set the cookie to expire at the entered date
    document.cookie = `notepadValue=${notepadVal}; ${expires}; path=/`
}

function deleteNotepad()
{
    setNotepad(null, null); // Set the value of the "notepad=" cookie  and the expiry date to null
}

function getNotepad()
{
    return notepadVal.length + 1
}

setNotepad("I feel great today", 365);

console.log(document.cookie);
console.log(document.cookie);
END */
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}