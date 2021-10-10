# HERE I HAVE A CODE TO STOP THE VIDEO ADS FOR A YOUTUBE VIDEO.

### At the moment the code has to be run in the browser console each time you open youtube . once you run the code, just click enter each time you see an ad

```
const body = document.body
body.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
    try{
    const button = document.querySelector('.ytp-ad-skip-button-text')
    button.click()
    }catch(e){console.log(e)}

    }
})
```
