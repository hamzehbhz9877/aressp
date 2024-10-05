

function _scrollTo(selector:string, yOffset:number = 0){
    const el:any= document.querySelector(selector);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
}

export {_scrollTo}