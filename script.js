// Defines generic matches
var matches = [{
    'm': /\b(she|he)\b/ig,
    'r': 'they'
  }, {
    'm': /\b(guys|gals)\b/ig,
    'r': 'all'
  }, {
    'm': /\b(his|her)\b/ig,
    'r': 'their'
  }, {
    'm': /\b(men|women)\b/ig,
    'r': 'people'
  }, {
    'm': /\b(son|daughter|girl|boy)\b/ig,
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

// Expands the matches to ethnicities programmatically
var ethnicities = ['white', 'black', 'african', 'arabic', 'arabs', 'asian', 'canadian', 'dutch', 'french', 'greek', 'hispanic','indian', 'italian', 'latino','mexican', ]
for (var j = 0; j < ethnicities.length; j++) {
    matches.push({
        'm': new RegExp(ethnicities[j] + ' person', 'ig'),
        'r': 'person'
    });
    matches.push({
        'm': new RegExp(ethnicities[j] + ' people', 'ig'),
        'r': 'people'
    });
}

// Recursively replaces all text starting at the document body
document.body.replaceText(function(textContent) {
    var text = textContent;
    for (var i = 0; i < matches.length; i++) {
        text = text.replace(matches[i]['m'], function(match) {
            return matchCase(matches[i]['r'], match);
        });
    }
    return text;
});
