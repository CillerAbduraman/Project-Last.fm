# Project-Last.fm

GET https://proiect-tehnologii-cillera.c9users.io/users
[
    {
        "id": 1,
        "username": "",
        "password": "",
        "email": null,
        "image": null,
        "createdAt": "2017-12-05T07:17:48.000Z",
        "updatedAt": "2017-12-05T07:17:48.000Z"
    },
    {
        "id": 2,
        "username": "cillerA",
        "password": " parola",
        "email": "ciller.abduraman@gmail.com",
        "image": "https://www.w3schools.com/w3css/img_fjords.jpg",
        "createdAt": "2017-12-05T07:23:30.000Z",
        "updatedAt": null
    }
]
__________________________________________________________________________________________

MANAGEMENT DE MELODII FAVORITE CU INTEGRARE CU SPOTIFY(sau LAST.FM)

CE ESTE LAST.FM?
-	Site web de muzică, fondat în anul 2002 în Marea Britanie
-	Folosește un sistem de recomandare numit Audioscrobbler
-	Construiește un profil personalizat al fiecărui utilizator, folosindu-se de preferințele acestuia, fie accesând stațiile radio de pe Internet, fie din folderele de muzică de pe calculatorul personal sau de pe alte device-uri de tip media player.
-	Aceste informații sunt transferate către baza de date Last.fm si astfel utilizatorii primesc pagini de referință către artiștii lor preferați în funcție de gusturile lor muzicale
Aplicații similare : Lollypop, Yarock Player, Wakoopa
Cel mai recent API al Last.fm permite oricui să-și dezvolte propria aplicație, folosind baza de date Last.fm, fie că este aplicație web sau mobilă.
SERVICIU EXTERN API - https://www.last.fm/api/intro - aici am toate metodele folosite în ceea ce privește albumele, artiștii, sesiunile de autentificare, diverse librării, track-uri sau utilizatori. 

DESPRE LAST.FM API – aspecte ce mă interesează până în momentul de față 
1) API Endpoint : http://ws.audioscrobbler.com/2.0/
2) Primary Category : Music
3) SSL Support : No
4) Scope : Single purpose API
5) Architectural Style : REST
6) Libraries : JavaScript, C++, Python, Node.js, C#, PHP…
PAȘI DE URMAT PENTRU REALIZAREA UNUI SINGLE PAGE APPLICATION
1.DESIGN USER INTERFACE – vezi foto 
2.IDENTIFY COMPONENTS
3.IDENTIFY API CALLS
4. DEFINE USER ACTIONS 



DESCRIERE APLICAȚIE 
Inițial am conceput această aplicație ca fiind folosită de mai mulți utilizatori, dar ulterior m-am reorientat și am renunțat la formularele de Sign Up și Log In pentru a realiza doar managementul melodiilor preferate ale unui singur utilizator.
În cele ce urmează, voi realiza un Logo și voi alege un nume catchy. Mă gândeam să am o pagină de ABOUT cu preferințele mele în materie de muzică, dar rămâne de văzut. 
Momentan voi avea 2 meniuri laterale cu următoarele opțiuni : 
-	Stânga : Categories, Artists, Songs, My Playlists
-	Dreapta : Top Artists, Top Tracks, Top New Releases, Most Loved 
Mă gândeam să existe și un buton de Share to Facebook (de exemplu) dar nu sunt sigură ca voi știi să implementez. 
Va exista posibilitatea creării unui playlist nou, dar și adăugarea de melodii noi la cele existente deja. 
Butonul de search va găsi atât artiști, cât și melodii. 

IDENTIFY COMPONENTS
1. Music Categories List
2. Artists List
3. Songs List
4. My playlists List
5. Top Artists List
6. Top Tracks List
7. Top New Releases List
8. Most loved List
9. Search button
10. Playing right now
11. Create a new playlist button 
12. Add song to a playlist button
13. 2 x side menu, each one with 4 items 



IDENTIFY API CALLS – gândite foarte basic, o să am nevoie de mai multe call-uri pe parcurs
GET / PUT/ Categories (în funcție de id)
GET / PUT / Artists
GET / PUT/Songs
GET / PUT /Top Artists 
GET / PUT /Top Tracks
GET / PUT/ Top New Releases
GET / PUT / Most Loved
GET / POST (in functie de ID)Playlists 
GET / POST /  Now playing 
GET /  Artist, Song / ? Search
GET / PUT  / DELETE  Playlist (existent sau nou)

DEFINE USER ACTIONS
VIEW SONGS IN A CATEGORY
VIEW SONGS IN GENERAL 
VIEW ARTISTS
VIEW PLAYLISTS
VIEW TOP Artists / Top Tracks / New Releases / Most Loved
VIEW NOW PLAYING
SEARCH BY artist, song NAME
ADD PLAYLIST 
ADD item in PLAYLIST
DELETE item from PLAYLIST
DELETE playlist
-	Dacă o să fac și un istoric al căutărilor, aș putea adăuga sau șterge itemi și de acolo;
-	Utilizatorii vor avea mai multe drepturi, dar momentan am gândit strictul necesar
