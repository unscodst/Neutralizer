// Defines generic matches
var matches = [{
    'm': /\b(she|he)\b/ig,
    'r': 'they'
  }, {
    'm': /\b(guys|gals)\b/ig,
    'r': 'all'
  }, {
    'm': /\b(his|her)\b/ig,
    'r': 'theirs'
  }, {
    'm': /\b(men|women)\b/ig,
    'r': 'people'
  }, {
    'm': /\b(son|daughter)\b/ig,
    'r': 'child'
  }, {
    'm': /\b(boys|girls)\b/ig,
    'r': 'children'
  }, {
    'm': /\b(girl|woman|boy|man)\b/ig,
    'r': 'person'
}]

// Extension of Object to replace recursively on all child nodes
Object.prototype.replaceText = function(replaceHandler) {
    var children = this.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeType == 3) {

            if (children[i].textContent.trim() == '') {
                continue;
            }

            children[i].textContent = replaceHandler(children[i].textContent);

        } else {
            children[i].replaceText(replaceHandler);
        }
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