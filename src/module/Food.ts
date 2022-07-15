
class Food{
    element:HTMLElement
    constructor(){
        this.element=document.getElementById('food')! // !表示不可能为空
    }

    // 获取坐标
    get x(){
        return this.element.offsetLeft
    }
    get y(){
        return this.element.offsetTop
    }

    // 修改位置
    change(){
        // 修改随机位置，20为基础单位，0～280
        let top:number=Math.round(Math.random()*14)*20
        let left:number=Math.round(Math.random()*14)*20

        this.element.style.left=left+'px'
        this.element.style.top=top+'px'
    }
    // food eaten，逻辑等同change
}

export default Food