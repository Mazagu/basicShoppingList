var lang;
var currency;
var languages = [
	{
		name: "Español",
		values: {
			inputPlaceHolder: "cantidad, nombre, precio",
			addButton: "AÑADIR",
			todoButton: "Comprar:",
			doneButton: "Comprado:",
			remaining: "Faltan",
			completed: "Completos",
			edit: "EDITAR",
			qty: "Cantidad",
			name: "Nombre",
			price: "Precio",
			configuration: "Configuración",
			history: "Historial",
			help: "Ayuda",
			language: "Idioma",
			currency: "Símbolo Moneda",
			theme: "Tema Color",
			helpContent:
				"<h2>Ayuda</h2>" 
				+ "<ul>"
				+ "<li>Escribe lo que necesitas y presiona añadir.</li>"
				+ "<li>Puedes escribir solo el nombre, la cantidad y el nombre, el nombre y el precio, o la cantidad, el nombre y el precio.</li>"
				+ "<li>Separa con comas cantidad, nombre, precio.</li>"
				+ "<li>Una vez añadido se mostrará en <b>COMPRAR</b>.</li>"
				+ "<li>Cuando hayas comprado el objeto pulsa sobre él y pasará a mostrarse en <b>COMPRADO</b>.</li>"
				+ "<li>Los totales de lo pendiente de <b>COMPRAR</b> y lo ya <b>COMPRADO</b> se van mostrando debajo de cada grupo como <b>COMPLETOS</b>.</li>"
				+ "<li>Puedes editar un objeto que se muestra como pendiente de <b>COMPRAR</b> dejando pulsado un segundo.</li>"
				+ "<li>Al editar puedes introducir la cantidad, cambiar el nombre y el precio.</li>"
				+ "<li>Para aumentar la cantidad de un objeto en <b>COMPRAR</b> pulsa y arrastra hacia la derecha, levanta el dedo al llegar a la cantidad deseada.</li>"
				+ "<li>Para disminuir la cantidad de un objeto en <b>COMPRAR</b> pulsa y arrastra hacia la izquierda, levanta el dedo al llegar a la cantidad deseada.</li>"
				+ "<li>Al llegar a 0 en cantidad se elimina el objeto de <b>COMPRAR</b>.</li>"
				+ "<li>Si pulsas un objeto <b>COMPRADO</b> se eliminará de la lista.</li>"
				+ "<li>Si mantienes pulsado un objeto <b>COMPRADO</b> volverá a mostrarse en <b>COMPRAR</b>.</li>"
				+ "<li>Los objetos añadidos se muestran en el historial (botón abajo derecha).</li>"
				+ "<li>Al pulsar un objeto del historial se añadirá a <b>COMPRAR</b>, si ya está se sumará una unidad.</li>"
				+ "<li>Puedes eliminar los objetos del historial pulsando sobre su X</li>"
				+ "<li>Al añadir varias veces un objeto se irán añadiendo unidades.</li>"
				+ "<li>Al añadir unidades de un objeto se mantiene el precio, para modificarlo manten pulsado para editar.</li>"
				+ "<li>En el menú de abajo izquierda puedes elegir Idioma, Símbolo de moneda y Tema de color.</li>"
				+ "<li>Pulsando en la parte superior puedes ocultar y volver a mostrar los objetos dentro de <b>COMPRAR</b> y <b>COMPRADO</b> (seguirás viendo los totales).</li>"
				+ "</ul>"
		}
	},

	{
		name: "English",
		values: {
			inputPlaceHolder: "quantity, name, price",
			addButton: "ADD",
			todoButton: "To Buy:",
			doneButton: "Bought:",
			remaining: "Left",
			completed: "Completed",
			edit: "EDIT",
			qty: "Quantity",
			name: "Name",
			price: "Price",
			configuration: "Configuration",
			history: "History",
			help: "Help",
			language: "Language",
			currency: "Currency Symbol",
			theme: "Color Theme",
			helpContent:
				"<h2>Help</h2>" 
				+ "<ul>"
				+ "<li>Write what you need and press add.</li>"
				+ "<li>You can write only the name, the quantity and the name, the name and the price, or the quantity, the name and the price.</li>"
				+ "<li>Separate with commas quantity, name, price.</li>"
				+ "<li>Once added it will be shown in <b>TO BUY</b>.</li>"
				+ "<li>When you have bought the object, click on it and it will appear in <b>BOUGHT</b>.</li>"
				+ "<li>The totals of the pending <b>TO BUY</b> and what has already <b>BOUGHT</b> are shown below each group as <b>COMPLETED</b>.</li>"
				+ "<li>You can edit an object that is shown as pending <b>TO BUY</b> by pressing and holding a second.</li>"
				+ "<li>When editing you can enter the amount, change the name and price.</li>"
				+ "<li>To increase the amount of an object in <b>TO BUY</b>, press and drag to the right, lift your finger when you reach the desired amount.</li>"
				+ "<li>To decrease the amount of an object in <b>TO BUY</b>, press and drag to the left, raise your finger when you reach the desired amount.</li>"
				+ "<li>When you reach 0 in quantity, the object of <b>TO BUY</b> is eliminated.</li>"
				+ "<li>Pressing a <b>BOUGHT</b> item will be removed from the list.</li>"
				+ "<li>If you press and hold a <b>BOUGHT</b> object it will be shown again in <b>TO BUY</b>.</li>"
				+ "<li>The added objects are shown in the history (bottom right button).</li>"
				+ "<li>When you press a history object, it will be added <b>TO BUY</b>, if a unit is already added.</li>"
				+ "<li>You can delete the objects in the history by clicking on their X.</li>"
				+ "<li>When adding an object several times, units will be added.</li>"
				+ "<li>When adding units of an object the price is maintained, to modify it keep pressed to edit.</li>"
				+ "<li>In the bottom left menu you can choose Language, Currency symbol and Color theme.</li>"
				+ "<li>By clicking on the top part you can hide and show the objects inside <b>TO BUY</b> and <b>BOUGHT</b> (you will continue seeing the totals).</li>"
				+ "</ul>"
		}
	}
];

var themes = ["brown","blue","grey","pink","purple","teal","yellow"];
var currencies = ["&euro;","$"];

var config = {
	currency: 0,
	language: 0,
	theme: 0
}

var ShoppingList = {
	listTodo: [],
	listDone: [],
	listHistory: [],
	container: document.getElementById("container"),
	input: document.createElement("input"),
	addButton: document.createElement("button"),
	displayTodo: document.createElement("ul"),
	displayDone: document.createElement("ul"),
	todoButton: document.createElement("div"),
	todoButtonText: document.createElement("span"),
	doneButton: document.createElement("div"),
	doneButtonText: document.createElement("span"),
	todoButtonVis: document.createElement("span"),
	doneButtonVis: document.createElement("span"),
	todoTotals: document.createElement("div"),
	doneTotals: document.createElement("div"),
	todoWrap: document.createElement("div"),
	doneWrap: document.createElement("div"),
	menu: document.createElement("div"),

	getConfigValues: function() {
		if(localStorage.config) {
			config = JSON.parse(localStorage.config);
		}
	},

	saveConfigValues: function() {
		this.localSave("config",config);
	},

	setConfigValues: function(language,currency,theme) {
		if(currency >= 0 && currency < currencies.length) {
			config.currency = currency;
			this.changeCurrency();
		}

		if(language >= 0 && language < languages.length) {
			config.language = language;
			this.changeLanguage();
		}

		if(theme >= 0 && theme < themes.length) {
			config.theme = theme;
			this.setTheme(config.theme);
		}
		this.saveConfigValues();
	},

	changeLanguage: function() {
		this.setLanguage();
		this.insertText();
		this.updateLists();
	},

	changeCurrency: function() {
		this.setCurrency();
		this.updateLists();
	},

	setUp: function() {
		this.getConfigValues();
		this.setLanguage();
		this.setCurrency();
		this.setTheme();
		this.getSavedData();
		this.setAttributes();
		this.setEventListeners();
		this.appendAll();
		this.setMenu();
		this.insertText();
		this.scrollSavers();
		this.updateLists();
	},

	setAttributes: function() {
		this.input.setAttribute("id","input-item");
		this.addButton.setAttribute("id","input-button");
		this.todoWrap.setAttribute("class","list-wrap");
		this.doneWrap.setAttribute("class","list-wrap");
		this.displayTodo.setAttribute("id","display-todo");
		this.displayDone.setAttribute("id","display-done");
		this.todoButtonVis.setAttribute("class","visibility-off");
		this.doneButtonVis.setAttribute("class","visibility-off");
		this.todoButtonText.setAttribute("class","name");
		this.doneButtonText.setAttribute("class","name");
		this.todoButton.setAttribute("id","todo-button");
		this.doneButton.setAttribute("id","done-button");
		this.todoTotals.setAttribute("id","todo-totals");
		this.doneTotals.setAttribute("id","done-totals");
	},

	setEventListeners: function() {
		this.input.addEventListener("keyup",function(e) {
			e.preventDefault();
			if(e.keyCode === 13) {
				this.newItem();
			}
		}.bind(this));
		// Empty the field onclick
		this.input.addEventListener("click",function() {
			this.value = "";
		});
		this.addButton.addEventListener("click", this.newItem.bind(this));
		this.todoButton.addEventListener("click", this.toggleTodo.bind(this));
		this.doneButton.addEventListener("click", this.toggleDone.bind(this));
	},

	appendAll: function() {
		this.todoButton.appendChild(this.todoButtonText);
		this.todoButton.appendChild(this.todoButtonVis);		
		this.doneButton.appendChild(this.doneButtonText);
		this.doneButton.appendChild(this.doneButtonVis);
		this.container.appendChild(this.input);
		this.container.appendChild(this.addButton);
		this.todoWrap.appendChild(this.todoButton);
		this.todoWrap.appendChild(this.displayTodo);
		this.todoWrap.appendChild(this.todoTotals);
		this.container.appendChild(this.todoWrap);
		this.doneWrap.appendChild(this.doneButton);
		this.doneWrap.appendChild(this.displayDone);
		this.doneWrap.appendChild(this.doneTotals);
		this.container.appendChild(this.doneWrap);
	},

	insertText: function() {
		this.input.setAttribute("placeholder",lang.inputPlaceHolder);
		this.addButton.innerHTML = lang.addButton;
		this.todoButtonText.innerHTML = lang.todoButton;
		this.doneButtonText.innerHTML = lang.doneButton;
	},

	scrollSavers: function() {
		// Prevents triggering touch events when scrolling
		var todoScrollSaverLeft = document.createElement("div");
		var todoScrollSaverRight = document.createElement("div");
		todoScrollSaverLeft.setAttribute("class","scroll-saver");
		todoScrollSaverLeft.setAttribute("side","left");
		todoScrollSaverRight.setAttribute("class","scroll-saver");
		todoScrollSaverRight.setAttribute("side","right");
		this.todoWrap.appendChild(todoScrollSaverLeft);
		this.todoWrap.appendChild(todoScrollSaverRight);

		var doneScrollSaverLeft = document.createElement("div");
		var doneScrollSaverRight = document.createElement("div");
		doneScrollSaverLeft.setAttribute("class","scroll-saver");
		doneScrollSaverLeft.setAttribute("side","left");
		doneScrollSaverRight.setAttribute("class","scroll-saver");
		doneScrollSaverRight.setAttribute("side","right");
		this.doneWrap.appendChild(doneScrollSaverLeft);
		this.doneWrap.appendChild(doneScrollSaverRight);
	},

	setMenu: function() {
		var menuItems = ["config","help","history"];
		menuItems.forEach(function(item) {
			this.addMenuItem(item);
		}.bind(this));
		this.menu.setAttribute("id","menu");
		this.container.appendChild(this.menu);
	},

	addMenuItem: function(item) {
		var menuItem = document.createElement("span");
		menuItem.setAttribute("class","menu-item");
		menuItem.setAttribute("id", item);
		this.menu.appendChild(menuItem);
		
		if(item == "config") {
			menuItem.addEventListener("click", this.editConfig.bind(this));
			return false;
		}

		if(item == "history") {
			menuItem.addEventListener("click", this.viewHistory.bind(this));
			return false;
		}

		if(item == "help") {
			menuItem.addEventListener("click", this.viewHelp.bind(this));
			return false;
		}
	},

	setLanguage: function() {
		lang = languages[config.language].values;
	},

	setCurrency: function() {
		currency = currencies[config.currency];
	},

	setTheme: function() {
		document.body.setAttribute("class",themes[config.theme]);
	},

	addItem: function(toList,name,qty,price,animation) {
		if(Array.isArray(toList)) {
			var key = this.itemInList(toList,name);
			if(key === false) {
				toList.push(new Item(name,qty,price));
			} else {
				toList[key].qty += 1;
			}
		}
		if(animation === true) {
			this.addItemAnim();
		}
	},

	itemInList: function(toList,name) {
		for(var i = 0; i < toList.length; i++) {
			if(toList[i].name === name) {
				return i;
			}
		}
		return false;
	},

	newItem: function() {
		var values = this.getInputValue(this.input.value);
		this.addItem(this.listTodo,values[1],values[0],values[2],true);
		this.updateLists();
	},

	getInputValue: function(input) {
		var output = [1,'',0];
		var value = input.split(",");
		if(!isNaN(value[0])) {
			output[0] = parseInt(value[0]);
			if(isNaN(value[1])) {
				output[1] = value[1].trim();
				if(!isNaN(value[2])) {
					output[2] = parseFloat(value[2] + "." + value[3]);
				}
			} else {
				output[2] = parseFloat(value[1]);
			}
		} else {
			output[1] = value[0].trim();
			if(!isNaN(value[1])) {
				output[2] = parseFloat(value[1] + "." + value[2]);
			}
		}

		return output;
	},

	totalItems: function(vals) {
		if(vals.length > 0) {
			var output = vals.reduce(function(a,b) {
				return {qty: a.qty + b.qty};
			});
			return output.qty;
		} else {
			return 0;
		}
	},

	totalPrice: function(vals) {
		if(vals.length > 0) {
			var output = vals.reduce(function(a,b) {
				return {price: a.price + b.price * b.qty};
			},{price:0});
			return output.price.toFixed(2);
		} else {
			return 0;
		}
	},

	getTotals: function(list,parent,description) {
		var output = "";
		output += Item.prototype.formatItem(this.totalItems(list) + " " + description,"name");
		output += Item.prototype.formatItem(this.totalPrice(list),"price");
		parent.innerHTML = output;
	},

	updateLists: function() {
		this.localSave("list",this.listTodo);
		this.localSave("completed",this.listDone);
		this.localSave("history",this.listHistory);

		this.displayTodo.innerHTML = "";
		this.displayDone.innerHTML = "";

		for(var i = this.listTodo.length-1; i >= 0; i--) {
			this.displayTodo.appendChild(this.listTodo[i].listItem(i));
		}

		this.getTotals(this.listTodo,this.todoTotals,lang.remaining);
		
		for(var i = this.listDone.length-1; i >= 0; i--) {
			this.displayDone.appendChild(this.listDone[i].completeItem(i));
		}

		this.getTotals(this.listDone,this.doneTotals,lang.completed);

	},

	localSave: function(name,data) {
		localStorage.setItem(name,JSON.stringify(data));
	},

	getSavedData: function() {
		if(localStorage.list) {
			JSON.parse(localStorage.list).forEach(function(e){
				this.listTodo.push(new Item(e.name,e.qty,e.price));
			}.bind(this));
		}

		if(localStorage.completed) {
			JSON.parse(localStorage.completed).forEach(function(e){
				this.listDone.push(new Item(e.name,e.qty,e.price));
			}.bind(this));
		}

		if(localStorage.history) {
			JSON.parse(localStorage.history).forEach(function(e){
				this.listHistory.push(new Item(e.name,1,e.price));
			}.bind(this));
		}
	},

	hideTransition: function(x) {
		var step = 10;
		x.style.height = (parseInt(x.style.height) - step) + "px";
		if((parseInt(x.style.height) - step) < 1) {
			x.style.height = 0 + "px";
			return false;
		} else {
			setTimeout(function() {	
				this.hideTransition(x)
			}.bind(this),15);
		}
	},

	showTransition: function(x) {
		var step = 10;
		x.style.height = (parseInt(x.style.height) + step) + "px";
		if((parseInt(x.style.height) + step) >= x.scrollHeight) {
			x.style.height = "auto";
			return false;
		} else {
			setTimeout(function() {	
				this.showTransition(x)
			}.bind(this),15);
		}
	},

	toggleTodo: function() {
		if(parseInt(this.displayTodo.style.height) == 0) {
			ShoppingList.showTransition(this.displayTodo);
			this.todoButtonVis.setAttribute("class","visibility-off");
		} else {
			this.displayTodo.style.height = this.displayTodo.scrollHeight + "px";
			this.displayTodo.style.overflow = "hidden";
			ShoppingList.hideTransition(this.displayTodo);
			
			this.todoButtonVis.setAttribute("class","visibility-on");
		}
	},

	toggleDone: function() {
		if(parseInt(this.displayDone.style.height) == 0) {
			ShoppingList.showTransition(this.displayDone);
			this.doneButtonVis.setAttribute("class","visibility-off");
		} else {
			this.displayDone.style.height = this.displayDone.scrollHeight + "px";
			this.displayDone.style.overflow = "hidden";
			ShoppingList.hideTransition(this.displayDone);
			
			this.doneButtonVis.setAttribute("class","visibility-on");
		}
	},

	addItemAnim: function() {
		var anim = document.createElement("div");
		anim.innerHTML = this.input.value;
		anim.setAttribute("class","item-anim");
		this.container.appendChild(anim);
		setTimeout(function() {
			this.container.removeChild(anim);
		},500);
	},

	editItem: function(id) {
		var id = id;
		var editContainer = document.createElement("div");
		editContainer.setAttribute("id","edit-container");
		var okButton = document.createElement("button");
		okButton.innerHTML = "OK";
		
		var qty = document.createElement("input");
		qty.value = this.listTodo[parseInt(id)].qty;
		var name = document.createElement("input");
		name.value = this.listTodo[parseInt(id)].name;
		var price = document.createElement("input");
		price.value = this.listTodo[parseInt(id)].price;

		var header = document.createElement("h2");
		header.innerHTML = lang.edit;
		var hqty = document.createElement("h3");
		hqty.innerHTML = lang.qty;
		var hname = document.createElement("h3");
		hname.innerHTML = lang.name;
		var hprice = document.createElement("h3");
		hprice.innerHTML = lang.price;

		editContainer.appendChild(header);
		editContainer.appendChild(hqty);
		editContainer.appendChild(qty);
		editContainer.appendChild(hname);
		editContainer.appendChild(name);
		editContainer.appendChild(hprice);
		editContainer.appendChild(price);
		editContainer.appendChild(okButton);
		this.container.appendChild(editContainer);
		okButton.addEventListener("click", function() {
			if(!isNaN(qty.value)) {
				this.listTodo[parseInt(id)].qty = parseInt(qty.value);
			}
			if(isNaN(name.value)) {
				this.listTodo[parseInt(id)].name = name.value;
			}
			if(!isNaN(price.value)) {
				this.listTodo[parseInt(id)].price = parseFloat(price.value);
			}
			this.container.removeChild(editContainer);
			this.updateLists();
		}.bind(this));
	},

	editConfig: function() {
		var editContainer = document.createElement("div");
		var header = document.createElement("h2");
		var language = document.createElement("h3");
		var selectLanguage = document.createElement("select");
		var currency = document.createElement("h3");
		var selectCurrency = document.createElement("select");
		var theme = document.createElement("h3");
		var selectTheme = document.createElement("select");
		var button = document.createElement("button");
		var close = document.createElement("div");

		header.innerHTML = lang.configuration;
		language.innerHTML = lang.language;
		currency.innerHTML = lang.currency;
		theme.innerHTML = lang.theme;
		button.innerHTML = "OK";

		languages.forEach(function(item,key) {
			var option = document.createElement("option");
			option.setAttribute("value",key);
			option.innerHTML = item.name;
			if(key == config.language) {
				option.setAttribute("selected","");
			}
			selectLanguage.appendChild(option);
		});

		currencies.forEach(function(item,key) {
			var option = document.createElement("option");
			option.setAttribute("value",key);
			option.innerHTML = item;
			if(key == config.currency) {
				option.setAttribute("selected","");
			}
			selectCurrency.appendChild(option);
		});

		themes.forEach(function(item,key) {
			var option = document.createElement("option");
			option.setAttribute("value",key);
			option.innerHTML = item;
			if(key == config.theme) {
				option.setAttribute("selected","");
			}
			selectTheme.appendChild(option);
		});

		selectLanguage.setAttribute("name","language");
		editContainer.setAttribute("id","edit-container");
		close.setAttribute("id","close-edit");

		close.addEventListener("click",function() {
			this.container.removeChild(editContainer);
		}.bind(this));

		button.addEventListener("click",function(e) {
			this.setConfigValues(selectLanguage.value,selectCurrency.value,selectTheme.value);
			this.container.removeChild(editContainer);
		}.bind(this));

		editContainer.appendChild(header);
		editContainer.appendChild(language);
		editContainer.appendChild(selectLanguage);
		editContainer.appendChild(currency);
		editContainer.appendChild(selectCurrency);
		editContainer.appendChild(theme);
		editContainer.appendChild(selectTheme);
		editContainer.appendChild(button);
		editContainer.appendChild(close);

		this.container.appendChild(editContainer);
	},

	viewHistory: function() {
		var editContainer = document.createElement("div");
		var close = document.createElement("div");
		var header = document.createElement("h2");
		var itemWrap = document.createElement("div");

		editContainer.setAttribute("id","edit-container");
		close.setAttribute("id","close-edit");
		itemWrap.setAttribute("id","item-wrap");

		close.addEventListener("click",function() {
			this.container.removeChild(editContainer);
		}.bind(this));

		header.innerHTML = lang.history;

		for(var i = this.listHistory.length-1; i >= 0; i--) {
			itemWrap.appendChild(this.listHistory[i].historyItem(i));
		}

		editContainer.appendChild(header);
		editContainer.appendChild(close);
		editContainer.appendChild(itemWrap);
		this.container.appendChild(editContainer);
	},

	updateHistory: function() {
		var itemWrap = document.getElementById("item-wrap");
		itemWrap.innerHTML = "";
		for(var i = this.listHistory.length-1; i >= 0; i--) {
			itemWrap.appendChild(this.listHistory[i].historyItem(i));
		}
	},

	viewHelp: function() {
		var editContainer = document.createElement("div");
		var close = document.createElement("div");

		editContainer.setAttribute("id","edit-container");
		close.setAttribute("id","close-edit");

		close.addEventListener("click",function() {
			this.container.removeChild(editContainer);
		}.bind(this));

		editContainer.innerHTML = languages[config.language].values.helpContent;

		editContainer.appendChild(close);
		this.container.appendChild(editContainer);
	}

}

var Item = function(name,qty,price) {
	this.name = name;
	this.qty = qty;
	this.price = price;
}

var touchEvents = function() {
	this.startx;
	this.touch = false;
	this.currentEvent = false;
}

Item.prototype.addListEvents = function(obj) {
	obj.touchEvents = new touchEvents();
	/*obj.addEventListener("click",this.moveItemToCompleted);*/
	obj.addEventListener("touchstart", function(e) {
		this.touchEvents.currentEvent = "click";
		var touchobj = e.changedTouches[0];
		this.touchEvents.startx = touchobj.pageX;
		setTimeout(function() {
			if(this.touchEvents.touch === false && this.touchEvents.currentEvent === "click") {
				e.preventDefault();
				this.touchEvents.currentEvent = "edit";
				ShoppingList.editItem(this.id);
			}
		}.bind(this),1000);
	});

	obj.addEventListener("touchmove", function(ev) {
		var e = ev;
		e.preventDefault();
		var dir;
		var that = this;

		if(this.touchEvents.touch === false && this.touchEvents.currentEvent === "click") {
			this.touchEvents.currentEvent = "change";
			this.touchEvents.touch = setInterval(function() {
				if(that.touchEvents.startx > e.touches[0].clientX) {
					dir = -1;
				} else {
					dir = 1;
				}
				ShoppingList.listTodo[parseInt(that.id)].qty += dir;
				if(ShoppingList.listTodo[parseInt(that.id)].qty < 1) {
					that.classList.add("to-del");	
				} else if(that.classList.contains("to-del")) {
					that.classList.remove("to-del");
				}
				that.querySelector(".name").innerHTML = ShoppingList.listTodo[parseInt(that.id)].qty + " " + ShoppingList.listTodo[parseInt(that.id)].name;
			},500);
		}

	});
	obj.addEventListener("touchend", function(e) {
		if(this.touchEvents.currentEvent === "click") {
			this.classList.add("item-fade");
			setTimeout(function() {
				Item.prototype.moveItemToCompleted.call(this);			
			}.bind(this),100);
			this.touchEvents.currentEvent = false;
			return false;
		}

		this.touchEvents.currentEvent = false;
		clearInterval(this.touchEvents.touch);
		this.touchEvents.touch = false;
		if(ShoppingList.listTodo[this.id].qty < 1) {
			ShoppingList.listTodo.splice(this.id,1);
		}
		ShoppingList.updateLists();
	});

	obj.addEventListener("touchcancel", function(e) {
		this.touchEvents.currentEvent = false;
		clearInterval(this.touchEvents.touch);
		this.touchEvents.touch = false;
		ShoppingList.updateLists();
	});
}

Item.prototype.addDoneEvents = function(obj) {
	obj.touchEvents = new touchEvents();
	/*obj.addEventListener("click",this.moveItemToCompleted);*/
	obj.addEventListener("touchstart", function(e) {
		this.touchEvents.currentEvent = "click";
		var touchobj = e.changedTouches[0];
		this.touchEvents.startx = touchobj.pageX;
		setTimeout(function() {
			if(this.touchEvents.touch === false && this.touchEvents.currentEvent === "click") {
				e.preventDefault();
				this.touchEvents.currentEvent = "restore";
				Item.prototype.moveItemToList.call(this);
			}
		}.bind(this),1000);
	});

		obj.addEventListener("touchend", function(e) {
		if(this.touchEvents.currentEvent === "click") {
			this.classList.add("item-fade");
			setTimeout(function() {
				Item.prototype.moveItemToHistory.call(this);			
			}.bind(this),100);
			this.touchEvents.currentEvent = false;
			return false;
		}

		this.touchEvents.currentEvent = false;
		this.touchEvents.touch = false;
		ShoppingList.updateLists();
	});

	obj.addEventListener("touchcancel", function(e) {
		this.touchEvents.currentEvent = false;
		this.touchEvents.touch = false;
		ShoppingList.updateLists();
	});
}

Item.prototype.getValue = function() {
	var output = "";
	if(this.name.length > 0 || this.qty > 0) {
		output += this.formatItem(this.qty + " " + this.name,"name");
	}

	if(this.price > 0) {
		output += this.formatItem(this.price.toFixed(2),"price");
	}
	return output;
}

Item.prototype.formatItem = function(value,style) {
	return '<span class="' + style +'">' + value + (style=='price'?currency:'') + '</span>';
}

Item.prototype.listItem = function(id) {
	var li = document.createElement("li");
	li.setAttribute("id",id);
	li.innerHTML = this.getValue();
	this.addListEvents(li);
	return li;
}

Item.prototype.completeItem = function(id) {
	var li = document.createElement("li");
	li.setAttribute("id",id);
	li.innerHTML = this.getValue();
	this.addDoneEvents(li);
	return li;
}

Item.prototype.historyItem = function(id) {
	var historyItemWrap = document.createElement("div");
	var historyItem = document.createElement("span");
	var deleteItem = document.createElement("span");
	historyItem.setAttribute("id",id);
	historyItem.setAttribute("class","item-span");
	deleteItem.setAttribute("class","delete-item");
	deleteItem.setAttribute("todel",id)
	historyItem.innerHTML = this.name;
	historyItem.addEventListener("click", function() {
		this.parentNode.setAttribute("class","flip");
		setTimeout(function() {
			this.parentNode.classList.remove("flip");
		}.bind(this),500);
	});

	deleteItem.addEventListener("click", this.removeHistoryItem);

	historyItem.addEventListener("click", function() {
		ShoppingList.addItem(ShoppingList.listTodo,this.name,1,this.price,false);
		ShoppingList.updateLists();
	}.bind(this));

	historyItemWrap.appendChild(historyItem);
	historyItemWrap.appendChild(deleteItem);
	return historyItemWrap;
}

Item.prototype.moveItemToCompleted = function() {
	var item = ShoppingList.listTodo.splice(this.id,1)
	ShoppingList.listDone.push(item[0]);
	ShoppingList.updateLists();
}

Item.prototype.moveItemToHistory = function() {
	var item = ShoppingList.listDone.splice(this.id,1);
	delete item[0].qty;
	var key = ShoppingList.itemInList(ShoppingList.listHistory,item[0].name);
	if(key === false) {
		ShoppingList.listHistory.push(item[0]);
	} else {
		ShoppingList.listHistory[key].price = item[0].price;
	}
	ShoppingList.updateLists();
}

Item.prototype.moveItemToList = function() {
	var item = ShoppingList.listDone.splice(this.id,1)
	ShoppingList.listTodo.push(item[0]);
	ShoppingList.updateLists();
}

Item.prototype.removeItem = function() {
	ShoppingList.listTodo.splice(this.id,1);
	ShoppingList.updateLists();
}

Item.prototype.removeHistoryItem = function() {
	ShoppingList.listHistory.splice(this.getAttribute("todel"),1);
	ShoppingList.updateHistory();
	ShoppingList.updateLists();
}