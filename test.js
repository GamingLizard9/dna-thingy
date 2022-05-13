function transcribe(dna) {
    var rna = "";
    var dna = dna.toLowerCase()
    for(let i = 0; i < dna.length; i++) {
        switch(dna[i]) {
            case "a":
                rna += "u";
                break;
            case "t":
                rna += "a";
                break;
            case "c":
                rna += "g";
                break;
            case "g":
                rna += "c";
                break;
        }

    }
    return(rna);
}
console.log(transcribe("tacgtcagtatt"))