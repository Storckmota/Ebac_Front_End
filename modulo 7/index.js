class Parquimetro {
    constructor(tempo, saldo){
        this.tempo = tempo;
        this.saldo = saldo;
        this.valor = 0; 
    }

    calcularValor() {
        if (this.tempo < 30){
            return "O tempo mínimo é de 30 minutos"
        } else if (this.tempo >= 30 && this.tempo < 60){
            this.valor = 1.00
        } else if (this.tempo >= 60 && this.tempo < 120){
            this.valor = 1.75
        } else if (this.tempo === 120){
            this.valor = 3.00
        } else if (this.tempo > 120){
           return "O tempo máximo permitido é 120 minutos.";
        }
        return `O valor a ser pago é R$ ${this.valor.toFixed(2)}`;
    }

    verificarSaldo() {
        if (this.saldo < 1){
            return "Valor insuficiente.";
        }
        return null;
    }


    calcularTroco(){
        if (this.saldo >= this.valor){
            let troco = this.saldo - this.valor;
            return `Seu troco é R$ ${troco.toFixed(2)}`;
        } else {
            return "Saldo insuficiente para cobrir o valor.";
        }
    }

}


 //evento do botão
    document.getElementById("btnEnviar").addEventListener("click", () => {
      let tempo = parseFloat(document.getElementById("tempoDePermanencia").value);
      let saldo = parseFloat(document.getElementById("saldo").value);
        
      let parquimetro = new Parquimetro(tempo, saldo); 

      //exibir valor a ser pago
      document.getElementById("debito").textContent = parquimetro.calcularValor();

      //verificar saldo 
      let msgSaldo = parquimetro.verificarSaldo();
      if (msgSaldo){
        document.getElementById("troco").textContent = msgSaldo; 
        return
      }

      //exibir troco
      document.getElementById("troco").textContent = parquimetro.calcularTroco();
    })