# Neutralizer
Neutralizer helps create a gender and racial neutral browsing experience.

This is done by removing gender and racial specific pronouns and replacing them with more neutral pronouns. This also helps with gender and racial identity. Some articles may have the wrong gender or race because they assume by looking and not asking. With Neutralizer all articals are created neutral.

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
To create a new function match add this bit of code to the matches list. 
Replace "YOUR_WORD" in the match with the word you want to replace in the document.

YOUR_WORD is the word you want to look for.
REPLACED_WORD is the word that will replace YOUR_WORD if it is found.
<pre>
{
    'm': /\b(YOUR_WORD)\b/ig,
    'r': 'REPLACED_WORD'
},
</pre>


This is an example on how to replace multiple words with one word.
YOUR_WORD_1 is seperated with <pre>|</pre>. YOUR_WORD_2 is on the other side. This can continue a long as you need if you add <pre>|</pre> between words.
REPLACED_WORD is the word that will replace YOUR_WORD_1 and YOUR_WORD_2 if they are found. This means both YOUR_WORD_1 and YOUR_WORD_2 will be replaced with the same word.
<pre>
{
    'm': /\b(YOUR_WORD_1|YOUR_WORD_2)\b/ig,
    'r': 'REPLACED_WORD'
},
</pre>

You may also help expand the ethnicity list and even add racial slurs so we may neutralize as much as possible to provide a more pleaseant rading experience.
