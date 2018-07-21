# Terracoin Website Instructions

Copyright (c) 2016-2018, The Terracoin Foundation

# Translators

Please make a Pull Request, make sure you translate all the .html files in the root dir by making copies.

example: French
- Using github make a fork of https://github.com/terracoin/website/
- clone your fork from github
- copy the directory `en` to your new lang, ie: `fr`
- modify all the lines in the html below the marked line, and after the first : (colon) on each line, if you require a colon in the text then entire line must be in single quotes. (Make sure the lang is set to the 2 character code, ie: fr)
- NOTE: permalink is also the file name in slashes, ie: `/fr/index.html`
- NOTE: in index.html there is a link to exchanges, make sure to replace /exchanges/ with the version form your new language.
- Make sure you do this for all htmls
- run add the dir to your git repo, ie: `git add fr`
- Add entries in _config.yml adding the lang, in this case fr: you'll see the lines that need it.
- copy scripts/apply.en.php to scripts/apply.fr.php
- translate scripts/apply.fr.php
- Add the new script to your git repo, ie: `git add scripts/apply.fr.php`
- Commit your changes, ie: `git commit -m "Adding french translation" fr _config.yml scripts/apply.fr.php`
- Push the changes, ie: `git push`
- make a Pull Request
