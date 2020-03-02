let inputs = Array.from(document.querySelectorAll('input'));
const blur = document.querySelector('#blur');

function handleUpdate(){
    const unit = this.dataset.unit || "";

    if(this.name == 'color'){
        console.log(this.value);
    }

    if(this.name == 'distance'){
        document.documentElement.style.setProperty('--shadowDistance', `${this.value}${unit}`);
        document.documentElement.style.setProperty('--highlightDistance', `-${this.value}${unit}`);
        console.log(this.value);

        document.documentElement.style.setProperty('--blur', `${this.value*2}${unit}`);
        blur.value = this.value * 2;
    } else {
        //use documentElement to select the 'root' element, for CSS use
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${unit}`);
        console.log(this.value);
    }
}

inputs.forEach( input => input.addEventListener('change', handleUpdate));
inputs.forEach( input => input.addEventListener('mousemove', handleUpdate));

function distance(){
    //distance: 5 - 50;
    //blur: 10 - 100
    //distance * 2 = blur

    //tie distance value with blur value
    //distance * 2 = blur


}
