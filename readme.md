# Basic Algorithm Scripting

Questo repository è dedicato alla sezione di Free Code Camp, relativo alla creazione di alcuni algoritmi di base in Javascript.
Per utilizzare questo repository, dove installare Node.js in modo da avere un ambiente di sviluppo su cui poter installare dei packages come Mocha e Chai per l'esecuzione di test. Node.js è un ambiente server per la creazione di applicazioni server in javascript, ma è anche un REPL e un ambiente di sviluppo su cui far girare i vostri script di Free Code Camp.

# Installazione

Creare una cartella e clonare il repository github. Nell'esempio creiamo uan cartella FreeCodeCampRoma, in cui verrà creata internamente una ulteriore cartella con lo stesso nome del repository BasicAlgorithmScripting:

Per MacOS/Linux:

```
mdkir FreeCodeCampRoma && cd FreeCodeCampRoma
git clone https://github.com/FreeCodeCampRoma/BasicAlgorithmScripting
cd BasicAlgorithmScripting && npm install
```

# Test

Per eseguire i test ho usato Mocha e Chai, il primo un test runner, il secondo una libreria di asserzioni. Per eseguirli, vi basterà, dalla root del progetto, eseguire:

```
npm run test
```

# Come usare questo spazio

1. Potete creare i vostri files o lavorare sui files già presenti.
2. Per aggiungere una vostra variante vi basterà inserirla nell'index.js della cartella del progetto, sia come require del modulo che come proprietà dell'oggetto esportato.
3. Potete aggiungere la vostra variante nel file di test.

# Inserire un progetto nuovo

Potete creare la vostra cartella per un nuovo progetto ancora non presente seguendo questo schema:

1. Create la cartella del progetto (es. "FindingAReminderInJavascript");
2. Create un file index.js all'interno della cartella creata al punto 1;
3. Create un file dove scriverete la vostra soluzione;
4. Se proponi più varianti puoi inserirle nello stesso file o creare nuovi file;
5. Ricorda di esportare i tuoi moduli nel file index.js;
6. Crea un file di test nella cartella Test inserendo il suffisso -test nel nome come parte finale;