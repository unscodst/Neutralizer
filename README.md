# Neutralizer
Neutralizer helps create a gender and racial neutral browsing experience.

Neutralizer works by walking through the DOM and replacing words that match with what is set in the handleText function.

To create a new function value add this bit of code under the predefined section that seems most appropriate. 
Replace "YOUR_WORD" in the value with the word you want to replace in the document.

YOUR_WORD is the work you want to look for.
REPLACED_WORD is the word that will replace YOUR_WORD if it is found.
<strong> v = v.replace(/\b(YOUR_WORD)\b/g, "REPLACED_WORD");</strong>


This is an example on how to replace multiple words with one word.
YOUR_WORD_1 is seperated with |. YOUR_WORD_2 is on the other side. This can continue a long as you need if you add | between words.
REPLACED_WORD is the word that will replace YOUR_WORD_1 and YOUR_WORD_2 if they are found.
<strong>v = v.replace(/\b(YOUR_WORD_1|YOUR_WORD_2)\b/g, "REPLACED_WORD");</strong>

This is an example of how to replace word combinations. These are things like phrases or sentences.
YOUR_WORD OTHER_WORDS MAKE_A_PHRASE are groups of words that would make a phrase think "I like ice cream".
NEW_PHRASE is a what will replace the previously defined phrase. 
Add a space between the quotes (" ") and NEW_PHRASE or the text will display awkwardly on the webpage.
<strong>v = v.replace(/YOUR_WORD OTHER_WORDS MAKE_A_PHRASE/g, " NEW_PHRASE ");</strong>
