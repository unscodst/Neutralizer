//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

//This extension contains material for mature audiences. If you have a problem with wording throughout this extension then this extension may be what you need.

walk(document.body);

function walk(node)  
{
    // I stole this function from here: 
    //http://readwrite.com/2014/08/29/chrome-extension-build-your-own-caaaaarbs
    //They got it from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch ( node.nodeType )  
    {
        case 1: 
        case 9:  
        case 11: 
            child = node.firstChild;
            while ( child ) 
            {
                next = child.nextSibling; 
                walk(child);
                child = next;
            }
            break;

        case 3: 
            handleText(node);
            break;
    }
}

/* 
 My thoughts on what words should be associated.
 She || He = They
 Gals || Guys = All
 Her || His = Their
 Women || Men = People
 Ladies || Gentalmen = Everyone || All
 Girl || Boy || Man || Woman = Person

*/

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    //Normal one word neutralizer
    v = v.replace(/\b(she|he)\b/g, "they");
    v = v.replace(/\b(She|He)\b/g, "They");
    v = v.replace(/\b(gals|guys)\b/g, "all");
    v = v.replace(/\b(Gals|Guys)\b/g, "All");
    v = v.replace(/\b(her|his)\b/g, "their");
    v = v.replace(/\b(Her|His)\b/g, "Their");
    v = v.replace(/\b(women|men)\b/g, "people");
    v = v.replace(/\b(Women|Men)\b/g, "People");
    v = v.replace(/\b(daughter|son)\b/g, "child");
    v = v.replace(/\b(Daughter|Son)\b/g, "child");
    v = v.replace(/\b(girls|boys)\b/g, "children");
    v = v.replace(/\b(Girls|Boys)\b/g, "Children");
    v = v.replace(/\b(girl|woman|boy|man)\b/g, "person");
    v = v.replace(/\b(Girl|Woman|Boy|Man)\b/g, "person");

    //Phrase or sentence neutralizer
    v = v.replace(/she says |he says /g, " they said "); //fatlip, look up the lyrics with this extension installed.
    v = v.replace(/She says |He says /g, " they said "); //fatlip


    //racial identity neutralizer. These are combinations of words that are read online daily and should not be read out of context of the extension.
    v = v.replace(/black person/g, " person ");
    v = v.replace(/white person/g, " person "); //Slim Shady, look up the lyrics with this extension installed.
    v = v.replace(/asian person/g, " person ");
    v = v.replace(/french person/g, " person ");
    v = v.replace(/canadian person/g, " person ");
    v = v.replace(/canadian person/g, " person ");
    v = v.replace(/Black woman |Black man /g, " Person ");
    v = v.replace(/black woman |black man /g, " person ");

    textNode.nodeValue = v;
}