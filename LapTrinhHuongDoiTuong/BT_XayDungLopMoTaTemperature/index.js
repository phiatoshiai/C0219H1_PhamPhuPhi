var Temp = function (Cdegrees) {
    this.Cdegrees = Cdegrees;
    this.changeF = function () {
        return (this.Cdegrees * 9 / 5) + 32;
    }
    this.changeKenvin = function (){
        return this.Cdegrees + 273;
    }
}
var Temperature = new Temp(25);
var changeF = Temperature.changeF();
var changeKenvin = Temperature.changeKenvin();
document.write( "Độ C sang độ F is : " + changeF  + "<br>" + "Độ C sang độ K is : " + changeKenvin)
