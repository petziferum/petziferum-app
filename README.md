# petziferum
#GooToKnow
  Importieren vo Json oder js dateien immer durch eine Kopie, wie etwa in einem Array, der durch eine For schleife befüllt wird:
  ```
  const importRecommendedPartner = [];
    for (let i in recommendedPartnersImport) {
      importRecommendedPartner.push(recommendedPartnersImport[i]);
    }
  ```
  Oder eine JSON.parse:
  ```
  const importRecommendedPartner = JSON.parse(
      JSON.stringify(recommendedPartnersImport)
    );
  ```
  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
