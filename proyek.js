const submit = document.getElementById("submit");
submit.addEventListener("click", function(){
    const nama_user = document.getElementById("nama_user").value;
    const komentar = document.getElementById("komentar").value;
    const wadah = document.getElementById("wadah");
    const p = document.createElement("p");
    const element = wadah.appendChild(p);

    let form = {
        nama: nama_user,
        komentar: komentar,
        getData: function(){
            return "Nama Anda " + this.nama + " Komentar Anda " +this.komentar;
        }
    }
    element.innerHTML = form.getData();
});