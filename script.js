// ================= ASCII ART ================= 

const ART = `
⠀⠀⠀⠀⠀⠀⢠⣖⣿⢐⡆⠀⠀⠀⠀⠀⠀⠀⡀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⢻⡾⡿⡳⡹⣀⢀⠀⢀⠤⢆⣶⡫⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣯⣻⡫⡯⣳⢝⡮⣫⢯⡳⣻⢸⣿⣭⢽⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⢯⡺⣭⢙⢮⡳⣝⢮⡳⠝⢮⢏⡯⣚⣽⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣿⣿⣿⣿⣇⣀⣼⡕⠕⢕⣇⣏⠉⠀⡯⣺⢝⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⣻⣿⣿⣿⣿⡻⠷⡲⢾⢿⣿⣷⣶⣿⣿⣷⣷⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡿⡋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⠁⠀⣠⣴⣾⣟⣥⣤⣤⣄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡐⣯⣿⣽⡯⣗⢖⣆⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⡟⠉⠀
⠀⠀⠀⠀⠀⠀⠀⣔⢽⡩⣿⡏⡾⣕⢯⢮⣣⠀⠀⢐⢧⢿⣿⣿⣿⣿⣻⠀⠀⠀
⠀⠀⠀⢀⠀⡀⠀⣗⢽⡪⠓⡸⣝⢮⠇⣕⣗⠀⠀⠱⡹⡽⣻⡻⡮⣟⠯⠀⠀⠀
⠀⠀⠨⢒⠂⡂⠨⡺⠕⠯⢐⠯⡺⣝⢑⢕⠠⢰⠨⢄⠨⡹⡚⡮⡳⡱⠁⠀⠀⠀
⠀⠀⠀⡑⢵⠀⡂⠠⠁⠂⠀⢂⠂⢂⣖⢐⠐⡠⡲⠠⢐⢅⠇⡎⠢⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠈⠀⠐⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

const LOVE_TEXT = "TI VOGLIO BENE";

// ================= STORIA ================= 

const STORY = { /* IDENTICA AL PYTHON */
    start: { 
        text: `Hey Volpe 🦊,\n mi sei mancata! Spero che stai passando una giornata stupenda.\n\n 
        Ho una domandina da farti, anche se immagino già la risposta visto che stai leggendo queste parole.\n 
        Come ti senti oggi?`, 
        choices: { "Sto bene": "good", "Non sto bene": "bad" } 
    }, 
    good: { 
        text: `Se stai bene allora perché sei qui 😑?\n 
        Mi hai fatto preoccupare per nulla uffa, lo sai che sono un ragazzo emotivo 🥲\n\n. 
        Aspetta, forse ho capito. Ti mancavo e quindi volevi sentire queste parole vero?\n 
        Eh eh eh, mascalzona. Se ti manco cosi tanto potresti chiamare la mia versione reale e non questa digitale, però ti accontento lo stesso, cosi so che anche se non ci sono, stai sorridendo :D.`, 
        next: "middle" 
    }, 
    bad: { 
        text: `Mi dispiace sentirtelo dire, vorrei poterti abbracciare per farti sentire meglio, ma io sono solo una versione digitale di Nick.\n\n 
        Ora svuota la mente da tutto ciò che ti turba, che ti tormenta, e ascolta le mie parole. Fatti coccolare come tu meriti...e come vorrei fare ogni giorno.`, 
        next: "middle" 
    }, 
    middle: { 
        text: `Ci sono giornate dure, pesanti, in cui ci sentiamo fuori posto, sbagliate, oppure in cui abbiamo paura del nostro futuro. 
        Però è una realtà da cui non possiamo scappare, siamo umani, con dei sogni e dei sentimenti.\n 
        Sappi che anche nelle giornate dove tu pensi che non hai valore o che non hai fatto abbastanza, ti stai mentendo da sola. 
        Ogni giorno che tu vivi, fai sempre un passo in avanti verso i tuoi sogni, i tuoi obiettivi, e devi andarne fiera di questo, perché io lo sono.\n\n
        Io vedo i tuoi sforzi e i tuoi obiettivi, e sappi che io sono sicuro al 101% che gli raggiungerai. Te puoi raggiungere tutto ciò che vorrai.\n\n 
        Non dimenticarti mai il tuo valore, perché vali molto di più di quanto tu non veda. Io lo so, ed per questo te lo sto dicendo. Non dico mai ciò che non sento veramente`, 
        choices: { "A volte lo dimentico": "support", "Cerco di ricordarmelo": "strength" } 
    }, 
    support: { 
        text: `Lo so che te lo dimentichi a volte, è normalissimo. Si accumula tanto e non ci si ferma mai ad pensare a noi stessi.\n\n 
        Per questo ci sono io, o almeno, in versione digitale, ad ricordartelo, e lo farò ogni volta che servirà.\n 
        Non mi stancherò mai di ripeterti quanto valore hai e mai mi sentirò infastidito, perché il sorriso che fai ogni volta, vale più di qualsiasi altra cosa.\n\n 
        Ed sai perché vale cosi tanto? Perché nessuno ha sorriso più bello del tuo, insieme a quello sguardo da professoressa quando porti gli occhiali :)`, 
    }, 
    strength: { 
        text: `Bravissima! Cosi ti voglio :D.\n\n 
        Devi ricordarti sempre queste parole, perché ti meriti di sentirle. Ed so anche che sarà più facile ricordarsele, essendo che te lo detto io versione digitale 😉. 
        So che il tempo con me non ti basta mai eh eh eh. Sei più forte di quanto tu credi, io lo so. 
        Fai scelte che nessun altro farebbe e affronti a testa alta ciò che altri si arrenderebbero subito o non affronterebbero neanche. 
        Sei forte quanto una valchiria e furba come una volpe.\n Sono sicuro che in caso di guai, posso nascondermi dietro di te cosi mi proteggerai 😝.`, 
    } 
}; 

const SECRET_STORY = { 
    start: { 
        text: `Heyyy, sono sempre io…forse un po' più timido, ma sempre io ahah.\n\n 
        Inizialmente questo pensiero era per un altro scopo, ma vedendo come si evolveva la nostra situazione e il giorno in cui ti daro questo pensiero, ho pensato di aggiungere questo "Finale Segreto".\n\n 
        Prendilo in un modo "scherzoso", qualsiasi sia la tua risposta, mi piaceva l'idea di farlo, non per ottenere qualcosa, ma per farti sorridere ancora di più :D. 
        Poi un mio difetto, è che sono più bravo a scrivere le cose, che dirle a voce…forse per timore/ansie, non so, però ora non importa.\n\n 
        So che una occasione cosi capita una volta al anno, quindi non voglio sprecarla, perché non so se l'anno prossimo saremmo di nuovo qua, insieme. 
        Ed in questo momento…io sarò di fianco a te con la gamba che mi trema peggio di una lavatrice 😅`, 
        choices: { "Ho paura": "path1", "E' una tua solità pazzia?": "path2", "Nick...": "path3" } 
    }, 
    path1: { 
        text: `Nono, non serve essere spaventati 😅.\n\n 
        E' una cosa molto innocua, non è puntata a cambiare qualcosa tra noi due, solo per farti stare bene e farti sorridere. 
        Alla fine so, che anche se mi "sgridi", le mie parole ti fanno stare bene, anche se non lo fai vedere, se no non saresti qua a leggere queste parole del Nick digitale,
         mentre guardi nei occhi il Nick reale con occhi tipo:"Tu sei un pazzo".\n\n Beh, è quello che sono. Ormai l'hai capito da un po' secondo me ;).`,
         next: "body1" 
    }, 
    path2: { 
        text: `Io faccio sempre pazzie, lo sai bene 😅.\n\n 
        Dimmi una volta che io non ho fatto una pazzia verso di te; ricordati che continuerò a farle. Una cosa ho imparato, che le mie pazzie, nonostante tutto, in un certo senso ti fanno sorridere,
         ed è questo il regalo più bello che mi puoi fare, dedicarmi un tuo sorriso.\n\n 
         Però non ne voglio solo uno eh, per tua informazione, ogni tua risatina o momento dolce sono salvati tra i miei messaggi preferiti, quindi non mi sfuggiii 😝.`,
         next: "body1" 
    }, 
    path3: { 
        text: `Non voglio fare qualcosa che ti allontani, lo sai bene.\n\n 
        Ogni tanto mi vengono queste pensate, forse molto azzardate e molto "pericolose", però con te ho imparato ad provarci lo stesso, perché so che una occasione cosi, non mi capiterai mai più.\n\n 
        Ed poi, so che qualsiasi cosa succede o pensi, tu avrai un bel sorrisetto dopo questo pensiero che ti ho fatto, già lo vedo dai messaggi scritti prima, non vedo l'ora di vedere quello che avrai in questo momento.\n\n 
        Te non immagini la difficoltà nel aspettare questo giorno preciso, voglio fartelo vedere oraaaa (lunedì) ma non possoooo uffa. 
        Però so che l'attesa, ne vale la pena, con te ne è sempre valsa la pena :D.`,
        next: "body1" 
    }, 
    body1: { 
        text: `Ogni tanto io mi chiedo "perché?". Perché ti ripeto sempre le stesse cose…\n\n 
        Ogni volta che mi capita, subito dopo me ne pento…io so che sbaglio, ma semplicemente, non capisco perché continua a fare questo errore ogni tanto. 
        Mi dispiace quando capita, perché so che ti infastidisco e basta ogni volta che lo faccio…ed quanto capita, ho sempre il timore che tutto quello che mi hai detto prima o come tu ti senta con me, 
        svanisca, si allontana.\n\n Anche ora ho questo timore…mi hai detto cosi tante cose belle, che ho paura che a causa di quello sbaglio, ora non la pensi più cosi, anche se ho imparato a comprendere che uno sbaglio, 
        non cambierà mai come una persona si senta con me.\n\n Io so che il tuo voler bene, le tue parole, il futuro che tu vedi insieme a me, non se ne sono andati…io lo so e sono felice di saperlo.`,
        next: "body2" 
    }, 
    body2: { 
        text: `E' vero, sono veramente impacciato come ragazzo, ma io non mi sono mai sentito cosi tanto fortunato ad conoscere una persona…una persona che ogni giorno mi fa dire:"Non ci credo". 
        Una ragazza che ogni giorno che passa, mi fa sentire cosi bene, anche solo con un solo messaggio…anche se ogni tanto, ho paura di essere pesante verso di te.\n\n 
        Mi è capitato di pensare ogni tanto:"Forse gli sto scrivendo troppo", ma poi quando mi hai detto che Bea ti scrive molto di più in confronto a me, mi sono un po' più tranquillizzato ahah.\n\n 
        Sei speciale per me, ed lo sei sempre stata.\n\n`, 
        next: "body3" 
    }, 
    body3: { 
        text:`Ho sbagliato tante volte con te, ed continuo a sbagliare. Ne faccio anche di stupidi, tipo ripeterti 
        le cose…ed non capisco perché lo faccio, forse come dici te, troppo entusiasmo…o semplicemente ho il timore di non farti sentire speciale, di farti sentire una "seconda scelta", una qualunque.\n\n 
        Ho tante teorie, tante ipotesi del perché, ma sinceramente, io voglio continuare a sbagliare. Non voglio dirti "io sono perfetto"...e mai l'ho pensato. Io lo so che non sono perfetto,
        ma so che quello che dico, lo penso sempre.\n\n 
        Io per te, voglio continuare a sbagliare.`,
        next:"body4" 
    }, 
    body4: { 
        text: `Una volta io dicevo "Io per te morire", "Io per te sacrificherei tutto"...ma so che è un pensiero egoista, sia per me stesso, sia per te. 
        Se io morissi per te, dopo ne soffriresti solo, perché io non ci sono nella tua vita, e se sacrificherei tutto, io non avrei più nulla da condividerti.\n\n 
        Ora invece io dico "Io per te sbaglierei", "Io per te imparerei", "Io per te azzarderei a fare ciò che non ho mai fatto", "Io per te mi spingerei oltre al mio limite". 
        Io per te voglio sbagliare, cresce, azzardare e soprattutto imparare ad volerti bene, senza farti del male, senza farti sentire di troppo, senza farti sentire fuori posto…facendoti sentire in un posto sicuro, a casa :).`,
        next:"body5" 
    }, 
    body5: { 
        text:`Io te lo ripeterò all'infinito, ma mi sento fortunato ad conoscerti.\n\n 
        Non perché ti idealizzo, non perché mi piaci, non per ottenere qualcosa…ma perché con te, sono diventando, sto diventando e posso diventare la versione migliore di me, 
        perché te hai quella presenza, che mi mette in piedi ogni volta e mi fa dire:"Io posso farcela, posso raggiungere quella cima".\n\n 
        Oggi ti scrivo questo e mai cambieranno queste parole, anche fra 20 anni; oggi sono qui per dirti che non vedo l'ora di scoprire il nostro futuro insieme e vedere tutte 
        le sfumature del nostro rapporto.\n\n Futuro in cui andiamo a fare i fichettini con la Mansory e la Porsche GT3 :D.`,
        next:"body6" 
    }, 
    body6: { 
        text:`Ora però, ti voglio fare una domanda…che forse detta da un amico suona strano, ma voglio chiedertela lo stesso…cosi ti strappo un sorriso almeno…`, 
        next:"end" 
    }, 
    end: { 
        text: "You will be my valentine? 🥺" 
    } 
};


// ================= PARAMETRI =================  
const SPEECH_SPEED = 42; 
const LOVE_SPEED = 150; 
const PULSE_COLORS = ["#ff9aa2", "#ffb7b2", "#ffdac1", "#ffb347"]; 
const REQUIRED_SECRET_PATHS = ["path1", "path2", "path3"];
const TOTAL_ENDINGS = 3;

// ================= STATO ================= 
let current_node = "start"; 
let char_index = 0; 
let pulse_index = 0; 
let breath_dir = 1; 
let breath_pad = 20; 
let emotional_path = []; 
let final_text = ""; 
let final_char_index = 0; 
let retry_button = null; 

let discovered_endings = new Set();

let secret_node = "start";
let no_clicks = 0;

let discovered_secret_paths = new Set();

let secret_start_seen = false;

// ================= ELEMENTI ================= 
const label = document.getElementById("label"); 
const button_frame = document.getElementById("button-frame"); 
const next_button = document.getElementById("next-button"); 
const text_box = document.getElementById("text-box"); 

const ending_counter = document.createElement("div");
ending_counter.id = "ending-counter";
ending_counter.textContent = `Finali scoperti 0/${TOTAL_ENDINGS}`;
document.getElementById("root").appendChild(ending_counter);

const secret_counter = document.createElement("div");
secret_counter.id = "secret-counter";
secret_counter.textContent = `Percorsi esplorati 0/${REQUIRED_SECRET_PATHS.length}`;
secret_counter.style.display = "none";
document.getElementById("root").appendChild(secret_counter);

// ================= FUNZIONI ================= 
function type_text() { 
    const text = STORY[current_node].text; 
    if (char_index < text.length) { 
        label.textContent += text[char_index++]; 
        setTimeout(type_text, SPEECH_SPEED); 
    } else { 
        show_controls(); 
    } 
} 

function show_controls() { 
    clear_buttons(); 
    const node = STORY[current_node]; 
    if (node.choices) { 
        for (const [txt, target] of Object.entries(node.choices)) { 
            const b = document.createElement("button"); 
            b.textContent = txt; b.onclick = () => go_to(target); 
            button_frame.appendChild(b); 
        } 
    } else { 
        next_button.style.display = "inline-block"; 
    } 
} 

function clear_buttons() { 
    button_frame.innerHTML = "";
    next_button.style.display = "none"; 
} 

function go_to(node) { 
    emotional_path.push(node); 
    current_node = node; 
    char_index = 0; 
    label.textContent = ""; 
    
    clear_buttons(); 
    type_text(); 
} 

function next_step() { 
    if (current_node === "support" || current_node === "strength") { 
        show_final_message(); 
        return; 
    } 
    
    const node = STORY[current_node]; 
    if (node.next) go_to(node.next); 
} 

next_button.onclick = next_step; 

function update_endings_counter() {
    ending_counter.textContent =
        `Finali scoperti ${discovered_endings.size}/${TOTAL_ENDINGS}`;
}

function start_secret_valentine() {
    // reset UI
    if (retry_button) retry_button.remove();
    text_box.style.display = "none";
    label.style.display = "block";
    label.textContent = "";

    secret_node = "start";
    no_clicks = 0;

    secret_counter.style.display = "block"; // 👈 QUI

    type_secret_text();
}

function type_secret_text() {
    clear_buttons();
    const text = SECRET_STORY[secret_node].text;
    label.textContent = "";

    // 🔑 CASO SPECIALE: start già visto → NO writing
    if (secret_node === "start" && secret_start_seen) {
        label.textContent = text;
        show_secret_controls();
        return;
    }

    // 🔑 Segna start come visto (prima volta)
    if (secret_node === "start") {
        secret_start_seen = true;
    }

    let i = 0;
    function typer() {
        if (i < text.length) {
            label.textContent += text[i++];
            setTimeout(typer, SPEECH_SPEED);
        } else {
            show_secret_controls();
        }
    }

    typer();
}

function show_secret_controls() {
    clear_buttons();
    const node = SECRET_STORY[secret_node];

    if (node.choices) {
        for (const [txt, target] of Object.entries(node.choices)) {
            const b = document.createElement("button");
            b.textContent = txt;
            b.onclick = () => {
                clear_buttons();

                // 🔑 registra il path se è uno di quelli obbligatori
                if (REQUIRED_SECRET_PATHS.includes(target)) {
                    discovered_secret_paths.add(target);
                    update_secret_counter();
                }

                secret_node = target;
                type_secret_text();
            };
            button_frame.appendChild(b);
        }
    } else if (node.next) {
        next_button.style.display = "inline-block";
        next_button.onclick = () => {
            clear_buttons();
            // ⛔ tentativo di entrare nella parte centrale
            if (
                node.next === "body1" &&
                discovered_secret_paths.size < REQUIRED_SECRET_PATHS.length
            ) {
                show_secret_block_message();
                return;
            }

            secret_node = node.next;
            type_secret_text();
        };
    } else {
        show_valentine_question();
    }
}

function show_valentine_question() {
    clear_buttons();

    const yes = document.createElement("button");
    yes.textContent = "Sì ❤️";
    yes.onclick = show_yes_path;

    const no = document.createElement("button");
    no.textContent = "No";
    no.onclick = dodge_no_button;

    button_frame.appendChild(yes);
    button_frame.appendChild(no);
}

function dodge_no_button(e) {
    no_clicks++;

    const btn = e.target;
    btn.style.position = "absolute";

    const root = document.getElementById("root");
    const maxX = root.clientWidth - btn.offsetWidth - 40;
    const maxY = root.clientHeight - btn.offsetHeight - 40;

    btn.style.left = Math.random() * maxX + "px";
    btn.style.top = Math.random() * maxY + "px";

    if (no_clicks >= 5) {
        btn.remove();

        const tease = document.createElement("div");
        tease.style.fontSize = "13px";
        tease.style.opacity = "0.6";
        tease.style.marginTop = "20px";
        tease.textContent =
            "Pensavi veramente che ti mettevo quella scelta selezionabile? 😝";

        label.appendChild(tease);
    }
}

function show_yes_path() {
    clear_buttons();

    type_simple_text("Yieppi ❤️", () => {
        const retry = document.createElement("button");
        retry.textContent = "Riprova";
        retry.onclick = start_secret_valentine;

        const home = document.createElement("button");
        home.textContent = "Inizio";
        home.onclick = restart_story;

        button_frame.appendChild(retry);
        button_frame.appendChild(home);
    });
}

function type_simple_text(text, on_complete) {
    label.textContent = "";
    let i = 0;

    function typer() {
        if (i < text.length) {
            label.textContent += text[i++];
            setTimeout(typer, SPEECH_SPEED);
        } else if (on_complete) {
            on_complete();
        }
    }

    typer();
}

function update_secret_counter() {
    secret_counter.textContent =
        `Percorsi esplorati ${discovered_secret_paths.size}/${REQUIRED_SECRET_PATHS.length}`;
}

function show_secret_block_message() {
    clear_buttons();

    type_simple_text(
        "Prima di andare avanti, devi esplorare tutti i percorsi… 💭",
        () => {
            const cont = document.createElement("button");
            cont.textContent = "Continua";
            cont.onclick = () => {
                clear_buttons();
                secret_node = "start";
                type_secret_text();
            };
            button_frame.appendChild(cont);
        }
    );
}

// ---------- finale testuale ---------- 
function show_final_message() { 
    clear_buttons(); 
    label.textContent = ""; 
    if (emotional_path.includes("bad") && emotional_path.includes("support")) { 
        ending_id="bad_support";
        final_text = `Lo capisco, è difficile. Andare avanti quando tutto ti va contro, quando non riesci a crede in te.\n 
        Per questo ogni tanto, servirebbe fermarsi, guardarsi davanti al proprio riflesso e ammirare la persona che siamo diventati.\n\n 
        Io se fossi te, mi guarderei ogni giorno allo specchio è direi "MADO QUANTO SO BELLA" ahaha.\n 
        Io so che non serve che te lo dica io, ma il tuo riflesso è stupendo; ed per me, la parola stupenda, non riguarda solo l'aspetto, ma anche ciò che hai dentro. Un cuore unico, un'anima unica.\n\n 
        Non buttarti giù, hai molto da ricevere ancora e molte strade da percorrere; sono felice di far parte della tua strada...del tuo futuro e spero che io, possa darti quello che ti meriti veramente, partendo da queste parole 💙.`; 
    } else if (emotional_path.includes("bad")) { 
        ending_id="bad_strenght";
        final_text = `Anche nei momenti di debolezza e di stanchezza, tu continui sempre a farti valere e dimostrare a tutti la tua forza.\n 
        Ma ricordati sempre, che tutto ciò che fai è per far felice la bambina dentro di te, piena di sogni e piena di emozioni.\n\n 
        Non dimenticarti mai le promesse che gli hai fatto, non dimenticarti mai la sensibilità di quella bambina, non dimenticarti mai le emozioni forti che prova...non dimenticarti mai di prendertene cura.\n\n 
        E soprattutto…non dimenticarti mai…che io voglio prendermene cura, sempre e comunque. Ci sono sempre per te, anche nei momenti più difficili, io voglio esserci per te 💙`; 
    } else { 
        ending_id="good_path";
        final_text = `Mi chiedo il perché sei qui nonostante che stai bene…però sono felice di sentire che stai bene e stai riconoscendo il tuo valore, anche se pian piano, ma non te ne stai dimenticando. 
        Aaaah, forse ho capito, ti mancavo vero? Eh eh eh, beccataaa. Sappi che ogni volta che pensi a me, può chiamarmi sempre; non mi basta mai il tempo insieme a te e ne vorrei passare molto di più. 
        Non mi accontento mai quando si parla di te 😝. Sei una ragazza unica, ed mi sento cosi fortunato a far parte del tuo futuro, non me ne andrò mai da te e te lo dirò all'infinito, perché so che non credi mai a queste parole 💙`; 
    } 

    discovered_endings.add(ending_id);
    update_endings_counter();
    
    final_char_index = 0; 
    secret_index = 0; 
    
    type_final_text(); 
} 

function type_final_text() {
    if (final_char_index < final_text.length) {
        label.textContent += final_text[final_char_index++];
        setTimeout(type_final_text, SPEECH_SPEED);
    } else {
        next_button.textContent = "Continua";
        next_button.style.display = "inline-block";
        next_button.onclick = show_final_art;
    }
}

// ---------- finale grafico ---------- 
function show_final_art() { 
    label.style.display = "none"; 
    clear_buttons(); 
    
    text_box.style.display = "block"; 
    text_box.innerHTML = `<span class="fox-art">${ART}</span>\n\n`; 
    let i = 0; 
    
    function type_love() { 
        if (i < LOVE_TEXT.length) { 
            const span = document.createElement("span"); 
            span.textContent = LOVE_TEXT[i++]; 
            span.style.color = PULSE_COLORS[pulse_index++ % PULSE_COLORS.length]; 
            span.className = "love"; 
            text_box.appendChild(span); 
            setTimeout(type_love, LOVE_SPEED); 
        } 
    } 
    
    type_love(); 
    retry_button = document.createElement("button"); 

    if (discovered_endings.size === TOTAL_ENDINGS) {
            retry_button.textContent = "Finale Segreto";
            retry_button.onclick = start_secret_valentine;
        } else {
            retry_button.textContent = "Riprova";
            retry_button.onclick = restart_story;
        }

    document.getElementById("root").appendChild(retry_button); 
} 

// ---------- restart ---------- 
function restart_story() { 
    // rimuovi pulsante riprova 
    if (retry_button) { 
        retry_button.remove(); 
        retry_button = null; 
    } 

    // 🔑 reset finale segreto
    secret_start_seen = false;
    discovered_secret_paths.clear();
    update_secret_counter();
    secret_counter.style.display = "none";
    
    // reset stato narrativo 
    current_node = "start"; 
    char_index = 0; 
    emotional_path = []; 
    final_text = ""; 
    secret_lines = []; 
    final_char_index = 0; 
    secret_index = 0; 
    
    // reset UI 
    text_box.style.display = "none"; 
    text_box.textContent = ""; 
    label.style.display = "block"; 
    label.textContent = ""; 
    
    clear_buttons(); // 🔑 RESET HANDLER AVANTI 
    next_button.onclick = next_step; 
    next_button.textContent = "Avanti"; 
    // riparti 
    type_text(); 
} 

// ================= AVVIO ================= 

type_text();
