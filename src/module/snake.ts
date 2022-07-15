class Snake{
    // 表示蛇头
    head:HTMLElement
    // 表示身体
    bodies:HTMLCollection
    // 获取蛇的容器
    element:HTMLElement
    // 方向参数,1=>前进，-1=>后退
    directionNumber:number
    constructor(){
        this.element=document.getElementById('snake')
        this.head=document.querySelector('#snake>div')!
        this.bodies=document.getElementById('snake')!.getElementsByTagName('div')
    }

    // 获取坐标
    get x(){
        return this.head.offsetLeft
    }
    get y(){
        return this.head.offsetTop
    }

    // 设置坐标
    set x(value:number){
        this.head.style.left=value+'px'
    }
    set y(value:number){
        this.head.style.top=value+'px'
    }

    // 添加身体
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }

    // 移动，接收方向参数, direction=>监听键盘的方向
    move(direction:number){
        let e = event || window.event || arguments.callee.caller.arguments[0];
        // 此处方向逻辑不对   XXXX
        if(e?.keyCode==direction){
            this.changeDirection()
        }
    }
    // 改变snake移动方向
    changeDirection(directionNumber:number=1){
        this.element.style.top=this.x+20*directionNumber+'px'
        this.element.style.left=this.y+20*directionNumber+'px'
    }
    // 撞墙判定 if((this.x<0||this.x>280)||(this.y<0||this.y>280))
    crashWall(){
        alert('failed')
    }
}

export default Snake