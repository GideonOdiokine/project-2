window.addEventListener("DomContentLoaded",(function(){

    // select progress color
    let progress = document.querySelector('.progress-color');
    let countColor = 0;

    let namecheckedbox= document.querySelector('#name-check');
    let nameProgress=  document.querySelector('#name');
    let count = 0;

    nameProgress.addEventListener('change',()=>{
        let name = document.querySelector('#name').value;
        if(name.length > 0){
            countColor+=20;
            progress.classList.add('p' +countColor)
            namecheckedbox.checked = true;     
        }else if(name.length < 1){
            progress.classList.remove('p' +countColor)
            countColor-=20;
            namecheckedbox.checked = false;     
        }
    })

    let emailChecked= document.querySelector('#email-check')
    let emailProgress= document.querySelector('#email')

    emailProgress.addEventListener('change', ()=>{
        if(emailProgress.value.length > 0){
            countColor+=20;
            progress.classList.add('p' + countColor);
            emailChecked.checked = true;
        }else if(emailProgress.value.length < 1){
            progress.classList.remove('p' + countColor);
            countColor-=20;
            emailChecked.checked = false;
        }
    })

    let mobileChecked= document.querySelector('#phone-check');
    let mobileProgress= document.querySelector('#phone');

    mobileProgress.addEventListener("change", ()=>{
        if(mobileProgress.value.length > 0){
            countColor+=20;
            progress.classList.add('p' +countColor);
            mobileChecked.checked=true;
        }else if(mobileProgress.value.length < 1){
            progress.classList.remove('p' + countColor);
            countColor-=20;
            mobileChecked.checked=false;
        }
    })

    let webChecked=document.querySelector('#web-check');
    let webProgress = document.querySelector('#website');

    webProgress.addEventListener('change', ()=>{
        if(webProgress.value.length > 0){
            countColor+=20;
            progress.classList.add("p" +countColor);
            webChecked.checked=true;
        }else if(webProgress.value.length < 1){
            progress.classList.toggle("p" +countColor);
            progress.classList.remove('p' + countColor);
            countColor-=20;
            webChecked.checked=false;
        }
    })

    let noteChecked=document.querySelector('#note-check');
    let noteProgress = document.querySelector('#notes');

    noteProgress.addEventListener('change', ()=>{
        if(noteProgress.value.length > 0){
            countColor+=20;
            progress.classList.add('p' + countColor);
            noteChecked.checked=true;
        }else if(noteProgress.value.length < 1){
            progress.classList.remove('p' + countColor);
            countColor-=20;
            noteChecked.checked=false;
        }
    })


}()))