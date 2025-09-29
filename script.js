let gap = ()=>{
    let inp = document.querySelector(`input`)

    let speech = new SpeechSynthesisUtterance(inp.value)
    speech.lang = 'de-DE',
    speech.speed = 1,
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}