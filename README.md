# Neutralizer
Neutralizer helps create a gender and racial neutral browsing experience.

Neutralizer works by walking through the DOM and replacing words that match with what is set in the handleText function.


Installation
--------------------------

Download this repository and unzip it to what ever desination you desire.
<pre>
Open Chrome.
Click the three (3) horizontal bars on the upper right to open the settings menu.
Hover over 'More Tools'
Click 'Extensions'
In the newly loaded page in the upper right Click 'Developer mode'
Then click 'Load unpacked extensions...'
Navigate to the  desination where you unzipped the Neutralizer folder and select it.
Find a page brimming with gendered words and load or reload it to see the changes.
</pre>


Commit To The Project
--------------------------
To create a new function value add this bit of code under the predefined section that seems most appropriate. 
Replace "YOUR_WORD" in the value with the word you want to replace in the document.

YOUR_WORD is the word you want to look for.
REPLACED_WORD is the word that will replace YOUR_WORD if it is found.
<pre>
v = v.replace(/\b(YOUR_WORD)\b/g, "REPLACED_WORD");
</pre>


This is an example on how to replace multiple words with one word.
YOUR_WORD_1 is seperated with <pre>|</pre>. YOUR_WORD_2 is on the other side. This can continue a long as you need if you add <pre>|</pre> between words.
REPLACED_WORD is the word that will replace YOUR_WORD_1 and YOUR_WORD_2 if they are found. This means both YOUR_WORD_1 and YOUR_WORD_2 will be replaced with the same word.
<pre>
v = v.replace(/\b(YOUR_WORD_1|YOUR_WORD_2)\b/g, "REPLACED_WORD");
</pre>

This is an example of how to replace word combinations. These are things like phrases or sentences.
YOUR_WORD AND_OTHER_WORDS MAKE_A_PHRASE are groups of words that would make a phrase or sentence, think "I like ice cream".
NEW_PHRASE is a what will replace the previously defined phrase. 
Add a space between the quotes (" ") and NEW_PHRASE or the text will display awkwardly on the webpage.
<pre>
v = v.replace(/YOUR_WORD AND_OTHER_WORDS MAKE_A_PHRASE/g, " NEW_PHRASE ");
</pre>
