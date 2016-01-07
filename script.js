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

// Builds a pattern to match the given text; accounts for variations in case
function matchCase(text, pattern) {
    var result = '';

    for (var i = 0; i < text.length; i++) {
        var c = text.charAt(i);
        var p = pattern.charCodeAt(i);

        if (p >= 65 && p < 65 + 26) {
            result += c.toUpperCase();
        } else {
            result += c.toLowerCase();
        }
    }
    return result;
}

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