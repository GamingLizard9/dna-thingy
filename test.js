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
function translate(rna) {
    var output = ""
    if(rna.length % 3 != 0) {
        return("Error: Wrong length")
    }
    for(let i = 0; i < rna.length; i += 3) {
        //There is a better way to do this and it will be replaced someday
        switch(rna[i]) {
            case "a":
                switch(rna[i+1]) {
                    case "u":
                        switch(rna[i+2]) {
                            case "g":
                                output += "Met";
                                break;
                            default:
                                output += "Ile";
                                break;
                        }
                        break;
                    case "c":
                        output += "Thr";
                        break;
                    case "a":
                        switch(rna[i+2]) {
                            case "c":
                            case "u":
                                output += "Asn";
                                break;
                            case "a":
                            case "g":
                                output += "Lys";
                                break;
                        }
                        break;
                }
        }
        if(i != rna.length - 3) {
            output += "|";
        }
    }
    return(output);
}
console.log(translate(transcribe("taatactagtattcatcctcgtgttgatgctggtgtttattcttgttt")))
