let Operações = false;
let Operações_mais = false;
let Operações_Sub = false;
let Operações_div = false;
let Operações_mul = false;
let resultado = document.querySelector("#resultado")
console.log(`Operação ${Operações} | Mais: ${Operações_mais} | Menos: ${Operações_Sub}`);
//Funções de Teclados Numéricos
function Teclas(tecla) {
  $(`#N${tecla}`).click(function () {
    let n1 = `${tecla}`;
    let n2 = `${tecla}`;
    if (Operações == false){
      $("#input1").append(n1);
      $("#zero").hide();
    } else {
      $("#input2").append(n2);
      $("#input1").hide();
    }
  });
}
Teclas(1);Teclas(2);Teclas(3);Teclas(4);Teclas(5);Teclas(6);Teclas(7);Teclas(8);Teclas(9);Teclas(0);
/*
$("#del").click(function() {
  $("#input1").remove();
  $("#zero").show();
})
*/
$("#Nsomar").click(function() {
  let valor1 = document.getElementById("input1");
  const valor1str = valor1.innerText;
  let num1 = parseInt(valor1str, 10);
  let valor2 = document.getElementById("input2");
  const valor2str = valor2.innerText;
  let num2 = parseInt(valor2str, 10);
  if (Operações_mais === true) 
  {
      $("#input2").hide();
      let soma = (num1 + num2);
      console.log(`SOMA: ${soma}`);
      resultado.innerHTML = soma;
  }
  else if(Operações_Sub === true) 
  {
      $("#input2").hide();
      let sub = (num1 - num2);
      console.log(`SUBTRAÇÃO: ${sub}`);
      resultado.innerHTML = sub;
  } 
  else if(Operações_div === true) 
  {
      $("#input2").hide();
      let div = (num1 / num2);
      console.log(`DIVISÃO: ${div}`);
      resultado.innerHTML = div;
  }
  else if(Operações_mul === true) 
  {
      $("#input2").hide();
      let mul = (num1 * num2);
      console.log(`MULTIPLAÇÃO: ${mul}`);
      resultado.innerHTML = mul;
  }
  else {
    alert('Impossivel somar');
   }
})
//Teclas de Operações
$('#mais').click(function() {
    Operações = true;
    Operações_mais = true;
});
$('#menos').click(function() {
    Operações = true;
    Operações_Sub = true;
});
$('#dividir').click(function() {
    Operações = true;
    Operações_div = true;
});
$('#multi').click(function() {
  Operações = true;
  Operações_mul = true;
});