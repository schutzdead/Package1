import './style.css'

const animationTabBar = (() => {
var currentMenu = 0;

const visible = (p1:string, p2:string, menu:any) => {
    if(menu===null) return
    menu.style.visibility = p1;
    menu.style.opacity = p2;
}

for(let i = 1; i<10;i++){
    let eachTag = document.querySelector(`.tag${i}`) as HTMLElement;   
    let menu = document.querySelector(`.underHeader${i}`) as HTMLElement;    
    let header = document.querySelector(`header`) as HTMLElement;
    
    header.addEventListener('mouseenter', () => {
        header.style.backgroundColor = "white"
    })
    header.addEventListener('mouseleave', () => {
        header.style.backgroundColor = "rgb(255, 255, 255, 0.7)"   
    })

    eachTag.addEventListener('mouseenter', () => {
        if(menu !== null){
            visible("visible", "1", menu) 
            currentMenu = i
            return
        }
        visible("hidden", "0", document.querySelector(`.underHeader${currentMenu}`))
    })


    if(menu!==null) {
        menu.addEventListener('mouseenter', () => {
            header.style.backgroundColor = "white"
        })
        menu.addEventListener('mouseleave', () => {
            visible("hidden", "0", menu)
            header.style.backgroundColor = "rgb(255, 255, 255, 0.7)" ;
        })
    }
}
})();