# 📝 Come Modificare il Menu

## ✏️ Modifica Semplice del Menu

Il menu è ora in un **file di testo separato** che puoi modificare facilmente!

### File da Modificare: `menu-data.txt`

## 📋 Formato del File

Ogni riga rappresenta un pasto:

```
settimana|giorno|primo|secondo|frutta
```

### Parametri:

- **settimana**: Numero da 1 a 4
- **giorno**: 
  - 1 = Lunedì
  - 2 = Martedì
  - 3 = Mercoledì
  - 4 = Giovedì
  - 5 = Venerdì
  - 6 = Sabato
- **primo**: Nome del primo piatto
- **secondo**: Nome del secondo piatto
- **frutta**: Tipo di frutta

### Esempio:

```
1|1|Pasta al pomodoro|Pollo alla griglia|Mela
```

Significa:
- Settimana 1
- Lunedì
- Primo: Pasta al pomodoro
- Secondo: Pollo alla griglia
- Frutta: Mela

## ✅ Come Modificare

### Metodo 1: Direttamente su GitHub (Online)

1. Vai su GitHub nel tuo repository
2. Clicca sul file `menu-data.txt`
3. Clicca l'icona matita ✏️ (Edit)
4. Modifica il testo
5. Scrolla in basso
6. Clicca "Commit changes"
7. **L'app si aggiorna automaticamente in 1-2 minuti!** 🎉

### Metodo 2: Sul Computer

1. Apri `menu-data.txt` con un editor di testo (Notepad, VS Code, ecc.)
2. Modifica i piatti che vuoi cambiare
3. Salva il file
4. Carica su GitHub:
   ```bash
   git add menu-data.txt
   git commit -m "Aggiornamento menu"
   git push
   ```
5. L'app si aggiorna automaticamente!

## 🎨 Regole Importanti

### ✅ DA FARE:
- Usa il carattere `|` per separare i campi
- Mantieni l'ordine: settimana|giorno|primo|secondo|frutta
- Puoi aggiungere commenti con `#` all'inizio della riga
- Puoi lasciare righe vuote

### ❌ NON FARE:
- Non usare il carattere `|` nei nomi dei piatti
- Non cambiare l'ordine dei campi
- Non dimenticare nessun campo

## 📅 Esempi di Modifiche

### Cambiare un singolo piatto:

**Prima:**
```
1|1|Pasta al pomodoro|Pollo alla griglia|Mela
```

**Dopo:**
```
1|1|Pasta al ragù|Pollo al forno|Banana
```

### Aggiungere un commento:

```
# Menu speciale per la festa
1|1|Pasta al pomodoro|Pollo alla griglia|Mela
```

### Cambiare tutti i lunedì:

Cerca tutte le righe che finiscono con `|1|` e modificale.

## 🔄 Aggiornamento Automatico

Quando modifichi `menu-data.txt` su GitHub:

1. ✅ Le modifiche sono online immediatamente
2. ✅ Gli utenti vedranno il nuovo menu al prossimo aggiornamento
3. ✅ L'app funziona offline con l'ultimo menu caricato
4. ✅ Al prossimo accesso online, scarica il menu aggiornato

## 🛠️ Verifica le Modifiche

Dopo aver modificato:

1. Apri l'app nel browser
2. Premi `Ctrl + Shift + R` (ricarica forzata)
3. Controlla che i piatti siano aggiornati

## 📞 Problemi?

### Il menu non si aggiorna?
- Ricarica la pagina (F5 o Ctrl+R)
- Svuota cache (Ctrl+Shift+R)
- Verifica che il file `menu-data.txt` sia caricato correttamente

### Errore di formato?
- Controlla di avere esattamente 5 campi separati da `|`
- Verifica che non ci siano caratteri `|` nei nomi dei piatti
- Assicurati che il numero di settimana sia tra 1 e 4
- Assicurati che il numero di giorno sia tra 1 e 6

### Menu vuoto?
- Controlla la console del browser (F12) per errori
- Verifica che `menu-data.txt` esista nella stessa cartella
- Il file deve essere servito via HTTP/HTTPS (non file://)

## 💡 Suggerimenti

1. **Backup**: Fai sempre una copia del file prima di modifiche grandi
2. **Testa**: Dopo modifiche importanti, verifica che tutto funzioni
3. **Commenti**: Usa i commenti per organizzare le settimane
4. **Versioning**: GitHub mantiene uno storico, puoi sempre tornare indietro!

---

**✨ Ora puoi aggiornare il menu velocemente senza toccare il codice!**
