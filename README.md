# Menu Asilo - Guida

## 📱 Progressive Web App (PWA)

Questa applicazione è una **PWA installabile**! Gli utenti possono installarla sui loro dispositivi come una vera app.

### File PWA
- **manifest.json** - Configurazione PWA
- **service-worker.js** - Gestione cache e offline
- **icon.svg** - Icona vettoriale dell'app
- **generate-icons.html** - Tool per generare icone PNG
- **PWA-SETUP.md** - Guida completa setup PWA

👉 **Leggi [PWA-SETUP.md](PWA-SETUP.md) per istruzioni dettagliate su installazione e pubblicazione**

## Struttura del Progetto

- **menu.html** - Pagina principale dell'applicazione (contiene anche i dati del menu)
- **menu.txt** - File di riferimento per il formato del menu
- **README.md** - Questo file

## ⚙️ Configurazione Iniziale - IMPORTANTE

### Impostare la Data di Inizio

Prima di utilizzare l'applicazione, è **fondamentale** configurare la data del lunedì della prima settimana:

1. Apri il file `menu.html` con un editor di testo
2. Cerca la riga con la costante `WEEK_1_MONDAY` (circa riga 830)
3. Modifica la data nel formato `YYYY-MM-DD`

**Esempio:**
```javascript
const WEEK_1_MONDAY = '2025-10-20';  // Lunedì 20 ottobre 2025
```

⚠️ **Importante**: La data deve essere un **lunedì**. Questa data determina l'inizio del ciclo di 4 settimane.

### Come funziona il calcolo delle settimane

L'applicazione calcola automaticamente:
- Quale settimana (1-4) mostrare in base alla data odierna
- Le date effettive di ogni giorno della settimana
- Il giorno corrente e quello di domani
- Gestisce il weekend mostrando la prossima settimana

**Esempio di ciclo:**
- Settimana del 20/10/2025: Settimana 1
- Settimana del 27/10/2025: Settimana 2
- Settimana del 03/11/2025: Settimana 3
- Settimana del 10/11/2025: Settimana 4
- Settimana del 17/11/2025: Settimana 1 (il ciclo ricomincia)

## Come Modificare il Menu

Il menu è incorporato **direttamente nel file `menu.html`** per permettere l'uso senza server web.

### Passi per Modificare:

1. Apri il file `menu.html` con un editor di testo (Notepad, VSCode, ecc.)
2. Cerca la sezione `<script type="text/plain" id="menu-data">` (circa riga 810)
3. Modifica le righe del menu seguendo il formato descritto sotto
4. Salva il file
5. Apri (o ricarica) `menu.html` nel browser

## Formato del Menu

Il menu usa un formato semplice basato su righe separate dal carattere pipe (`|`).

### Formato Riga

```
settimana|giorno|primo|secondo|frutta
```

### Parametri

- **settimana**: Numero da 1 a 4 (rappresenta quale settimana del ciclo mensile)
- **giorno**: Numero da 1 a 6:
  - 1 = Lunedì
  - 2 = Martedì
  - 3 = Mercoledì
  - 4 = Giovedì
  - 5 = Venerdì
  - 6 = Sabato
- **primo**: Nome del primo piatto
- **secondo**: Nome del secondo piatto
- **frutta**: Tipo di frutta

### Esempio

```
1|1|Pasta al pomodoro|Pollo alla griglia|Mela
1|2|Risotto ai funghi|Bistecca di manzo|Pera
```

Questa configurazione significa:
- Settimana 1, Lunedì: Pasta al pomodoro, Pollo alla griglia, Mela
- Settimana 1, Martedì: Risotto ai funghi, Bistecca di manzo, Pera

### Commenti

Puoi aggiungere commenti nel file usando il carattere `#` all'inizio della riga:

```
# Questo è un commento
# Settimana 1
1|1|Pasta al pomodoro|Pollo alla griglia|Mela
```

Le righe vuote vengono ignorate automaticamente.

## Perché il Menu è nel File HTML?

I browser moderni bloccano il caricamento di file esterni (come `menu.txt`) quando si apre direttamente un file HTML per motivi di sicurezza. Per questo motivo, il menu è incorporato direttamente nel file HTML, permettendo comunque una modifica facile e rapida.

## Funzionalità dell'Applicazione

### Visualizzazione Intelligente
- **Giorno corrente**: Evidenziato con bordo arancione e badge "Oggi"
- **Giorno di domani**: Evidenziato con bordo verde e badge "Domani"
- **Date visualizzate**: Ogni giorno mostra la data effettiva (es: "Lunedì 20/10")
- **Sabato incluso**: Il sabato è incluso nel menu settimanale
- **Domenica**: Solo la domenica mostra automaticamente la prossima settimana

### Vista Rapida (Predefinita)
Mostra solo i giorni dalla data corrente in poi della settimana in corso

### Vista Tutte le Settimane
Cliccando sul pulsante "Tutte le Settimane" puoi:
- Vedere tutte e 4 le settimane del ciclo
- Navigare velocemente tra le settimane con la timeline
- Vedere le date effettive di ogni settimana

## Note Importanti

- La domenica non è inclusa nel menu (l'asilo è chiuso)
- Il sabato è incluso nel menu settimanale
- Il ciclo si ripete automaticamente ogni 4 settimane
- Non usare il carattere `|` nei nomi dei piatti (usa alternative come "e" invece di "|")
- Il menu è già precaricato con tutte le 4 settimane nel file HTML
- Se modifichi il formato, assicurati di mantenere la struttura `settimana|giorno|primo|secondo|frutta`
- La data configurata viene mostrata nel footer della pagina per riferimento
