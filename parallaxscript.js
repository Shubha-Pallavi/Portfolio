 let text = document.getElementById('text');
 let leaf = document.getElementById('leaf');
 let hill5 = document.getElementById('hill5');
 let hill4 = document.getElementById('hill4');
 let hill1 = document.getElementById('hill1');
 let dear = document.getElementById('deer');

 window.addEventListener('scroll', ()=>{
    let value= window.scrollY;
    
    text.style.marginTop= value * 2.5 + 'px';
    leaf.style.marginBottom= value *2 + 'px';
    leaf.style.marginLeft= value +1.5 + 'px';
    hill5.style.marginLeft= value +1.5 + 'px';
    hill4.style.marginRight= value +1.5 + 'px';
    hill1.style.marginTop= value +2 + 'px';
    deer.style.marginLeft= value *2.5 + 'px';
    deer.style.marginTop= 200+(value +0.1) + 'px';

 });