var lastEntry; // Holds the last letter input element

class Game{  
    constructor(){
        this.names = ["Richard Veryard","Sergiy Vilkomir","Paul Vitanyi","Andrew Viterbi","Jeffrey Scott Vitter","Paul Vixie","Eiiti Wada","David Wagner","David Waltz","James Wang","Steve Ward ","Manfred Warmuth","David Warren","Kevin Warwick","Jan Weglarz","Philip Wadler","Peter Wegner","Joseph Henry Wegstein","Peter Weinberger","Mark Weiser","Joseph Weizenbaum","David Wheeler","Franklin Westervelt","Steve Whittaker","Jennifer Widom","Gio Wiederhold","Norbert Wiener","Adriaan van Wijngaarden","Mary Allen Wilkes","Maurice Vincent Wilkes","Yorick Wilks","James Wilkinson","Sophie Wilson","Shmuel Winograd","Terry Winograd","Patrick Winston","Niklaus Wirth","Dennis Wisnosky","Neil Wiseman","Stephen Wolfram","Mike Woodger","Philip Woodward","Beatrice Helen Worsley","Steve Wozniak","Jie Wu","William Wulf","Mihalis Yannakakis","Andrew Chi-Chih Yao","John Yen","Nobuo Yoneda","Edward Yourdon","Moti Yung","Lotfi Zadeh","Hans Zantema","Arif Zaman","Stanley Zdonik","Hussein Zedan","Shlomo Zilberstein","Jill Zimmerman","Konrad Zuse","Wil van der Aalst","Scott Aaronson","Rediet Abebe","Hal Abelson","Serge Abiteboul","Samson Abramsky","Leonard Adleman","Manindra Agrawal","Luis von Ahn","Alfred Aho","Frances Allen","Gene Amdahl","David Anderson","Lisa Anthony","Andrew Appel","Cecilia Aragon","Bruce Arden","Sanjeev Arora","Winifred Asprey","John Vincent Atanasoff","Charles Babbage","Charles Bachman","Roland Carl Backhouse","John Backus","David Bacon","David Bader","Victor Bahl","Anthony James Barr","Jean Bartik","John Mauchly","Andrew Barto","Friedrich Bauer","Gordon Bell","Steven Bellovin","Cecilia Berdichevsky","Tim Berners-Lee","Daniel Bernstein","Peter Bernus","Abhay Bhushan","Dines Bjorner","Gerrit Blaauw","Sue Black","David Blei","Dorothy Blum","Lenore Blum","Manuel Blum","Barry Boehm","Corrado Bohm","Kurt Bollacker","Jeff Bonwick","Grady Booch","George Boole","Andrew Donald Booth","Kathleen Booth","Anita Borg","Bert Bos","Mikhail Botvinnik","Jonathan Bowen","Stephen Bourne","Harry Bouwman","Robert Boyer","Karlheinz Brandenburg","Lawrence Breed","Jack Bresenham","Sergey Brin","David Brown","Per Brinch Hansen","Sjaak Brinkkemper","Fred Brooks","Rod Brooks","Margaret Burnett","Michael Butler","Tracy Camp","Martin Campbell-Kelly","Rosemary Candlin","Bryan Cantrill","Luca Cardelli","John Carmack","Edwin Catmull","Vint Cerf","Gregory Chaitin","Robert Cailliau","Zhou Chaochen","Peter Chen","Leonardo Chiariglione","Tracy Chou","Alonzo Church","Alberto Ciaramella","Edmund Clarke","John Cocke","Edgar Codd","Jacques Cohen","Ian Coldwater","Simon Colton","Alain Colmerauer","Douglas Comer","Paul Justin Compton","Gordon Cormack","Stephen Cook","James Cooley","Danese Cooper","Fernando Corbato","Kit Cosper","Patrick Cousot","Ingemar Cox","Seymour Cray","Nello Cristianini","Jon Crowcroft","Bruce Croft","Glen Culler","Haskell Curry","Luigi Dadda","Ole-Johan Dahl","Ryan Dahl","Andries van Dam","Samir Das","Neil Daswani","Christopher Date","Jeff Dean","Erik Demaine","Tom DeMarco","Richard DeMillo","Dorothy Denning","Peter Denning","Michael Dertouzos","Alexander Dewdney","Robert Dewar","Vinod Dham","Jan Dietz","Whitfield Diffie","Edsger Dijkstra","Matthew Dillon ","Alan Dix","Jack Dongarra","Marco Dorigo","Paul Dourish","Charles Stark Draper","Susan Dumais","Adam Dunkels","Jon Michael Dunn","Peter Eades","Annie Easley","Wim Ebbinkhuijsen","John Presper Eckert","Alan Edelman","Brendan Eich","Philip Emeagwali","Allen Emerson","Douglas Engelbart","Barbara Engelhardt","David Eppstein","Andrey Ershov","Philip Don Estridge","Oren Etzioni","Christopher Riche Evans","David Evans","Shimon Even","Scott Fahlman","Edward Feigenbaum","Edward Felten","Tim Finin","Raphael Finkel","Donald Firesmith","Gary William Flake","Tommy Flowers","Robert Floyd","Sally Floyd","Lawrence Fogel","James Foley","Ken Forbus","L. R. Ford Jr.","Lance Fortnow","Martin Fowler","Robert France","Herbert Franke","Edward Fredkin","Yoav Freund","Daniel Friedman","Charlotte Froese Fischer","Ping Fu","Xiaoming Fu","Kunihiko Fukushima","D. R. Fulkerson","Richard Gabriel","Zvi Galil","Bernard Galler","Hector Garcia-Molina","Michael Garey","Hugo de Garis","Bill Gates","David Gelernter","Lisa Gelobter","Charles Geschke","Zoubin Ghahramani","Sanjay Ghemawat","Jeremy Gibbons","Juan Gilbert","Lee Giles","Seymour Ginsburg","Robert Glass","Kurt Godel","Ashok Goel","Joseph Goguen","Hardik Gohel","Mark Gold","Adele Goldberg ","Andrew Goldberg","Ian Goldberg","Oded Goldreich","Shafi Goldwasser","Gene Golub","Martin Charles Golumbic","Gaston Gonnet","Ian Goodfellow","James Gosling","Paul Graham","Robert Graham","Susan Graham","Jim Gray","Sheila Greibach","Ralph Griswold","Bill Gropp","Tom Gruber","Shelia Guberman","Ramanathan Guha","Neil Gunther","Jurg Gutknecht","Niklaus Wirth","Michael Guy","John Horton Conway","Nico Habermann","Philipp Matthaus Hahn","Eldon Hall","Wendy Hall","Joseph Halpern","Margaret Hamilton","Richard Hamming","Jiawei Han","Frank Harary","Juris Hartmanis","Johan Hastad","Les Hatton","Igor Hawryszkiewycz","He Jifeng","Eric Hehner","Martin Hellman","Gernot Heiser","James Hendler","John Hennessy","Andrew Herbert","Carl Hewitt","Kelsey Hightower","Danny Hillis","Geoffrey Hinton","Julia Hirschberg","Tin Kam Ho","C. A. R. Hoare","Louis Hodes","Betty Holberton","John Henry Holland","Herman Hollerith","Gerard Holzmann","John Hopcroft","Grace Hopper","Grace Murray Hopper","Eric Horvitz","Alston Householder","Paul Hudak","David Huffman","John Hughes","Roger Hui","Watts Humphrey","Jean Ichbiah","Roberto Ierusalimschy","Dan Ingalls","Mary Jane Irwin","Kenneth Iverson","Ivar Jacobson","Anil Jain","Ramesh Jain","Jonathan James","David Johnson","Stephen Johnson","Cliff Jones","Michael Jordan","Mathai Joseph","Aravind Joshi","Bill Joy","Daniel Jurafsky","William Kahan","Robert Kahn","Avinash Kak","Poul-Henning Kamp","David Karger","Richard Karp","Narendra Karmarkar","Marek Karpinski","Ted Kaehler","Alan Kay","Neeraj Kayal","Manolis Kellis","John George Kemeny","Ken Kennedy","Brian Kernighan","Carl Kesselman","Gregor Kiczales","Peter Kirstein","Stephen Cole Kleene","Dan Klein","Leonard Kleinrock","Donald Knuth","Andrew Koenig","Daphne Koller","Michael Kolling","Andrey Nikolaevich Kolmogorov","Janet Kolodner","David Korn","Cornelis Koster","Robert Kowalski","John Koza","John Krogstie","Joseph Kruskal","Thomas Kurtz","Richard Ladner","Monica Lam","Leslie Lamport","Butler Lampson","Peter Landin","Tom Lane","Borje Langefors","Chris Lattner","Steve Lawrence","Edward Lazowska","Joshua Lederberg","Manny Lehman","Charles Leiserson","Douglas Lenat","Yann LeCun","Rasmus Lerdorf","Max Levchin","Leonid Levin","Kevin Leyton-Brown","J.C.R. Licklider","David Liddle","Jochen Liedtke","John Lions","Charles Lindsey","Richard Lipton","Barbara Liskov","Yanhong Annie Liu","Darrell Long","Patricia Lopez","Gillian Lovegrove","Ada Lovelace","David Luckham","Eugene Luks","Nancy Lynch","Nadia Magnenat Thalmann","Tom Maibaum","Zohar Manna","James Martin","Robert Martin","John Mashey","Yuri Matiyasevich","Yukihiro Matsumoto","John Mauchly","Jean Bartik","Grace Murray Hopper","Ujjwal Maulik","Derek McAuley","John McCarthy","Andrew McCallum","Douglas McIlroy","Chris McKinstry","Marshall Kirk McKusick","Lambert Meertens","Kurt Mehlhorn","Bertrand Meyer","Silvio Micali","Robin Milner","Jack Minker","Marvin Minsky","James Mitchell","Tom Mitchell","Paul Mockapetris","Cleve Moler","Faron Moller","John Moon","Charles Moore","Edward Moore","Gordon Moore","Strother Moore","Roger Moore","Hans Moravec","Carroll Morgan","Robert Tappan Morris","Joel Moses","Rajeev Motwani","Oleg Mukhanov","Stephen Muggleton","Klaus-Robert Muller","Alan Mycroft","Mihai Nadin","Makoto Nagao","Frieder Nake","Bonnie Nardi","Peter Naur","Roger Needham","James Nell","Greg Nelson","Bernard de Neumann","Klara Dan von Neumann","John von Neumann","Allen Newell","Max Newman","Andrew Ng","Nils John Nilsson","G.M. Nijssen","Tobias Nipkow","Maurice Nivat","Phiwa Nkambule","Jerre Noe","Peter Nordin","Donald Norman","Peter Norvig","George Novacky","Kristen Nygaard","Martin Odersky","Peter O'Hearn","William Olle","Steve Omohundro","Severo Ornstein","John O'Sullivan","John Ousterhout","Mark Overmars","Larry Page","Sankar Pal","Paritosh Pandya","Christos Papadimitriou","David Park","David Parnas","DJ Patil","Yale Patt","David Patterson","Mike Paterson","Mihai Patrascu","Lawrence Paulson","Randy Pausch","Juan Pavon","Judea Pearl","David Pearson","Alan Perlis","Radia Perlman","Pier Giorgio Perotto","Rozsa Peter","Simon Peyton Jones","Kathy Pham","Roberto Pieraccini","Gordon Plotkin","Amir Pnueli","Willem van der Poel","Cicely Popplewell","Emil Post","Jon Postel","Franco Preparata","William Press","Rapelang Rabana","Grzegorz Rozenberg","Michael Rabin","Dragomir Radev","T. V. Raman","Brian Randell","Anders Ravn","Raj Reddy","David Reed","Trygve Reenskaug","John Reynolds","Joyce Reynolds","Reinder van de Riet","Bernard Richards","Martin Richards","Adam Riese","C. J. van Rijsbergen","Dennis Ritchie","Ron Rivest","Ken Robinson","Colette Rolland","John Romero","Azriel Rosenfeld","Douglas Ross","Guido van Rossum","Winston Royce","Rudy Rucker","Steven Rudich","Jeff Rulifson","James Rumbaugh","Peter Ruzicka","George Sadowsky","Umar Saif","Gerard Salton","Jean Sammet","Claude Sammut","Carl Sassenrath","Mahadev Satyanarayanan","Walter Savitch","Jonathan Schaeffer","Wilhelm Schickard","Jurgen Schmidhuber","Steve Schneider","Bruce Schneier","Fred Schneider","Sarita Schoenebeck","Glenda Schroeder","Bernhard Scholkopf","Dana Scott","Michael Scott","Robert Sedgewick","Ravi Sethi","Nigel Shadbolt","Adi Shamir","Claude Shannon","David Shaw","Cliff Shaw","Scott Shenker","Ben Shneiderman","Edward Shortliffe","Daniel Siewiorek","Joseph Sifakis","Herbert Simon","Munindar Singh","Ramesh Sitaraman","Daniel Sleator","Aaron Sloman","Arne Solvberg","Brian Cantwell Smith","Steven Spewak","Carol Spradling","Robert Sproull","Rohini Kesavan Srihari","Sargur Srihari","Maciej Stachowiak","Richard Stallman","Ronald Stamper","Richard Stearns","Guy Steele Jr.","Thomas Sterling","Alexander Stepanov","Richard Stevens","Larry Stockmeyer","Salvatore Stolfo","Michael Stonebraker","Olaf Storaasli","Christopher Strachey","Volker Strassen","Bjarne Stroustrup","Madhu Sudan","Gerald Jay Sussman","Bert Sutherland","Ivan Sutherland","Mario Szegedy","Parisa Tabriz","Roberto Tamassia","Andrew Tanenbaum","Austin Tate","Bernhard Thalheim","Eva Tardos","Gabor Tardos","Robert Tarjan","Valerie Taylor","Mario Tchou","Olivetti Elea","Jaime Teevan","Shang-Hua Teng","Larry Tesler","Avie Tevanian","Charles Thacker","Daniel Thalmann","Ken Thompson","Sebastian Thrun","Walter Tichy","Seinosuke Toda","Linus Torvalds","Leonardo Torres y Quevedo","El Ajedrecista","Godfried Toussaint","Gloria Townsend","Edwin Tozer","Joseph Traub","John Tucker","John Tukey","Alan Turing","David Turner ","Murray Turoff","Jeffrey Ullman","Umar Saif","Leslie Valiant","Vladimir Vapnik","Moshe Vardi","Dorothy Vaughan","Umesh Vazirani","Manuela Veloso","Francois Vernadat"];
        this.createBoard();
    }

    // Returns random index for name
    getNameIndex(){
        return Math.floor(Math.random() * 663)
    }

    // Creates a 
    createBoard(){
        let rawName = this.names[this.getNameIndex()];
        let rows = [];
        const headerAnswer = rawName
        const answer = this.cleanName(rawName);
        let guessNum = 0;
        let inputKeys = [];

        // Create rows of inputs
        for(var row = 0; row < 6; row++){ 
            let newRow = new Row(rawName);
            rows[row] = newRow;
            document.getElementById("squares").appendChild(newRow);
            newRow.freeze(true);
        }

        // Create onscreen keyboard
        for(let code=65;code<91;code++){
            let letter = String.fromCharCode(code);
            inputKeys.push(new InputKey(letter));
        }
        inputKeys.push(new BackspaceKey("<"))

        rows[0].freeze(false);
        rows[0].letterInputs[0].focus();
        lastEntry = rows[0].letterInputs[0];

        var btn = document.createElement("button");  
        btn.id = "submit";
        btn.innerHTML = "Submit";

        // Handle Submit logic
        btn.addEventListener('click', () => { 
            let curRow = rows[guessNum];
            let goodGuess = curRow.checkGuess(answer, inputKeys);

            // Handle game reset
            if(btn.innerText == "Play Again"){
                this.wipeBoard();
            }

            // Handle win condition
            else if(goodGuess){
                document.getElementById("header").innerHTML = "Well Done!";
                btn.innerText = "Play Again";
                inputKeys.forEach(key => {
                    key.isEnabled = false;
                });
            }

            // Handle wrong last guess
            else if(guessNum == 5){
                document.getElementById("header").innerHTML = "Hopefully your name isn't " + headerAnswer;
                document.getElementById("header").style.transform = "rotateX(360deg)";
                document.getElementById("header").style.transitionDuration = "3s";
                btn.innerText = "Play Again";
                inputKeys.forEach(key => {
                    key.isEnabled = false;
                });
            }

            // Handle wrong guess with more chances
            else{
                guessNum++;
                rows[guessNum].freeze(false);
            }   
            curRow.freeze(true);
        });
        
        // Attach all created elements to doc
        document.getElementById("submit").appendChild(btn); 
        for(const key of inputKeys){
            document.getElementById("keys").appendChild(key);
        }
        
    }

    // Sanitize scientist for bad chars
    cleanName(rawName){
        return rawName.replaceAll(" ", "").replaceAll(".", "").replaceAll("-", "").toLowerCase();
    }

    // Resets the board
    wipeBoard(){
        document.getElementById("header").innerHTML = "Name that Computer Scientist";
        document.getElementById("keys").innerHTML = "";
        document.getElementById("squares").innerHTML = "";
        document.getElementById("submit").innerHTML = "";
        this.createBoard();
    }
}

// A row of inputs the user enters a guess into
class Row extends HTMLDivElement{
    constructor(rawName){
        super();
        this.letterInputs = [];
        this.createRow(rawName);
        this.class = "customRow";
    }

    createRow(rawName){
        let letterIndex = 0;
        let squareSize = "3.5vw";
        let fontSize = "3vw";
        if(rawName.length > 18){
            squareSize = '2.5vw'
            fontSize = "2.2vw";
        }
        document.documentElement.style.setProperty('--squareDimension', squareSize);
        document.documentElement.style.setProperty('--fontSize', fontSize);

        for (var index = 0; index < rawName.length; index++){
            let currentChar = rawName.charAt(index);

            switch(currentChar){
                case ' ':
                    this.letterInputs[letterIndex - 1].style.marginRight = "3vw";
                    break;
                case '.':
                    let p = document.createElement("p");
                    p.className = "dot";
                    let dot = document.createTextNode(".");
                    p.appendChild(dot);
                    this.appendChild(p);
                    break;
                case '-':
                    let par = document.createElement("p");
                    par.className = "dash";
                    let dash = document.createTextNode("-");
                    par.appendChild(dash);
                    this.appendChild(par);
                    break;
                default:
                    let letterInput = new LetterInput(this, letterIndex);
                    this.letterInputs[letterIndex] = letterInput;
                    letterIndex++;
                    this.appendChild(letterInput);
            }
        }
    }

    // Make row uneditable
    freeze(freeze){
        if(freeze){
            this.letterInputs.forEach(input => {
                input.disabled = true;        
            })
        }
        else{
            this.letterInputs.forEach(input => {
                input.disabled = false;        
            })
            this.letterInputs[0].focus();
        }
    }

    moveCursorRight(index){
        if(index < this.letterInputs.length - 1){
            this.letterInputs[index + 1].focus();
        }
    }

    moveCursorLeft(index){
        if(index > 0){
            this.letterInputs[index - 1].focus();     
        }
    }

    moveCursorBack(index){
        if(index > 0){
            this.letterInputs[index - 1].focus();
        }
    }

    checkGuess(answer, inputKeys){
        let answerIsCorrect = true;
        let letterCorrectness = [];
        let submission = [];

        let delay = .0125;
        let loops = 0;
        this.letterInputs.forEach(input => {
            input.style.transitionDuration = "1s";
            input.style.transitionDelay = (loops*delay)+"s";
            input.style.transform = "rotateX(360deg)";
            loops++;
            letterCorrectness.push(input.checkGuess(answer)); 
            submission.push(input.value);
        })

        for(let i=0; i<letterCorrectness.length; i++){
            if(letterCorrectness[i] == false){
                let stillAvail = false;
                for(let j=0; j<answer.length; j++){
                    if(letterCorrectness[j] == false && submission[i] == answer.charAt(j)){
                        stillAvail = true;
                        inputKeys.forEach(key => {
                            if (submission[i] == key.innerHTML && key.className != "goodGuessInput"){
                                key.className = "almostGuessInput";
                            }
                        })
                    }
                }
                inputKeys.forEach(key => {
                    if ( submission[i] == key.innerHTML && key.className != "almostGuessInput" && key.className != "goodGuessInput"){
                        key.className = "badGuessInput";
                    }
                })
                answerIsCorrect = false;
                stillAvail ? this.letterInputs[i].className = "almostGuessInput" : this.letterInputs[i].className = "badGuessInput";
            }
            if(letterCorrectness[i] == true){
                this.letterInputs[i].className = "goodGuessInput";
                inputKeys.forEach(key => {
                    if (submission[i] == key.innerHTML){
                        key.className = "goodGuessInput";
                    }
                })
            }
        }
        
        return answerIsCorrect;
    }
}

// A single input that is a part of a row
class LetterInput extends HTMLInputElement{
    constructor(row, index) {
        super();
        this.maxLength = 1;
        this.onkeydown = this.evalKeyPress;
        this.index = index;
        this.row = row;
        this.className = "emptyGuess";
        this.addEventListener('blur', () => {
            lastEntry = this;
        });
    }

    checkGuess(answer){
        
        let guess = this.value;
        let actual = answer[this.index];

        if (!guess){
            return false;
        } 
        else if(guess != actual){
            return false;
        }
        else{
            return true;
        }
    }

    // Sanitizes input keyboard events
    evalKeyPress(event){
        let keyCode = event.keyCode; 
        if (65 > keyCode || keyCode > 90){
            switch(keyCode){
                // Left Arrow
                case 37:
                    this.row.moveCursorLeft(this.index);
                    break;
                // Right Arrow
                case 39:
                    this.row.moveCursorRight(this.index);
                    break;
                // Space
                case 32:
                    this.row.moveCursorRight(this.index);
                    break;
                // Backspace
                case 8:
                    if(this.value == ""){
                        this.row.moveCursorBack(this.index);
                    }
                    this.value = "";
                    break;
                // Enter
                case 13:
                    this.value = this.value;
                    break;
                // Tab
                case 9:
                    return;
                default:
                    event.preventDefault();
                    event.returnValue = false; //IE
            }
        }

        if (65 <= keyCode && keyCode <= 90){
            this.value = String.fromCharCode(keyCode).toLowerCase();
            event.preventDefault();
            event.returnValue = false; //IE
            this.row.moveCursorRight(this.index);
        }
    }
}

// A custom button for the onscreen keyboard
class InputKey extends HTMLButtonElement{
    constructor(label){
        super();
        this.innerHTML = label.toLowerCase();
        this.className = "default";
        this.id = "key";
        this.isEnabled = true;
        this.onmouseup = function() {
            if(this.isEnabled){
                lastEntry.value = this.innerHTML;
                lastEntry.row.moveCursorRight(lastEntry.index)
            }
        };
    }
}

// A custom button for the onscreen keyboard with custom erase logic
class BackspaceKey extends HTMLButtonElement{
    constructor(label){
        super();
        this.innerHTML = label;
        this.className = "default";
        this.id = "key";
        this.isEnabled = true;
        this.onmouseup = function() {
            if(this.isEnabled){
                lastEntry.value = ""            
                lastEntry.row.moveCursorBack(lastEntry.index)
                if(lastEntry.index == 0){
                    lastEntry.row.letterInputs[0].focus();
                }
            }
        };
    }
}

// Adds custom elements to document
customElements.define('letter-input', LetterInput, {extends: 'input',});
customElements.define('custom-row', Row, {extends: 'div',});
customElements.define('custom-button', InputKey, {extends: 'button',});
customElements.define('custom-backspace', BackspaceKey, {extends: 'button',});

new Game();
