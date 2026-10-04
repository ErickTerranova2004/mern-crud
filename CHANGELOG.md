# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y versionado semántico ([SemVer](https://semver.org/lang/es/)).

## [1.0.0] - 2026-10-04

### Añadido
- Validadores de edad (entero entre 5 y 130) y género (`m` o `f`) en el modelo `User`. (`feat`)
- Pruebas unitarias con Jest para sanitizadores y validación de edad, con reporte de cobertura. (`test`)
- Pipeline de Integración Continua con GitHub Actions: checkout, instalación, verificación de sintaxis, pruebas y reporte de cobertura en Node 20.x y 22.x. (`ci`)
- Workflow de entrega que publica un Release con archivo `.zip` al subir un tag `v*`. (`ci`)

### Cambiado
- Sanitizadores y validaciones extraídos de `routes/users.js` a `utils/sanitizers.js` para poder probarlos de forma aislada. (`refactor`)

### Corregido
- Error 500 al enviar `name` o `email` que no eran texto; ahora se convierten a texto antes de sanitizar. (`fix`)
- `.gitignore` ahora ignora `coverage` y `.env` correctamente. (`fix`)
