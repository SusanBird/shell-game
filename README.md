## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Wireframe drawn
HTML elements needed: buttons, .png for cups, div, p tags, h3, header
Why: button (to click to choose which cup), .png (two - image of cup down, image of cup with ball under), div (display the results in), p tags (don't we always need p tags somewhere?), header - instructions at the top
How:
Events: use clicks first cup - if correct, picture changes and wins increases, if incorrect losses increase, cup stays down, either way total guesses increases; cups reset to first cup image; repeat for all cups
Validate: console.log to make sure each eventListener is working
Dependency: which picture displayed depends on which button was clicked and whether it was the correct button

## After lunch need to:

x - resize cup with ball
? - figure out how to insert that and where
x - make cup w/o ball appear on all three - how does resetStyles() work? - figure out how to reset and make them all disappear - console.log to make sure things are flowing - debug to see what the issues are - check tallies to make sure numbers change
