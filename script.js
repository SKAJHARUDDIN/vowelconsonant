//Vowel consonant checking

var ch = prompt("Enter any letter : ");

if (ch >= 'a' && ch <= 'z'){
    document.write("Small Letter <br/>");
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        document.write("This letter is Vowel <br/>");
    } else {
        document.write("This letter is Consonant <br/>");
    }
} else if (ch >= 'A' && ch <= 'Z'){
    document.write("Capital Letter <br/>");
    if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){
        document.write("This is letter is Vowel <br/>");
    } else {
        document.write("This is letter is Consonant <br/>");
    }
} else {
    document.write("Not a letter <br/>");
}


document.write("<br/><hr/><br/>");
document.write("Thank you very much. ");
document.write("Take a Screenshot & please send me it.🙏");