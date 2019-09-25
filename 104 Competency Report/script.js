class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
    }

    display = function(){
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy}`;
        document.getElementById('console').innerHTML="<center>WELCOME TO THE <br>ZOMBIE APOCALPSE<br>Survival is never guaranteed<br>May the odds be ever in your favor</center>"

    }

    attack = function(opponent,item){
        let newEnergy=opponent.energy - item.attackPoints;
        opponent.energy=newEnergy;
        opponent.display()
        document.getElementById('console').innerHTML=`${this.name} is attacking ${opponent.name} with a ${item.img}`;
        if (opponent.energy <= 0){
            document.getElementById(opponent.id).innerHTML="YOU'RE DEAD!";
            document.getElementById(this.id).innerHTML="You live to fight another day!";
            document.getElementById('console').innerHTML="<center>GAME OVER! <br>Press Restart to Play Again</center>"

            
        }
        
    }

}




const left = new Character("Ken", 100, "left");
const right = new Character("Rob", 100, "right");

left.display();
right.display();

class Item{
    constructor(weaponName,attackPoints,img){
        this.weaponName=weaponName;
        this.attackPoints=attackPoints;
        this.img=img;

    }
}

const item1 = new Item('Pocket Knife',5,'<img class="item" src="img/pocket_knife.jpg">');
const item2 = new Item('Sword',10,'<img class="item" src="img/sword.jpg">');
const item3 = new Item('Mace',15,'<img class="item" src="img/mace.jpg">');
const item4 = new Item('Chainsaw',20,'<img class="item" src="img/chainsaw.jpeg">');
const item5 = new Item('Bat',25,'<img class="item" src="img/bat.jpeg">');
const item6 = new Item('Axe',25,'<img class="item" src="img/axe.jpeg">');

const items=[item1,item2,item3,item4,item5,item6];

function selectItem(){
    let selection = Math.floor(Math.random()*6);
    return items[selection];
}


const reset = function(){
    left.energy=100;
    right.energy=100;
    left.display();
    right.display();
    

}