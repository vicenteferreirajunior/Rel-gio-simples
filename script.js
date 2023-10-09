function carregar () {
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagens')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12) {
    img.src =`imagens/pexels-vlada-karpovich-4448846.jpg`
    document.body.style.backgroundColor  = '#e2cd9f'
    } else if (hora >= 12 && hora <18) {
     img.src =`imagens/pexels-george-desipris-858241.jpg`
     document.body.style.backgroundColor ='#b9846f'
    } else {
     img.src =`imagens/pexels-alteredsnaps-18275186.jpg`
     document.body.style.backgroundColor ='#2C3532'
    }
}