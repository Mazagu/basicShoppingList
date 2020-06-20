# Basic Shopping List

### What is it?
Basic shopping list is, as its own name asserts, a very basic shopping list app wrote in JavaScript for mobile devices. It's intended to be used in a browser or in a Cordova (or similar) build.
## What can I do with it?
You can go shopping, that's for sure. You can also modify this code for your own purposes or use it all or part of it in any project, with or without acknowledgment (it's on you, I won't be pisssed if you don't, it's not precisly rocket science). I'll be more than pleased if it helps you to learn or to build something awesome!
## What can't I do with it?
Please don't do nazi shit.
## How does it work?
To be honest I'm not completely sure. My guess is that it has something to do with electrons and that stuff. What I can tell you about is the code I wrote, it's pretty neat:
### Files
- **index.html** it's the starting point, to get the app working you just need to open it in your favourite browser.
- **js folder** it contains just what it says: javascript files. Nothing more nothing less (really, I don't use Less in this project, :drum:)
    - **main.js** it's there to initialize the ShoppingList and any other stuff you want to include.
    - **ShoppingList** here you have all the funny stuff, It's been a while since the last time I looked inside but I'm sure it's important. I will tell you more down.
- **css folder** it contains the files that make this thing pretty. Please, change these at will.
    - **styles.css** the very basic styles.
    - **themes.css** here you can easily  extend the styles adding a new class with different colors. I'll try to explain how it works below.
- **img folder** contains all the icons that I fairly picked for buttons and stuff, you know. I won't say more.
### ShoppingList
Wrote in plain JS, it's divided in three groups:
1. Configuration variables and objects:
    - **var lang** the current language, it's set by **ShoppingList.setLanguage()** and contains one of the language objects defined in the **languages** array.
    - **var currency** sames as language, it's set by **ShoppingList.setCurrency()** and contains one of the currency symbols defined in the **currencies** array.
    - **var languages** an array of languages, you can add your own translations with any language you wish (except for the black speech of mordor that won't be pronounced here).
    - **var themes** an array with all the available themes defined in the css stylesheet **themes.css**. If you add a new theme you'll need to place its class name here in order to be selected.
    - **var currencies** an array with all currency symbols. You can add your own.
    - **var config** an object with all configuration values, in other words the corresponding number of the key in each array. Starting values are 0.
2. The **ShoppingList** object itself:
It's big junk of code, It may look scary but it's pretty descriptive. I'll try to explain briefly what it does.
    - **Container arrays** all **items** in the list are placed in one of these arrays. When you add a new item it goes to **listTodo**, when you check it it goes to **listDone**, and when you're done with it it goes to **listHistory**. And that's the basic work.
    - **HTML elements** they are all created and appended to the DOM, they remain referenced by their property in the object ShoppingList, so you can do as you please with them.
    - **Set, get, change and save config values** there are a couple of methods manage configuration values. They are pretty straightforward, the values can be changed and are saved locally in localstorage in order to be loaded the next time time the application is opened.
    - **setUp method** this is called in **main.js** when the application is opened. It gets all the configuration setting and appending done by calling all the methods in order. Piece of cake.
    - **newItem** a new Item object is instantiated and inserted in the **listTodo** property array when this method is called. Maybe the trickiest part of all the app is the **getInputValue** method, that contains the logic proccess what is wrote in the input.
3. Constructors.
**Item** and **touchEvents** are two constructors to instatiate the Items and the touch events for the items.

### Input processing logic
As I revealed before, the input logic may be the trickiest part of all. When I thought about this app I had in mind a pretty straightforward way to introduce the list contents. So the intend it's to write what you need with a given pattern separated by commas:
- **quantity, name, price** ex: 1, milk bottle, 1
- **quantity, name** ex: 2, milk bottle (with no price)
- **name, price** ex: bread, 2 (will add the ammount of 1)
- **name** ex: bread (will add the ammount of 1 with no price)
### Touch events
When opened in a mobile device, or with the browser emulator (devtools), touch events can be used:
- **Tap item** (or click) the item is placed insde the next group of the list.
- **Hold item** when the touch is holded on an item it does something depending on the group it's in:
    - **listTodo** the item is opened for edition. You can change it's values.
    - **listDone** the item is sent back to the listTodo group.
- **Drag item sideways** (only in the listTodo group) if the item is dragged to the left the quantity goes down (if zero is reached it's removed), if the item is dragged to the right the quantity goes up.
### Calculations
The contents of the list Todo and listNode groups are added separately and the values are showed in the totals line. **Important** prices are set by unit and multiplied by the quantity.
### History
Once removed all items are placed in the **listHistory** and they can be accessed touching the icon in the bottom right. Once opened an item can be tapped to insert it in the **listTodo** or completly removed touching the **X**. If the item is already in the listTodo one more unit of it is added to the quantity, but if it's in the listDone it gets duplicated.
### Configuration
Tapping the bottom left icon the configuration menu is opened allowing to change language, currency and theme. Changes are applied when touching **ok**.
### Help
The center icon in the bottom displays a little help.
### Toggle visibility
Items in both groups of the list can be hidden, leaving only the totals visible. This can be useful with long list.