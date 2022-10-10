export const getOffset=( el ) => {
    let _x = 0;
    let _y = 0;
    let _z = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _z += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

const showBox=(i,j,k)=>{    
    var a = getOffset( document.getElementById(i) ).left; 
    if((a<0) && (a>-j)) {
        document.getElementById(k).classList.add("active");
    }
    else {
        document.getElementById(k).classList.remove("active")
    }
    window.addEventListener('resize', function(event) {
        document.getElementById(k).classList.remove("active");

    }, true);
}

export function renderBoxes() {
    showBox('digPos-1',350,'dialogue-1');
    showBox('digPos-2',250,'dialogue-2');
    showBox('digPos-3',450,'dialogue-3');
    showBox('digPos-4',400,'dialogue-4');
    showBox('digPos-5',350,'dialogue-5');
    showBox('digPos-3-1',550,'dialogue-3-1');
    showBox('digPos-3-2',350,'dialogue-3-2');
    showBox('digPos-3-3',450,'dialogue-3-3');
    showBox('digPos-4-1',350,'dialogue-4-1');
    showBox('digPos-4-2',350,'dialogue-4-2');
    showBox('digPos-4-3',350,'dialogue-4-3');
    showBox('digPos-5-1',350,'dialogue-5-1');
    showBox('digPos-5-2',350,'dialogue-5-2');
    showBox('digPos-5-3',350,'dialogue-5-3');
    showBox('digPos-6-1',350,'dialogue-6-1');
    showBox('digPos-6-2',300,'dialogue-6-2');
    showBox('digPos-6-3',350,'dialogue-6-3');
    showBox('digPos-8-1',350,'dialogue-8-1');
    showBox('digPos-8-2',300,'dialogue-8-2');
    showBox('digPos-8-3',350,'dialogue-8-3');
}