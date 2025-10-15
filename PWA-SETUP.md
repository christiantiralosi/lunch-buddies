# 🚀 Setup PWA - Menu Asilo

La tua applicazione è ora una **Progressive Web App (PWA)**! 

## ✅ File Creati

1. **manifest.json** - Configurazione dell'app
2. **service-worker.js** - Gestione cache e funzionamento offline
3. **icon.svg** - Icona base dell'app
4. **menu.html** - Aggiornato con riferimenti PWA
5. **menu-data.txt** - Dati del menu in file separato (facile da modificare!)
6. **COME-MODIFICARE-MENU.md** - Guida per modificare il menu

## 📱 Come Testare

### Test in Locale

1. **Serve con HTTP Server** (i Service Worker richiedono HTTPS o localhost)
   
   Opzione A - Python:
   ```bash
   # Se hai Python 3
   python -m http.server 8000
   
   # Se hai Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   Opzione B - Node.js:
   ```bash
   # Installa http-server globalmente
   npm install -g http-server
   
   # Esegui nella cartella menu_app
   http-server -p 8000
   ```
   
   Opzione C - VS Code:
   - Installa l'estensione "Live Server"
   - Click destro su menu.html > "Open with Live Server"

2. **Apri nel Browser**
   - Vai su: `http://localhost:8000/menu.html`

3. **Verifica PWA** (Chrome DevTools)
   - Apri DevTools (F12)
   - Tab "Application"
   - Sezione "Manifest" - Controlla che sia caricato
   - Sezione "Service Workers" - Deve essere registrato
   - Sezione "Lighthouse" - Esegui audit PWA

### Test su Android

1. **Pubblica Online** (necessario per test reali)
   - Opzioni gratuite:
     - GitHub Pages
     - Netlify
     - Vercel
     - Firebase Hosting
   
2. **Apri da Chrome Android**
   - Chrome mostrerà banner "Aggiungi a schermata Home"
   - Oppure: Menu (⋮) > "Installa app"

3. **L'app viene installata!**
   - Icona sulla home screen
   - Si apre a schermo intero
   - Funziona offline

### Test su iOS

1. **Apri da Safari** (solo Safari supporta PWA su iOS)
2. Clicca pulsante "Condividi" 📤
3. Seleziona "Aggiungi a Home"
4. L'app viene aggiunta alla home screen

## 🎨 Creare le Icone PNG

Hai bisogno di 2 icone PNG dall'SVG creato:

### Metodo 1: Online (Più Semplice)
1. Vai su: https://cloudconvert.com/svg-to-png
2. Carica `icon.svg`
3. Imposta dimensioni:
   - Prima conversione: 192x192px → salva come `icon-192.png`
   - Seconda conversione: 512x512px → salva come `icon-512.png`
4. Scarica e metti i file nella cartella `menu_app`

### Metodo 2: Inkscape (Software Gratuito)
1. Scarica Inkscape: https://inkscape.org/
2. Apri `icon.svg`
3. File > Export PNG
4. Imposta dimensioni e esporta

### Metodo 3: Photoshop/GIMP
1. Apri `icon.svg` 
2. Imposta dimensioni 192x192 o 512x512
3. Salva come PNG

### Metodo 4: Usa Placeholder Temporaneo
Per ora puoi usare un'immagine qualsiasi:
- Rinomina un'immagine esistente come `icon-192.png` e `icon-512.png`
- Devono essere quadrate (stesse dimensioni larghezza e altezza)

## 🌐 Pubblicare Online

### Opzione 1: GitHub Pages (Consigliato)
```bash
# 1. Crea repository su GitHub
# 2. Carica i file
git init
git add .
git commit -m "PWA Menu Asilo"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/menu-asilo.git
git push -u origin main

# 3. Vai su Settings > Pages > Source: main branch
# 4. L'app sarà disponibile su: https://TUO-USERNAME.github.io/menu-asilo/menu.html
```

### Opzione 2: Netlify (Più Semplice)
1. Vai su: https://www.netlify.com/
2. Drag & drop la cartella `menu_app`
3. Ottieni URL immediato: `https://random-name.netlify.app`

### Opzione 3: Vercel
1. Vai su: https://vercel.com/
2. Importa progetto
3. Deploy automatico

## 📲 Condividere l'App

Dopo la pubblicazione online:

1. **Condividi il link** (WhatsApp, Email, SMS)
   ```
   Ciao! Ecco l'app del menu dell'asilo:
   https://tuo-sito.com/menu.html
   
   Per installare:
   - Android: Apri in Chrome e clicca "Installa"
   - iPhone: Apri in Safari > Condividi > Aggiungi a Home
   ```

2. **Gli utenti vedranno:**
   - Banner di installazione automatico
   - Possibilità di aggiungere alla home
   - App funzionante offline

## 🔧 Personalizzazione

### Cambiare Colori
In `manifest.json`:
```json
"background_color": "#FFF9E6",  // Colore di sfondo
"theme_color": "#FF6B35"        // Colore del tema
```

### Cambiare Nome
In `manifest.json`:
```json
"name": "Menu Asilo Settimanale",  // Nome completo
"short_name": "Menu Asilo"         // Nome breve (sotto icona)
```

### Aggiornare Cache
In `service-worker.js`, cambia la versione:
```javascript
const CACHE_NAME = 'menu-asilo-v2';  // Incrementa il numero
```

## ✨ Funzionalità PWA Attive

- ✅ Installabile su tutti i dispositivi
- ✅ Funziona offline (dopo primo caricamento)
- ✅ Icona personalizzata
- ✅ Schermo intero (no barra browser)
- ✅ Tema personalizzato
- ✅ Cache automatica
- ✅ Aggiornamenti trasparenti

## 🐛 Troubleshooting

### Service Worker non si registra
- Controlla console browser per errori
- Assicurati di servire su HTTP/HTTPS (non file://)
- Svuota cache e ricarica (Ctrl+Shift+R)

### Icone non appaiono
- Verifica che i file PNG esistano
- Controlla che le dimensioni siano corrette (192x192 e 512x512)
- Usa path corretto in manifest.json

### App non si installa
- Verifica che manifest.json sia caricato
- Controlla che service-worker.js sia registrato
- Su iOS, usa Safari (non Chrome)

### Cache non si aggiorna
- Incrementa CACHE_NAME in service-worker.js
- Disinstalla e reinstalla l'app
- Svuota cache del browser

## 📞 Supporto

Per problemi o domande, verifica:
1. Console del browser (F12) per errori
2. DevTools > Application > Manifest
3. DevTools > Application > Service Workers

---

**La tua app è pronta! 🎉**

Dopo aver creato le icone PNG, puoi pubblicarla online e condividerla con genitori e personale dell'asilo.
