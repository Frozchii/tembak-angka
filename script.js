alert("tebak angka \n pilih anka 1-1000000 \n kesempatan 1.000.000 kali");
const angkaBenar = Math.floor(Math.random()*1000000)+1;

for (let nyawa = 10; nyawa >= 1; nyawa--) {
    
    const tebakanUser = prompt("masukan tebak angka");

    if (tebakanUser == angkaBenar) { //validasi input benar
        alert(`tebeakan benar \n angka yang benar ${angkaBenar}`);
        break;
    } else if ( tebakanUser > angkaBenar) { //validasi input ketinggian
        alert(`tebakan lu ketinggian \n masih punya ${nyawa - 1} kesempatan`);
    }
    else if ( tebakanUser < angkaBenar) { //validasi input kerendahan
        alert(`tebakan lu kerendahan \n masih punya ${nyawa - 1} kesempatan`);
    }
    
    if (nyawa == 1) {
        alert(`dongo gini aja gak bisa \n angka yang benar ${angkaBenar}`) 
    } else {
        alert(` ayo coba lagi \n masih punya ${nyawa - 1} kesempatan`)
    }

}
