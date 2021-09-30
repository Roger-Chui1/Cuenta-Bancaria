class cuentaBancaria {
  constructor(monto) {
    this.monto = monto;
  }
  setMonto(mon) {
    mon = parseInt(prompt("Ingrese el monto"));
    this.monto = mon;
  }
  depositar(dep) {
    this.monto = this.monto + dep;
    return "Se realizo el deposito <br><b>Saldo:</b> " + this.monto;
  }
  girar(gi) {
    if (this.monto >= gi) {
      this.monto = this.monto - gi;
      return (
        "Se realizo el giro exitosamente! <br> <b>Saldo Restante:</b> " +
        this.monto
      );
    } else {
      return "<b>No se puede realizar el giro no cuenta con monto suficiente</b>";
    }
  }
  obtenerSaldo() {
    return "<b>Saldo:</b> " + this.monto;
  }
}
let re = new cuentaBancaria();
let mont = re.setMonto();

let b1 = () => {
  let d1 = parseInt(document.getElementById("d1").value);
  document.getElementById("r1").innerHTML = re.depositar(d1);
};
let b2 = () => {
  let d2 = parseInt(document.getElementById("d2").value);
  document.getElementById("r2").innerHTML = re.girar(d2);
};
let b3 = () => {
  document.getElementById("r3").innerHTML = re.obtenerSaldo();
};
