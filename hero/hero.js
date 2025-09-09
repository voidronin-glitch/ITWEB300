class SuperHuman { 
	constructor(name, powerLevel) {
		this.name = name;
		this.powerLevel = powerLevel;
	}
}

// ✅ Define SuperHero class
class SuperHero extends SuperHuman {
	constructor(name, alias, powerLevel) {
		super(name, powerLevel);
		this.alias = alias;
	}

	battle(villain) {
		return this.powerLevel >= villain.powerLevel;
	}
}

// ✅ Define SuperVillain class
class SuperVillain extends SuperHuman {
	constructor(name, alias, powerLevel) {
		super(name, powerLevel);
		this.alias = alias;
	}

	getEvilChuckle() {
		return "Ha ha ha!";
	}
}

// ✅ Create hero and villain objects
const heroes = {
	"Super Bacon": new SuperHero("Jack Oinker", "Super Bacon", 2),
	"Flat-Man": new SuperHero("Peter Pranker", "Flat-Man", 5),
	"Mighty Woman": new SuperHero("Diana Dense", "Mighty Woman", 8),
	"Captain Marvelous": new SuperHero("Carol Hangers", "Captain Marvelous", 9)
};

const villains = {
	"The Jokester": new SuperVillain("Jack Nastier", "The Jokester", 3),
	"Magnet Man": new SuperVillain("Max Eisenhardt", "Magnet Man", 6),
	"Lex Loner": new SuperVillain("Lex Loner", "Lex Loner", 2),
	"Thankos": new SuperVillain("Thankos", "Thankos", 9)
};

// ✅ Register dropdown event handlers
registerHandlers();

function registerHandlers() {
	document.querySelector("#heroSelect").addEventListener("change", selectionChanged);
	document.querySelector("#villainSelect").addEventListener("change", selectionChanged);
	selectionChanged(); // Trigger on page load
}

// ✅ Handle selection and determine battle result
function selectionChanged() {
	const selectedHeroValue = document.querySelector("#heroSelect").value;
	const selectedVillainValue = document.querySelector("#villainSelect").value;

	const selectedHero = heroes[selectedHeroValue];
	const selectedVillain = villains[selectedVillainValue];

	if (!selectedHero || !selectedVillain) {
		document.querySelector("#winner").textContent = "Select both a hero and a villain!";
		return;
	}

	// ✅ Call battle and display result
	const heroWins = selectedHero.battle(selectedVillain);
	const winnerAlias = heroWins ? selectedHero.alias : selectedVillain.alias;

	document.querySelector("#winner").textContent = `Winner: ${winnerAlias}`;
}

