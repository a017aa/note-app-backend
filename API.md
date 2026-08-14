# Note App — API Documentation

Base URL: `http://localhost:7777`

Butun cavablar json formatindadir

---

## 1. Butun notlari fetch etmek

**GET** `/api/notes`

**Response — 200 OK**
```json
[
  {
    "_id": "xxxxxxxxxxxxxxxxxxxxxxx(burda basqa id olur)",
    "title": "random title", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "content": "random content", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "color": "#ffffff",
    "isPinned": false,
    "createdAt": "2026-08-13T23:13:49.609Z",
    "updatedAt": "2026-08-13T23:13:49.609Z"
  }
]
```

---

## 2. IDye gore note fetch etmek

**GET** `/api/notes/:id`

**Response — 200 OK**
```json
  {
    "_id": "xxxxxxxxxxxxxxxxxxxxxxx (burda basqa id olur)",
    "title": "random title", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "content": "random content", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "color": "#ffffff",
    "isPinned": false,
    "createdAt": "2026-08-13T23:13:49.609Z",
    "updatedAt": "2026-08-13T23:13:49.609Z"
  }
```

**Error — 404 Not Found**
```json
{ "error": "this note doesnt exist" }
```

---

## 3. Yeni note yaratmaq

**POST** `/api/notes`

**Request Body**
```json
{
    "title": "random title", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "content": "random content", (mecburidir, bos olduqda status kodu 400 qaytarir)
}
```

**Response — 201 Created**
```json
  {
    "_id": "xxxxxxxxxxxxxxxxxxxxxxx (burda basqa id olur)",
    "title": "random title", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "content": "random content", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "color": "#ffffff",
    "isPinned": false,
    "createdAt": "2026-08-13T23:13:49.609Z",
    "updatedAt": "2026-08-13T23:13:49.609Z"
  }
```

**Error — 400 Bad Request** (title ya da content yoxdusa)
```json
{ "error": "'title' or 'content' cannot be empty" }
```

---

## 4. Qeydi editlemek, pinlemek, rengini deyismek

**PUT** `/api/notes/:id`

**Request Body** (yalniz deyismek istediyimiz seyleri yollayiriq, meselen)
```json
{ "isPinned": true }
```

**Response — 200 OK**
```json
  {
    "_id": "xxxxxxxxxxxxxxxxxxxxxxx (burda basqa id olur)",
    "title": "random title", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "content": "random content", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "color": "#ffffff",
    "isPinned": true,
    "createdAt": "2026-08-13T23:13:49.609Z",
    "updatedAt": "2026-08-13T23:13:49.609Z"
  }
```

**Error — 404 Not Found**
```json
{ "error": "this note doesnt exist" }
```

---

## 5. Qeydi silmek

**DELETE** `/api/notes/:id`

**Response — 200 OK** (silinen qeydi geri qaytarir)
```json
  {
    "_id": "xxxxxxxxxxxxxxxxxxxxxxx (burda basqa id olur)",
    "title": "random title", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "content": "random content", (mecburidir, bos olduqda status kodu 400 qaytarir)
    "color": "#ffffff",
    "isPinned": true,
    "createdAt": "2026-08-13T23:13:49.609Z",
    "updatedAt": "2026-08-13T23:13:49.609Z"
  }
```

**Error — 404 Not Found**
```json
{ "error": "this note doesnt exist" }
```

---

## Status kodlari

| 200 | Editleme, yenileme ugurlu olduqda |
| 201 | Yeni note basariyla yaradilanda |
| 400 | Mecburi olan hisseler eksikdi |
| 404 | Yanlis ID teqdim olunduqda |
| 500 | Server xetasi |
