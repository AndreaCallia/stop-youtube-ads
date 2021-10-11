# HERE I HAVE A CODE TO SKIP THE VIDEO ADS FOR A YOUTUBE VIDEO.

### in order to run the script first you have to install an userscript extention for your browser :
## greasemonkey for mozila or tampermonkey for chrome

## once you have the extention installed, create a new userscript ,then copy an paste the following code :

```
const body = document.body
body.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
    try{
    const button = document.querySelector('.ytp-ad-skip-button-text')
    button?.click()
    }catch(e){}

    }
})
```
