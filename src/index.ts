import  "./css/index.less";
import Food from "./module/Food";
import scorePanel from "./module/scorePanel";
import Snake from "./module/snake";

const food=new Food()
console.log(food.x,food.y);
food.change()
console.log(food.x,food.y);


const panel=new scorePanel(10,10)
for (let i = 0; i < 200; i++) {
    panel.addScore()
    
}
panel.addScore()

const snake=new Snake()

