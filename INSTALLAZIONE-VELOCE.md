# ⚡ Guida Rapida PWA - Menu Asilo

## 🎯 Prossimi Passi (5 minuti)

### 1️⃣ Genera le Icone (2 minuti)

**Opzione A - Browser (Più Facile):**
1. Apri il file `generate-icons.html` nel browser
2. Clicca "Scarica icon-192.png" 
3. Clicca "Scarica icon-512.png"
4. Salva i file nella cartella `menu_app`

**Opzione B - Online:**
- Vai su https://cloudconvert.com/svg-to-png
- Carica `icon.svg`
- Converti in 192x192 e 512x512

### 2️⃣ Testa in Locale (2 minuti)

**Con Python:**
```bash
cd menu_app
python -m http.server 8000
```

**Con Node.js:**
```bash
cd menu_app
npx http-server -p 8000
```

**Con VS Code:**
- Installa estensione "Live Server"
- Click destro su menu.html > "Open with Live Server"

Poi apri: `http://localhost:8000/menu.html`

### 3️⃣ Pubblica Online (3 minuti)

**Opzione Più Semplice - Netlify:**
1. Vai su https://app.netlify.com/drop
2. Trascina la cartella `menu_app`
3. Ottieni link tipo: `https://random-name.netlify.app`

**Opzione GitHub Pages:**
```bash
# Nella cartella menu_app
git init
git add .
git commit -m "PWA Menu Asilo"
# Poi carica su GitHub e attiva Pages nelle impostazioni
```

### 4️⃣ Condividi con gli Utenti

Invia questo messaggio:

```
Ciao! 👋

È disponibile la nuova app del menu dell'asilo:
🔗 [TUO-LINK-QUI]

Per installarla:

📱 Android:
- Apri il link in Chrome
- Clicca "Installa" o "Aggiungi a schermata Home"

📱 iPhone:
- Apri il link in Safari
- Premi il pulsante Condividi 📤
- Seleziona "Aggiungi a Home"

✨ L'app funziona anche offline!
```

## ✅ Cosa Hanno gli Utenti

- 📲 App installabile sulla home screen
- 🎨 Icona personalizzata
- 📴 Funziona offline (dopo primo accesso)
- 🚀 Si apre a schermo intero
- 🔄 Aggiornamenti automatici

## 🆘 Problemi Comuni

**Le icone non appaiono?**
- Assicurati di aver generato icon-192.png e icon-512.png
- Controlla che siano nella stessa cartella di menu.html

**Service Worker non si registra?**
- Devi servire l'app via HTTP/HTTPS (non aprire file:// direttamente)
- Usa uno degli strumenti di test sopra

**App non si installa su Android?**
- Verifica che l'app sia servita online (HTTPS)
- Prova a svuotare la cache del browser
- Controlla che manifest.json sia caricato (DevTools > Application)

**App non si installa su iPhone?**
- Devi usare Safari (non Chrome)
- Segui la procedura: Condividi > Aggiungi a Home

## 📚 Documentazione Completa

Leggi **PWA-SETUP.md** per:
- Guida dettagliata
- Personalizzazione colori e nome
- Troubleshooting avanzato
- Come aggiornare l'app

---

## 🎉 Fatto!

La tua app è pronta per essere distribuita.
Dopo la pubblicazione online, gli utenti potranno installarla sui loro dispositivi con un click!

**Prossimo step:** Genera le icone e pubblica online! 🚀
