var switchSpeed = 0.01;
var delayTime = 9;
var transitionTime = 3;
var totalTime = delayTime+transitionTime;
var kb_val = 14;
function $(x){
    return document.getElementById(x);
}

function _(x){
    return document.getElementsByClassName(x);
}



viewPortDims = [document.documentElement.offsetWidth, document.documentElement.offsetHeight];
bgDivs = _("img-div");



function trans_img(){
//make all but the first transparent:
for (i = 0; i < bgDivs.length; i++){
    if (i == 0){
        bgDivs[i].style.opacity = 1;
    }
    else bgDivs[i].style.opacity = 0;
    
}
}

function transitionStuff(){
for (i = 0; i < bgDivs.length; i++){
    bgDivs[i].style.transition = "width " + kb_val + "s linear, height " + kb_val + "s linear, left " + kb_val + "s linear, right " + kb_val + "s linear, opacity " + transitionTime + "s"; 

}
}
var g = 0;
var next = g+1;
var fade1 = 1;
var fade2 = 0;
var startTime;
var startTrans;
var counter = 0;
var switchTime = 2;
switchSpeed = 1/(switchTime*100);
var counter_target = delayTime*100;
var fade_tmr;
var counter2 = 0;
var img_kb = [];
//thing that generates a random direction and zoom



function randomiseKb(divs){
    for (i = 0; i < bgDivs.length; i++){
        let x = Math.random();
        img_kb[i] = [];
        if (x >= 0.5){
            bgDivs[i].style.left = 0;
            img_kb[i][0] = 0;
        }
        else{
          bgDivs[i].style.right = 0;
          img_kb[i][0] = 1;  
        }
        x = Math.random();
        if( x >= 0.5) {
            bgDivs[i].style.height = 100 + "%";
            bgDivs[i].style.width  = 100 + "%";
            img_kb[i][1] = 0;
        }
        else {
            bgDivs[i].style.height = 120 + "%";
            bgDivs[i].style.width  = 120 + "%";
            img_kb[i][1] = 1;
        }


        
    }
    console.log(img_kb);
}
function setup(){
    randomiseKb();
    trans_img();
    transitionStuff();
}

window.addEventListener("load",setup);
function kb(i){
    if(img_kb[i][0] == 0){
        bgDivs[i].style.right = 0;
        img_kb[i][0] = 1;
    }
    else{
        bgDivs[i].style.left = 0;
        img_kb[i][0] = 0;
    }

    if (img_kb[i][1] == 0){
        bgDivs[i].style.height = 120 + "%";
            bgDivs[i].style.width  = 120 + "%";
            img_kb[i][1] = 1;
    }
    else{
        bgDivs[i].style.height = 100 + "%";
            bgDivs[i].style.width  = 100 + "%";
            img_kb[i][1] = 0;
    }
}
function switchImages(){
    
        counter++;
        if (counter == delayTime*100){
                kb(next);
                counter2 = 0;
                console.log("HUH");   
            
            bgDivs[g].style.opacity = 0;
            bgDivs[next].style.opacity = 1;
            
            
            g = next;
            if (next == bgDivs.length-1) next = 0;
            else next++;
            counter = 0;

        }

}

fade_tmr = setInterval(switchImages, 10);

//now for Ken burns:
//so the transition

//bgDivs[0].style.right = 0;
//bgDivs[0].style.width = 100+"%";
//bgDivs[0].style.height = 100+"%";

