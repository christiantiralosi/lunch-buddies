# Configurazione Settimana Menu

## File: `week-config.txt`

Questo file contiene la data del **primo lunedì della settimana 1** del ciclo menu a 4 settimane.

### Formato
```
YYYY-MM-DD
```

### Esempio
```
2025-10-21
```

Questa data rappresenta il lunedì di inizio della settimana 1.

### Come modificare
1. Apri il file `week-config.txt`
2. Modifica la data con il lunedì della settimana 1
3. Salva il file
4. Ricarica l'app

### Calcolo automatico
L'app calcola automaticamente:
- Quale settimana del ciclo (1-4) è quella corrente
- Le date di tutte le 4 settimane successive
- Il ciclo si ripete automaticamente ogni 4 settimane

### Esempio pratico
Se oggi è **martedì 21 ottobre 2025** e siamo nella **settimana 4**:
- Il lunedì di questa settimana è il 20 ottobre
- Contando 3 settimane indietro arriviamo al lunedì 29 settembre
- Quindi in `week-config.txt` scriverai: `2025-09-29`
