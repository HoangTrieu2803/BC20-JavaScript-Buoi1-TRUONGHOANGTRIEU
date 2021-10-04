/** Bai 1
 * B1: Cho nguoi dung nhap so ngay lam
 * B2:
 * - Tao bien 1 ngay luong = 100.000
 * - Tao bien ngay lam
 * - Lap cong thuc Luong = So ngay lam * Tien luong/ ngay
 * - Xuat gia tri
 * B3: Tinh tien luong
 */


 function sumN(){
    var luongCoBan = 100000;
    var ngayLam = document.getElementById("ngayLam").value;
    var sum = Number(luongCoBan)  * Number(ngayLam);
    document.getElementById("txtSum").innerHTML = "Tong luong la:" +sum;
}
document.getElementById("btnSum").onclick = sumN;


/** Bai 2
 * B1 : Cho nguoi dung nhap 5 so thuc
 * B2:
 * - Tao bien num1, num2, num3, num4, num5 cho nguoi dung nhap gia tri
 * - Lap cong thuc tinh so trung binh:
 * . Sum =num1 + num2 + num3 + num4 + num5
 * . Sum/5
 * - Hien thi ket qua
 * B3 : Tinh trung binh 5 so thuc
 */

function sumAVG(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var sum = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)
    var average = sum/5
    document.getElementById("txtAVG").innerHTML = "ket qua la: " +average;
}
document.getElementById("btnAVG").onclick = sumAVG;
/**Bai 3
 * B1 : Cho nguoi dung nhap gia tri USD
 * B2:
 * - Tao bien USD 
 * - Tao bien VND =  23.500
 * - Lap cong thuc quy doi tien :  sum = USD * VND
 * - Hien thi ket qua
 * B3: Tinh USD sang VND
 */
function sumMoney(){
    var VND = 23500;
    var USD = document.getElementById("USD").value;
    var sum = USD * VND;
    document.getElementById("txtVND").innerHTML = "Tong so tien la: "+ new Intl.NumberFormat('vn-VN').format(sum); +" VND";
    
}
document.getElementById("btnVND").onclick = sumMoney;
/**Bai 4
 * B1: Cho nguoi dung nhap gia tri chieu dai, chieu rong
 * B2:
 * - Tao bien chieu dai d
 * - Tao bien chieu rong r
 * - Lap cong thuc Dien tich = dai * rong
 * - Chu vi = (dai + rong) *2
 * - Hien thi ket qua
 * B3: Tinh dien tich, chu vi hinh chu nhat
 */

function sumHCN(){
    var d = document.getElementById("chieuDai").value;
    var r = document.getElementById("chieuRong").value;
    var dienTich = d * r;
    var chuVi = (Number(d)+Number(r))*2
    document.getElementById("txtS").innerHTML = "Dien tich la: "+ dienTich;
    document.getElementById("txtP").innerHTML = "Chu vi la: "+chuVi;
}
document.getElementById("btnHCN").onclick = sumHCN;
/**Bai 5
 * B1: Cho nguoi dung nhap so co 2 ky so
 * B2:
 * - Tao bien so co 2 chu so n
 * - Lay hang don vi: n % 10
 * - Lay hang chuc: n /10
 * - Tong 2 ky so: Hang don vi + Hang chuc
 * - Hien thi ket qua
 * B3: Tinh tong 2 ky so
 */
function sumN2(){
    var n = document.getElementById("number").value;
    var hangDonVi = n%10;
    var hangChuc = Math.floor(n/10);
    var sum = Number(hangChuc) + Number(hangDonVi);
    document.getElementById("txtNumber").innerHTML = "Tong 2 chu so la: "+ sum;
}
document.getElementById("btnNumber").onclick = sumN2;
