export default class FormGenerate {

    // Definir constructeur
    constructor(formid) {
        
        this.form = document.getElementById(formid); 
        this.formdata = new FormData(this.form);
        this.answers = new Array();
    }

    // Recupere div parent
    getDiv(id) {
        return document.getElementById(id).parentMode;
    }
    // recupere element par ID
    getElement (id) {
        return document.getElementById(id);
    }

    // Recupere les elements des input
    getAnswers() {
        this.formdata = new FormData(this.form);
        this.formdata.forEach(
            (value, key) => {
                if(value != "") {
                    this.answers.push([key, value]);
                }
            }
        )
        return this.answers
    }

    // Affiche les value dans un alert

    affAnswers() {
        let chaine = "Récapitulatif\n\n";
        for (let ligne of this.getAnswers()) {
            chaine += `${ligne [0]} : ${ligne [1]}\n`
        }
        alert(chaine);
        
    }
}