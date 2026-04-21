<p align="center">
	<img src="https://capsule-render.vercel.app/api?type=waving&color=F0742B&height=180&section=header&text=Bun%20Showcase&fontColor=FBF0DF&fontSize=44&animation=fadeIn" alt="Bun Showcase banner" />
</p>

<p align="center">
	<a href="https://bun.com"><img src="https://img.shields.io/badge/runtime-Bun-f4722b?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" /></a>
	<img src="https://img.shields.io/badge/language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
	<img src="https://img.shields.io/badge/3D-Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
	<img src="https://img.shields.io/badge/status-active-16a34a?style=for-the-badge" alt="Status" />
</p>

<p align="center">
	Landing page interactive autour de Bun (canvas Three.js, animations, sections benchmark), servie avec Bun.
</p>

## Apercu

- Runtime: Bun v1.3+
- Frontend: HTML + TypeScript + CSS
- 3D: Three.js
- Sortie de build: dossier `dist/`

## Prerequis

- Bun install : https://bun.com

Verifier l'installation:

```bash
bun --version
```

## Installation

```bash
bun install
```

## Scripts disponibles

### Mode developpement (hot reload)

```bash
bun dev
```

Lance:

- `bun --hot src/index.html`
- Serveur local (en general http://localhost:3000)

### Build production

```bash
bun run build
```

Genere une version optimisee dans `dist/`.

### Execution production locale

```bash
bun start
```

Lance:

- `NODE_ENV=production bun src/index.html`

## Structure rapide

```text
.
├── src/
│   ├── index.html      # Structure de la page
│   ├── index.ts        # Interactions DOM + scene Three.js
│   └── index.css       # Styles globaux
├── package.json        # Scripts et dependances
└── bunfig.toml         # Config Bun (variables BUN_PUBLIC_*)
```

## Variables d'environnement

Le projet expose les variables prefixees `BUN_PUBLIC_*` (voir `bunfig.toml`).

Exemple:

```bash
export BUN_PUBLIC_API_URL="https://api.example.com"
bun dev
```

## Depannage

### `ReferenceError: document is not defined`

Ce projet est frontend: il faut lancer `bun dev` ou `bun start`, pas executer directement un fichier TypeScript frontend comme script serveur.

### Le port 3000 est deja utilise

Fermer le process qui occupe le port, puis relancer `bun dev`.

### Build propre

Si necessaire:

```bash
rm -rf dist
bun run build
```

## Notes

- Projet initialise avec `bun init`.
- Compatible Bun + TypeScript + Three.js.
