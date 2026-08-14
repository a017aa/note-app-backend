# Note App — Backend

Istifadecinin istenilen vaxt sureli sekilde qeydler yarada, editleye, vacib qeydleri yuxariya berkide ve renglerle ferqlendire bileceyi Full-Stack note tetbiqinin backend hissesi

---

## Layihe Haqqinda

Bu backend Express.js ve MongoDB (Mongoose ODM) istifade edərek qeydlerin Create, Read, Update, Delete emeliyyatlarini temin edir. Her qeydin basliq, mezmun, rengi ve "pinned" statusu var

---

## Texnologiyalar

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- dotenv

---

## Lokalda Calisdirma Telimati

### 1. Repoya klonla
```bash
git clone https://github.com/a017aa/note-app-backend.git
cd note-app-backend
```

### 2. Paketleri quraşdir
```bash
npm install
```

### 3. Environment faylini qur
`.env.example` faylini `.env` adi ile kopyala, icine oz MongoDB connection string-ini yaz:
```bash
cp .env.example .env
```

`.env` fayli bele olmalidi: [.env.example](./.env.example)

### 4. Serveri ise sal
```bash
node script.js
```

Server `http://localhost:7777` unvaninda ise dusecek

---

## API Dokumentasiyasi

API haqqinda etrafli melumat ucun: [API.md](./API.md)

---
