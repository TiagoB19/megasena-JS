// Desenvolvido por Tiago Borges Nascimento

const inserirHtml = (nomeId) =>{

   const arrayJogo = []
   let id = nomeId
   let i = 0
   let table = ''

   const gerarNum = (min, max) => {
      let num = Math.random() * (max - min) + min
      num = Math.floor(num)
      return num
   }
   
   const ordenarSorteio = (arrayJogo, tam) => {
      let x;
      let j;
      for(let i = 1; i < tam; ++i){ 
         x = arrayJogo[i]
         for(j = i-1; j>= 0 && arrayJogo[j] > x; --j){
            arrayJogo[j + 1] = arrayJogo[j]
         }
         arrayJogo[j + 1] = x
      }
   }

   const sortearJogo = () => {
      let num = gerarNum(1,61)
      let repete = false
      arrayJogo.push(num)
      while(arrayJogo.length < 6){
         repete = false
         num = gerarNum(1, 61)
         for(let i = 0; i < arrayJogo.length; i++){
            if(num == arrayJogo[i]) repete = true
         }
         if(repete == false){
            arrayJogo.push(num)
         }
      }
      console.log(arrayJogo)
   }
   sortearJogo()
   ordenarSorteio(arrayJogo, arrayJogo.length)

   while(i < arrayJogo.length){
      table += `<td>${arrayJogo[i]}</td>`
      i++
 }
 
   const contaLinhasTabela = () => {
      let tabela = document.getElementById('tb');
      let linhas = tabela.getElementsByTagName('tr');
      return linhas.length
   }

   document.getElementById(id).innerHTML += `
      <tr>
         <th scope="row">Sorteio - ${contaLinhasTabela()}</th>
            ${table}
      </tr>
   `
}