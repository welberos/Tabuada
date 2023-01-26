function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')

  if (num.value.length == 0) {
    window.alert('Por favor digite um número')
  } else {
    let n = Number(num.value) //Número para realizar a tabuada
    let opBas = document.getElementsByName('radop')

    tab.innerHTML = ''  //limpa a tabuada

    if (opBas[0].checked) {

        for (let c = 1; c<=10; c++) {
        let item = document.createElement('option')
        item.text = `${n} + ${c} = ${n+c}`
        item.value = `tab${c}`
        tab.appendChild(item)
      } 
    } else if (opBas[1].checked){
      for (let c = 1; c<=10; c++) {
        let item = document.createElement('option')
        item.text = `${c} - ${n} = ${c-n}`
        item.value = `tab${c}`
        tab.appendChild(item)
      }
    } else if (opBas[2].checked){
      for (let c = 1; c<=10; c++) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
      }
    } else if (opBas[3].checked){
      for (let c = n; c<=n *10; c+=n) {
        let item = document.createElement('option')
        item.text = `${c} ÷ ${n} = ${c/n}`
        item.value = `tab${c}`
        tab.appendChild(item)
      }
    }
  }
}

