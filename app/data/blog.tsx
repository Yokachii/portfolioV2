import type { MainType, PageContent, PageType } from "../types/blog";

type ContentTranslation = {
    text?: string;
    title?: string;
    description?: string;
    alt?: string;
    content?: string[];
    links?: Array<{ title: string; url: string }>;
};

function translateMain(main: MainType, translations: Record<number, ContentTranslation>): MainType {
    return {
        content: main.content.map((item, index) => {
            const translation = translations[index];
            if (!translation) return item;

            switch (item.type) {
                case "str":
                    return { ...item, text: translation.text ?? item.text };
                case "img":
                    return { ...item, alt: translation.alt ?? item.alt };
                case "list":
                    return {
                        ...item,
                        title: translation.title ?? item.title,
                        content: translation.content ?? item.content,
                    };
                case "linkList":
                    return {
                        ...item,
                        title: translation.title ?? item.title,
                        content: translation.links ?? item.content,
                    };
                case "subCategorie":
                    return {
                        ...item,
                        title: translation.title ?? item.title,
                        description: translation.description ?? item.description,
                        content: item.content,
                    };
            }
        }),
    };
}

function localizedProject(
    en: Omit<PageType, "en" | "fr"> & PageContent,
    fr: { header: PageContent["header"]; content: Record<number, ContentTranslation> },
): PageType {
    const { header, main, ...shared } = en;
    return {
        ...shared,
        en: { header, main },
        fr: { header: fr.header, main: translateMain(main, fr.content) },
    };
}

export const blogsDatas: Record<string, PageType> = {
    "keypad1-4keys": localizedProject({
        createdAt:"2026-02-19",
        tags:["electronique", "programmation", "impression 3D"],
        coverImage:"/projects/keypad1x4/cover.webp",
        header:{
            title:"First keypad (4 keys)",
            description:"I just finished up my first keypad build with 4keys and a raspberry pi pico. I used a 3D printed case and some mechanical switches. It was a fun project and I'm happy with how it turned out!",
        },
        main:{
            content:[
                {type:"img",alt:"final product",url:"/projects/keypad1x4/cover.webp"},
                {type:"list",title:"resources",content:[
                    "raspberry pi pico",
                    "3D printed case",
                    "mechanical switches",
                    "wires",
                    "soldering iron"
                ]},
                {type:"linkList",title:"Usefull links",content:[
                    {title:"The 3d model i based my case on",url:"https://www.printables.com/model/347828-4x1-macro-keypad/files"},
                    {title:"Circuit python library for the raspberry pi pico",url:"https://circuitpython.org/board/raspberry_pi_pico/"},
                ]},
                {type:"str",text:"I used a raspberry pi pico RP2040 for the mcu, the case is 3d printed, and i used red switches."},

                {type:"str",text:"I started by 3d printing the case. I used a model that i found online and modified it to fit my needs. I printed the case in two separate parts, the actual case and a cover for the bottom."},
                {type:"str",text:"I then used som screw to attach the raspberry to the bottom part"},
                {type:"img",alt:"Raspberry pi pico screwed into the bottom part of the case",url:"/projects/keypad1x4/raspberrycase.webp"},
                {type:"str",text:"Next step was to pass the keys in the upper part of the case and solder them together. On the picture shown below the wiring is wrong, i had to do it again, diodes were in the wrong direction and i had to redo the soldering. I then simply wired all five of my cables to gpios on the raspberry."},
                {type:"img",alt:"Switches with diodes soldered in the top part of the case",url:"/projects/keypad1x4/diodes.webp"},
                {type:"img",alt:"Both parts of the case closed with the pico and keys inside",url:"/projects/keypad1x4/raspberrykeys.webp"},
                {type:"str",text:"I just had to put the screw that are holding the two parts together and it was done! I then flashed the raspberry with circuit python and wrote a simple code to make it work. I'm really happy with the final result and i will definitely try to upgrade this project in the future"},
                {type:"img",alt:"Finished 4 keys keypad",url:"/projects/keypad1x4/IMG_2359.jpg.webp"},
            ]
        }
    }, {
        header: {
            title: "Premier pavé numérique (4 touches)",
            description: "Je viens de terminer mon premier pavé numérique à quatre touches, construit avec un Raspberry Pi Pico, un boîtier imprimé en 3D et des interrupteurs mécaniques. C'était un projet amusant et je suis très content du résultat !",
        },
        content: {
            0: { alt: "Pavé numérique terminé" },
            1: { title: "Matériel", content: ["Raspberry Pi Pico", "Boîtier imprimé en 3D", "Interrupteurs mécaniques", "Fils", "Fer à souder"] },
            2: { title: "Liens utiles", links: [
                { title: "Modèle 3D utilisé pour le boîtier", url: "https://www.printables.com/model/347828-4x1-macro-keypad/files" },
                { title: "Bibliothèque CircuitPython pour le Raspberry Pi Pico", url: "https://circuitpython.org/board/raspberry_pi_pico/" },
            ] },
            3: { text: "J'ai utilisé un Raspberry Pi Pico RP2040 comme microcontrôleur. Le boîtier est imprimé en 3D et j'ai choisi des interrupteurs rouges." },
            4: { text: "J'ai commencé par imprimer le boîtier en 3D. J'ai trouvé un modèle en ligne que j'ai modifié pour l'adapter à mes besoins. Le boîtier est composé de deux pièces : le corps et un couvercle pour le dessous." },
            5: { text: "J'ai ensuite utilisé quelques vis pour fixer le Raspberry Pi à la partie inférieure." },
            6: { alt: "Raspberry Pi Pico vissé dans la partie inférieure du boîtier" },
            7: { text: "J'ai ensuite placé les touches dans la partie supérieure et les ai soudées ensemble. Le câblage visible sur la photo ci-dessous était incorrect : j'ai dû recommencer, car les diodes étaient dans le mauvais sens. J'ai ensuite relié les cinq fils aux broches GPIO du Raspberry Pi." },
            8: { alt: "Interrupteurs et diodes soudés dans la partie supérieure du boîtier" },
            9: { alt: "Les deux parties du boîtier assemblées, avec le Pico et les touches à l'intérieur" },
            10: { text: "Il ne me restait plus qu'à visser les deux parties ensemble ! J'ai ensuite installé CircuitPython sur le Raspberry Pi et écrit un petit programme pour faire fonctionner le pavé. Je suis très satisfait du résultat et j'essaierai certainement de faire évoluer ce projet." },
            11: { alt: "Pavé numérique terminé à quatre touches" },
        },
    }),
    "framework-picture": localizedProject({
        createdAt:"2024-06-13",
        tags:["web", "informatique", "design"],
        coverImage:"/projects/framework/main.png",
        header:{
            title:"Framework Picture",
            description:"I made this 'showcase website' for a photograpger, it was a challenging and fun small project",
        },
        main:{
            content:[
                {type:"img",alt:"final product",url:"/projects/framework/main.png"},
                {type:"list",title:"Skills developed",content:[
                    "UI",
                    "Video integration",
                    "Image composition",
                ]},
                {type:"linkList",title:"Usefull links",content:[
                    {title:"Website URL",url:"https://frameworkpicture-kohl.vercel.app"},
                ]},
                {type:"str",text:"This was in fact one of my first experience dealing with a customer when doing a website, it was pretty challenging but was really interesting and i learned a lot"},

                {type:"str",text:"It was nice to be able to work with original images, and someone's ideas to use"},
                {type:"img",alt:"final product",url:"/projects/framework/contact.png"},
                {type:"str",text:"I am overall pleased with the result, even if the project is quite old"},
                
            ]
        }
    }, {
        header: {
            title: "Framework Picture",
            description: "J'ai créé ce site vitrine pour un photographe. C'était un petit projet stimulant et amusant.",
        },
        content: {
            0: { alt: "Aperçu du site" },
            1: { title: "Compétences développées", content: ["Interface utilisateur", "Intégration vidéo", "Composition d'images"] },
            2: { title: "Liens utiles", links: [{ title: "Adresse du site", url: "https://frameworkpicture-kohl.vercel.app" }] },
            3: { text: "C'était l'une de mes premières expériences avec un client pour la création d'un site web. Le défi était intéressant et j'y ai beaucoup appris." },
            4: { text: "J'ai apprécié de pouvoir travailler avec des images originales et de mettre en forme les idées de quelqu'un d'autre." },
            5: { alt: "Page de contact du site" },
            6: { text: "Dans l'ensemble, je suis satisfait du résultat, même si le projet date déjà un peu." },
        },
    }),
    "hallay": localizedProject({
        createdAt:"2024-08-11",
        tags:["web", "informatique", "design"],
        coverImage:"/projects/hallay/main.png",
        header:{
            title:"Hallay",
            description:"This is a small project that i made as a small website for a friend of mine.",
        },
        main:{
            content:[
            ]
        },
        url:"https://hallay-one.vercel.app",
    }, {
        header: {
            title: "Hallay",
            description: "Un petit site web que j'ai créé pour un ami.",
        },
        content: {},
    }),

    "3d-engine": localizedProject({
        createdAt:"2022-12-19",
        tags:["informatique", "programmation", "simulation", "3D"],
        coverImage:"/projects/3d-engine/cover.png",
        header:{
            title:"3D engine",
            description:"This is one of my first real web project, i started it in 2022 and finished it in 2023. It's a really basic 3D engine that allow the user to move around a 3D scene with a couple sprites",
        },
        main:{
            content:[
                {type:"img",alt:"final product",url:"/projects/3d-engine/cover.png"},
                {type:"str",text:"The interesting part of this project is that it is actually a 3D engine entirely built with JavaScript and HTML, no lib, nothing, it is just one .HTML file with no dependencies.."},
                {type:"linkList",title:"Usefull links",content:[
                    {title:"The link to access the project online",url:"/3d/engine-2023"},
                ]},

                {type:"str",text:"The project use the CSS transforms property to create a 3D effect, and the user can move around the scene with the keyboard and arrows. The engine is really basic, but it was a fun project to work on and i learned a lot about CSS and JavaScript."},
                {type:"str",text:"The rendering use sprites, and then use the JS and CSS to cut the image and display the right frame depending on the state of the animation."},
                {type:"img",alt:"Finished 4 keys keypad",url:"/projects/3d-engine/stella_walk_1.png"},

                {type:"str",text:"I also added a basic collision system, detection the colision between the player, circle, elipses and cubes."},
                {type:"img",alt:"Finished 4 keys keypad",url:"/projects/3d-engine/colision.png"},

                {type:"str",text:"There is 3D cubes, decorative trees, and colision tests"},
                {type:"img",alt:"Finished 4 keys keypad",url:"/projects/3d-engine/tree.png"},

                {type:"str",text:"I also added a couple of different test surfaces applying different effects to the player when he is on them, like a slippery surface, a sticky surface, etc..."},
                {type:"img",alt:"Finished 4 keys keypad",url:"/projects/3d-engine/tapis.png"},

                {type:"str",text:"The player can also use shift to sprint and A to use a spyglass and zoom on things far away, E also enable the player to center back the camera on him"},
            ]
        }
    }, {
        header: {
            title: "Moteur 3D",
            description: "L'un de mes premiers vrais projets web, commencé en 2022 et terminé en 2023. C'est un moteur 3D très simple qui permet de se déplacer dans une scène à l'aide de quelques sprites.",
        },
        content: {
            0: { alt: "Aperçu du moteur 3D" },
            1: { text: "La particularité de ce projet, c'est qu'il s'agit d'un moteur 3D entièrement réalisé en JavaScript et HTML, sans bibliothèque : tout tient dans un seul fichier HTML autonome." },
            2: { title: "Liens utiles", links: [{ title: "Accéder au projet en ligne", url: "/3d/engine-2023" }] },
            3: { text: "Le projet utilise les transformations CSS pour créer un effet 3D. Le joueur se déplace dans la scène avec le clavier et les flèches. Le moteur est très simple, mais sa réalisation était amusante et m'a beaucoup appris sur CSS et JavaScript." },
            4: { text: "Le rendu utilise des sprites ; JavaScript et CSS découpent les images pour afficher la bonne frame selon l'état de l'animation." },
            5: { alt: "Sprite du personnage en mouvement" },
            6: { text: "J'ai également ajouté un système de collisions élémentaire entre le joueur et des cercles, des ellipses ou des cubes." },
            7: { alt: "Exemple de collisions" },
            8: { text: "La scène contient des cubes en 3D, des arbres décoratifs et des tests de collision." },
            9: { alt: "Arbres décoratifs dans la scène" },
            10: { text: "J'ai aussi créé plusieurs surfaces de test qui modifient le comportement du joueur, par exemple une surface glissante ou collante." },
            11: { alt: "Surface de test dans le moteur" },
            12: { text: "Le joueur peut sprinter avec Maj, utiliser A pour regarder au loin avec une longue-vue et appuyer sur E pour recentrer la caméra sur lui." },
        },
    }),

    "ant-sim": localizedProject({
        createdAt:"2026-03-24",
        tags:["informatique", "programmation", "simulation", "2D"],
        coverImage:"/projects/ant/ant2.png",
        header:{
            title:"2D simulation",
            description:"This is a 2D ants simulation, the goal of this project is to emulate the behavior of ants in a colony. The ants will move around the environment and interact with each other and the environment.",
        },
        main:{
            content:[
                {type:"img",alt:"final product",url:"/projects/ant/ant2.png"},
                {type:"str",text:"This "},

                {type:"linkList",title:"Links",content:[
                    {title:"V1 Project link",url:"/ant"},
                    {title:"V2 Project link",url:"/ant2"},
                ]},

                {type:"str",text:"For the first version i only used HTML elements and basic js, but i was quickly restricted by the viual and other limitations."},
                {type:"img",alt:"V1",url:"/projects/ant/ant1.png"},
                {type:"str",text:"I then switched to using a canvas on my nextJs project and a bigger architecture with separated files."},
                {type:"img",alt:"V2",url:"/projects/ant/ant2.png"},
                {type:"str",text:"I fixed the ant mouvement formula, also added a lot of customizable parametters."},
                {type:"str",text:"I made the food more meaningfull (ant can refill stam using food) and the queen can lay eggs if there is enough food in the base."},
                {type:"str",text:"There is also a timer, and counters so you can play with parameters and see the diferent result on how long the colony survive and the food collecgted"},
                {type:"list",title:"Next steps for the project :",content:[
                    "Making the food respawn so that the sim can actually 'live' for longer",
                    "Fixing some minor mouvement issue with the ants",
                    "Trying to find actual realistic parameters",
                    "Fix some minor stuff in the pheromone",
                ]},
            ]
        }
    }, {
        header: {
            title: "Simulation de fourmis en 2D",
            description: "Cette simulation en 2D cherche à reproduire le comportement des fourmis dans une colonie. Elles se déplacent dans leur environnement et interagissent entre elles et avec celui-ci.",
        },
        content: {
            0: { alt: "Simulation de fourmis en cours" },
            1: { text: "Cette simulation reproduit le comportement d'une colonie de fourmis." },
            2: { title: "Liens", links: [{ title: "Projet V1", url: "/ant" }, { title: "Projet V2", url: "/ant2" }] },
            3: { text: "Dans la première version, je n'utilisais que des éléments HTML et du JavaScript basique, mais j'ai rapidement été limité par le rendu et d'autres contraintes." },
            4: { alt: "Première version de la simulation" },
            5: { text: "Pour la version suivante, je suis passé à un canvas dans mon projet Next.js et à une architecture plus complète, répartie sur plusieurs fichiers." },
            6: { alt: "Deuxième version de la simulation" },
            7: { text: "J'ai corrigé la formule de déplacement des fourmis et ajouté de nombreux paramètres personnalisables." },
            8: { text: "J'ai rendu la nourriture plus utile : les fourmis peuvent récupérer de l'énergie en mangeant, et la reine peut pondre si la base contient suffisamment de nourriture." },
            9: { text: "Un chronomètre et des compteurs permettent aussi de modifier les paramètres et d'observer la durée de survie de la colonie ainsi que la quantité de nourriture récoltée." },
            10: { title: "Prochaines étapes", content: [
                "Faire réapparaître la nourriture pour prolonger la simulation",
                "Corriger quelques petits problèmes de déplacement des fourmis",
                "Trouver des paramètres plus réalistes",
                "Améliorer certains détails liés aux phéromones",
            ] },
        },
    }),

    "split-keyboard-1": localizedProject({
        createdAt:"2026-03-08",
        tags:["electronique", "programmation", "clavier", "impression 3D"],
        coverImage:"/projects/split-keyboard1/startwireboth.webp",
        header:{
            title:"Split keyboard V1",
            description:"This is my first ever split keyboard build, it's a 4*6*2 matrix and i used a raspberry pi pico",
        },
        main:{
            content:[
                {type:"img",alt:"Both hands wired as a matrix",url:"/projects/split-keyboard1/startwireboth.webp"},
                {type:"list",title:"resources",content:[
                    "Raspberry pi pico (usb-c)",
                    "3D printed case (Pla)",
                    "Switches",
                    "Copper wire",
                    "Cable 12+pin (HDMI)",
                ]},
                {type:"linkList",title:"Usefull links",content:[
                    {title:"Base moddel",url:"https://makerworld.com/en/models/2057480-baikal-split-keyboard-handwired-corne-zmk-ergo#profileId-2221061"},
                    {title:"QMK (keyboard firmware)",url:"https://docs.qmk.fm"},
                    {title:"My final model :....",url:"https://makerworld.com/en/models/2057480-baikal-split-keyboard-handwired-corne-zmk-ergo#profileId-2221061"}
                ]},
                {type:"str",text:"For this project i used a pico for the mcu but you can actually use anything (arduino pro micro ect...)"},

                {type:"str",text:"First step was to modify the 3d model acording to what i needed, my goal being to use only one raspberry, and be able to add a button and a potentiometer i had to make some modification"},
                {type:"img",alt:"Top half of the case with switches inserted",url:"/projects/split-keyboard1/modeletop.webp"},
                {type:"str",text:"I removed the mcu 'cased' because i wanted the raspberry to be apparent but it do not really matter, but i had to lengthen the slot for the mcu because the design was intended to be used with an arduino pro micro which have a lot less pins"},
                {type:"str",text:"I replaced the slot on the right hand with one for my slider, and added two holes for the cable as well as one for the button. Also made some holes on the bottom in order to use less filament."},
                {type:"img",alt:"Bottom part of the case with the holes to save filament",url:"/projects/split-keyboard1/modelebottom.webp"},
                {type:"str",text:"After printing i found out i mesured something wrong and the left top part didnt fit well in the case. It was easyly fixed by filing away a bit of the top to make it fit better."},
                {type:"str",text:"For this build i tried not to coil the diodes but only to bend them a litle bit (it saved a lot of time) and i think it will hold up just as well"},
                {type:"img",alt:"Switches with the diodes bent over them, before soldering",url:"/projects/split-keyboard1/topdiodesnosolder.webp"},
                {type:"img",alt:"Top case with the diodes soldered",url:"/projects/split-keyboard1/topdiode.webp"},
                {type:"str",text:"I then soldered the cables as a matrix on each hand"},
                {type:"img",alt:"Top case with the matrix wiring soldered",url:"/projects/split-keyboard1/topdiodewire.webp"},
                {type:"img",alt:"Both hands wired as a matrix",url:"/projects/split-keyboard1/bothtopwire.webp"},
                {type:"str",text:"Before starting to solder the top case to the bottom part i took the cable to connect both of my case together and wire the button on the right case"},
                {type:"img",alt:"Bottom case with the connecting cable and the button",url:"/projects/split-keyboard1/bottomwirebutton.webp"},
                {type:"str",text:"Next step was to solder the matrix + slider of the right case to the cables, so that i could close it and only work on the part with the mcu."},
                {type:"str",text:"This step completed i could start by soldering the pico to the pins so that it will not move when i will solder the rest"},

            ]
        }
    }, {
        header: {
            title: "Clavier séparé V1",
            description: "Voici mon tout premier clavier séparé, avec une matrice de 4 × 6 × 2 touches et un Raspberry Pi Pico.",
        },
        content: {
            0: { alt: "Les deux moitiés du clavier câblées en matrice" },
            1: { title: "Matériel", content: ["Raspberry Pi Pico (USB-C)", "Boîtier imprimé en 3D (PLA)", "Interrupteurs", "Fil de cuivre", "Câble à 12 broches ou plus (HDMI)"] },
            2: { title: "Liens utiles", links: [
                { title: "Modèle de base", url: "https://makerworld.com/en/models/2057480-baikal-split-keyboard-handwired-corne-zmk-ergo#profileId-2221061" },
                { title: "QMK (micrologiciel de clavier)", url: "https://docs.qmk.fm" },
                { title: "Mon modèle final", url: "https://makerworld.com/en/models/2057480-baikal-split-keyboard-handwired-corne-zmk-ergo#profileId-2221061" },
            ] },
            3: { text: "J'ai utilisé un Pico comme microcontrôleur, mais d'autres cartes peuvent convenir, comme un Arduino Pro Micro." },
            4: { text: "J'ai d'abord modifié le modèle 3D selon mes besoins. Je voulais n'utiliser qu'un seul Raspberry Pi et ajouter un bouton ainsi qu'un potentiomètre, ce qui a nécessité quelques modifications." },
            5: { alt: "Partie supérieure du boîtier avec les interrupteurs installés" },
            6: { text: "J'ai retiré le boîtier prévu pour le microcontrôleur afin de laisser le Raspberry Pi visible. J'ai aussi dû agrandir son emplacement : le modèle initial était conçu pour un Arduino Pro Micro, qui possède beaucoup moins de broches." },
            7: { text: "J'ai remplacé l'emplacement de la moitié droite par un logement pour mon curseur, ajouté deux trous pour le câble et un pour le bouton. J'ai également évidé le dessous pour économiser du filament." },
            8: { alt: "Partie inférieure du boîtier avec des évidements pour économiser du filament" },
            9: { text: "Après l'impression, j'ai remarqué une erreur de mesure : la partie supérieure gauche s'insérait mal dans le boîtier. J'ai facilement corrigé le problème en limant un peu la pièce." },
            10: { text: "Pour ce montage, j'ai choisi de simplement plier légèrement les diodes au lieu de les enrouler. Cela m'a fait gagner du temps et devrait être tout aussi solide." },
            11: { alt: "Interrupteurs avec les diodes pliées avant la soudure" },
            12: { alt: "Partie supérieure du boîtier avec les diodes soudées" },
            13: { text: "J'ai ensuite soudé les fils en matrice sur chaque moitié du clavier." },
            14: { alt: "Partie supérieure avec le câblage de la matrice soudé" },
            15: { alt: "Les deux moitiés du clavier câblées en matrice" },
            16: { text: "Avant de souder la partie supérieure à la base, j'ai préparé le câble reliant les deux moitiés et câblé le bouton sur la moitié droite." },
            17: { alt: "Partie inférieure avec le câble de liaison et le bouton" },
            18: { text: "J'ai ensuite soudé la matrice et le curseur de la moitié droite aux câbles, afin de pouvoir fermer le boîtier et me concentrer sur la partie contenant le microcontrôleur." },
            19: { text: "Une fois cette étape terminée, j'ai pu souder le Pico aux broches pour le maintenir en place pendant le reste du câblage." },
        },
    }),

    "chess-game": localizedProject({
        createdAt:"2023-03-08",
        tags:["informatique", "socket", "chess", "database"],
        coverImage:"/projects/chess/main.png",
        header:{
            title:"Socket Chess game",
            description:"This is a chess game that i made with socket.io, the goal of this project was to learn how to use socket.io and how to make a multiplayer game. The game is not actually playable online but the user & socket system work.",
        },
        main:{
            content:[
                {type:"img",alt:"Website game",url:"/projects/chess/V1/game.png"},
                {type:"list",title:"Tools used",content:[
                    "Socket.IO",
                    "SQL database (...)",
                    "Next.Js",
                ]},
                {type:"linkList",title:"Usefull links",content:[
                    {title:"Project's Github",url:"https://github.com/Yokachii/NextJs-SocketIo-LiveGame"},
                    {title:"Socket.io",url:"https://makerworld.com/en/models/2057480-baikal-split-keyboard-handwired-corne-zmk-ergo#profileId-2221061"},
                    {title:"Next.js",url:"https://docs.qmk.fm"},
                ]},
                {type:"str",text:"This project was a fun one, i learned a lot about socket.io and how to make a multiplayer game."},

                {type:"str",text:"I started by making a simple landing page, for the design i did something really similar to lichess (lichess.org) because the goal of the projecgt was really to learn about the backend (SocketIo, database) and not really the front and design"},
                {type:"img",alt:"landing",url:"/projects/chess/V1/landing.png"},
                
                
            ]
        }
    }, {
        header: {
            title: "Jeu d'échecs Socket",
            description: "J'ai créé ce jeu d'échecs avec Socket.IO pour apprendre à utiliser cette technologie et à développer un jeu multijoueur. La partie n'est pas encore jouable en ligne, mais le système utilisateur et les sockets fonctionnent.",
        },
        content: {
            0: { alt: "Interface du jeu d'échecs" },
            1: { title: "Technologies utilisées", content: ["Socket.IO", "Base de données SQL (...)", "Next.js"] },
            2: { title: "Liens utiles", links: [
                { title: "Dépôt GitHub du projet", url: "https://github.com/Yokachii/NextJs-SocketIo-LiveGame" },
                { title: "Socket.IO", url: "https://socket.io/" },
                { title: "Next.js", url: "https://nextjs.org/" },
            ] },
            3: { text: "Ce projet était très amusant et m'a beaucoup appris sur Socket.IO et le développement de jeux multijoueurs." },
            4: { text: "J'ai commencé par créer une page d'accueil simple. Pour le design, je me suis inspiré de lichess.org, car l'objectif était surtout d'apprendre le développement côté serveur (Socket.IO et base de données), plutôt que le front-end et le design." },
            5: { alt: "Page d'accueil du jeu" },
        },
    }),

    "infinite-creation": localizedProject({
        createdAt:"2025-01-27",
        tags:["informatique", "socket", "chess", "database"],
        coverImage:"/projects/infinite-creation/landing.png",
        header:{
            title:"Infinite creation",
            description:"This is a showcase website i made for someone who was selling custom items (mugs, shirt, etc..)",
        },
        url:"https://infinite-creation-theta.vercel.app/",
        main:{
            content:[
                {type:"img",alt:"Landing",url:"/projects/infinite-creation/main.png"},
                {type:"linkList",title:"",content:[
                    {title:"Website url's",url:"https://infinite-creation-theta.vercel.app/"},
                ]},
                
            ]
        }
    }, {
        header: {
            title: "Infinite Creation",
            description: "Un site vitrine que j'ai créé pour une personne qui vendait des objets personnalisés, comme des mugs et des t-shirts.",
        },
        content: {
            0: { alt: "Page d'accueil d'Infinite Creation" },
            1: { title: "Liens", links: [{ title: "Site web", url: "https://infinite-creation-theta.vercel.app/" }] },
        },
    }),

    "electronique_chessboard": localizedProject({
        createdAt:"2026-03-25",
        tags:["informatique", "electronique", "chess"],
        coverImage:"/projects/electronique_chessboard/cover.png",
        header:{
            title:"Electronique Chessboard",
            description:"This is a work in progress project, the idea is to create a chessboard with sensors and display that would allow you to play online with other people OTB (on the board)",
        },
        main:{
            content:[
                {type:"img",alt:"Landing",url:"/projects/electronique_chessboard/cover.png"},

                {type:"str",text:"As said, this project is still in progress and i will update the blog as i continue to work on it."},

                {type:"str",text:"I started by searching for exactly what i would need :"},
                {type:"str",text:"For the sensors, i needed something very cheap because i was going to use a lot, i settled with A3144 hall effect sensor"},
                {type:"str",text:"For the LED's i chosed to use adressable WS2B LED"},
                {type:"str",text:"And for the Micro controller i took a raspberry Pi Pico WH mecause it has a lot of pins which was the main factor for the matrix, i might also use an ESP32 later on"},


                {type:"list",title:"What i used for this project :",content:[
                    "A3144 Hall effect sensor (x64)",
                    "Adressable LEDS (x81)",
                    "Raspberry pi pico",
                    "Chessboard as a base for the project",
                    "Small screen to display stats during a game",
                ]},

                {type:"str",text:"I started by wiring all of the 64 A3144, but then i figured out that i would actually need a level shifter between the raspberry and the sensors because they run on 5V and the raspberry in 3.3V"},
                {type:"str",text:"I now need to make the full electrical shema and start to test the converter using a battery"},


                {type:"list",title:"What i learned during this project :",content:[
                    "Embeded technologie",
                    "Matrix reading of hall effect sensor",
                    "Wiring of multiple adressable LED",
                    "Matrix reading of data using a microcontroller",
                    "Handling different Voltage in a single circuit using converter and step",
                ]},
                {type:"linkList",title:"Usefull links",content:[
                    {title:"Volt and nerd",url:"https://"},
                    {title:"Inspiration",url:"https://"},
                ]},
            ]
        }
    }, {
        header: {
            title: "Échiquier électronique",
            description: "Ce projet est en cours de réalisation. L'idée est de créer un échiquier équipé de capteurs et d'un écran pour jouer en ligne face à face, autour du plateau.",
        },
        content: {
            0: { alt: "Échiquier électronique en cours de conception" },
            1: { text: "Comme indiqué, ce projet est toujours en cours. Je mettrai le journal à jour au fil de son avancement." },
            2: { text: "J'ai commencé par chercher précisément les composants dont j'aurais besoin." },
            3: { text: "Pour les capteurs, il me fallait un modèle très bon marché puisque j'en utiliserais beaucoup. J'ai choisi le capteur à effet Hall A3144." },
            4: { text: "Pour les LED, j'ai choisi des LED adressables WS2812B." },
            5: { text: "J'ai choisi un Raspberry Pi Pico WH comme microcontrôleur, car il possède de nombreuses broches, un critère essentiel pour la matrice. J'envisage aussi d'utiliser un ESP32 par la suite." },
            6: { title: "Composants utilisés", content: [
                "64 capteurs à effet Hall A3144",
                "81 LED adressables",
                "Raspberry Pi Pico",
                "Échiquier servant de base au projet",
                "Petit écran pour afficher les statistiques d'une partie",
            ] },
            7: { text: "J'ai commencé à câbler les 64 capteurs A3144, puis j'ai compris qu'il me faudrait un convertisseur de niveau entre le Raspberry Pi et les capteurs : ils fonctionnent en 5 V, tandis que le Raspberry Pi utilise du 3,3 V." },
            8: { text: "Il me reste à réaliser le schéma électrique complet et à commencer les tests du convertisseur avec une batterie." },
            9: { title: "Ce que j'ai appris", content: [
                "Technologies embarquées",
                "Lecture matricielle de capteurs à effet Hall",
                "Câblage de plusieurs LED adressables",
                "Lecture matricielle de données avec un microcontrôleur",
                "Gestion de différentes tensions dans un même circuit avec des convertisseurs",
            ] },
            10: { title: "Liens utiles", links: [
                { title: "Volt and Nerd", url: "https://" },
                { title: "Inspiration", url: "https://" },
            ] },
        },
    }),

    "perceptron": localizedProject({
        createdAt:"2026-10-08",
        tags:["informatique", "AI", "C"],
        coverImage:"/projects/perceptron/cover.png",
        header:{
            title:"Perceptron",
            description:"This was initially a school project, but i decided to push it further to test my capacity, it is still in progress",
        },
        main:{
            content:[
                {type:"img",alt:"Landing",url:"/projects/perceptron/network/neural_network.png"},

                {type:"str",text:"The idea behind this project was to learn about AI, how does a neuronne work, and how to connect them in a network in order to solve non linear problems. The project was built almost entirely in C and is available on my GitHub"},

                {type:"str",text:"The first step was to build a Perceptron"},
                {type:"str",style:["big","bold"],text:"What is a perceptron ?"},
                {type:"str",text:"It is basically a single artificial neuronne, it can solve basic linear problems, it take a certain number of inputs and output a float"},
                {type:"str",style:["big","bold"],text:"How do it work ?"},
                {type:"str",text:"The idea between a Perceptron is really simple, way simpler than we might think.\nBasically the idea is that the Perceptron will output the sum of each input multiplied by a weight + a bias\nTo start with, we will only look at sigmoid output perceptrons, meaning the ouput is passed through a sigmoid func\nz = X1*W1 + X2*W2 + ... + Xi*Wi + b\ny = sigmoid(z)\nwhere Xi are the inputs, Wi the weights and b the Bias\nThen if it is >0.5 you say it is true, <0.5 false, and you compare it with the label of your data"},
                {type:"str",style:["big","bold"],text:"How do you actually train a Perceptron ?"},
                {type:"str",text:"It is pretty straigth-forward, if you wanna train your perceptron on a certain dataset, you start by spliting it in two, a train part that you train it on and a second part to test the abbility of the model to predict new data, then you test all the data in your training set on your perceptron, and you ajust the weights and bias of the Perceptron depending on the delta between the output of the perceptron and the output you wanted\nThe formula used to edit bias and weights is :\nfor each weight i :  w_i <- w_i + lr * (label - y) * x_i\nbiais :                b   <- b   + lr * (label - y)\nAnd repeat for as much cycle as you want/need\nYou also want to shuffle your dataset at each cycle otherwise your perceptron might prioritize certain data because of the order"},
                {type:"str",style:["bold"],text:"How do you test your perceptron on a dataset ?"},
                {type:"str",text:"The easiest way to test it is by simply running it through your test dataset, if the output of the perceptron predicted the label well, you count it, then you just make a probability and you get an accuracy which is the % of data that the perceptron predicted correctly"},
                {type:"str",text:"The flaws with this way of calculating accuracy :"},
                {type:"str",text:"For exemple if your dataset only contain data which label are 1, a perceptron which return only 1 will have 100% accuracy but will not have learned anything\nHow to correct it ?\nThe basic way of fixing this issue and have a better reading of data is to use the confusion matrix of your perceptron\nThe idea is that, instead of just counting the amount of correct predictions, you are counting :\nFP : False positive\nFN : False Negative\nTP : True positive\nTN : True negative\nIf your Perceptron have 90 True positive, 10 False positive, 0TN, 0FN, It means it only predict 1, and your dataset is 90% 1 so it get a 90% accuracy"},

                {type:"str",text:"With that in mind, it is time to start coding our perceptron, the idea being very simple, the main thing we will have to worry about is just to allocate all the memory correctly because we will be working in C."},

                {type:"str",text:"After coding the basic perceptron in C, i created a secondary C program that allow me to run my perceptron with a lot of different parameters and then put the output in a csv file, the idea being to be able to make a graph out of it"},

                {type:"str",text:"It is pretty hard to visualise the data well on this first part because we use a dataset champignons.csv which contain only 40data, meaning that the testing set does not contain a lot of data, so we can really make a usefull graph.\nThe best option i found was to use a heatmap to display a bit more things"},

                {type:"img",alt:"Landing",url:"/projects/perceptron/perceptron/heatmap2.png"},
                {type:"str",text:"Number of cycle needed to reach the maximum accuracy depending on the ratio(Training set / Testing set) and the learning rate (lr)"},

                {type:"str",text:"What we can see here (even with not much data). If the ratio is very hight (0.9) meaning 90% of the data goes in training set and 10% in testing, we see that it converge really fast, that is because the dataset used is so small, here, 0.9 ratio mean only 4datas in testing set, so even with just random searching it will likely land on a 100% pretty fast.\nWhat is still interesting even if the data is not representative :\nWe clearly see that in most case, the higher the lr the faster it will converge to the best accuracy.\nWhat we dont see :\nA lr too hight will also result in an accuracy that will oscilate a lot and never reach a trully stable final accuracy. That is why, later in the project we are going to fix it by making the learning rate decrease as cycles pass."},

                {type:"str",style:["big","bold"],text:"Next step : The network"},

                {type:"str",text:"Now that the Perceptron work individually, can solve easy problem, and that we have a good idea of how it work, we are going to try to connect multiple neuronns together to solve harder problems"},

                {type:"str",style:["bold"],text:"The limitation of single neuron :"},
                {type:"str",text:"The issue with a single neuron being that it use the ponderated sum of the data in, so it will never be able to solve non linear problems. For exemple, running my single perceptron on a pretty simple non linear problem (easy spiral), it start a 49.5% accuracy, and after 100k cycle, it reach 54% so it likely didnt learned anything, we clearly see the limitation of the single perceptron"},
                {type:"str",text:"non-linear problems being for exemple : \nCircle : because the equation of a circle is x^2 + y^2 = 1, a system using equations similar to a perceptron will not be able to solve it\nSpiral : For similar reason, the equation of the spiral is even more complicated as a circle, it will be impossible for a Perceptron to solve it."},
                {type:"str",text:"The idea behind a network :"},
                {type:"img",alt:'Neural network representation',url:"/projects/perceptron/network/neural_network.png"},
                {type:"str",text:"You position the neurons in layers, input layer (usually as much neurons as inputs in your data), hidden layers with an arbitraty numbers of neurons, and output with one neuron.\nEach neurons take as inputs the outputs of All the neurons of the last layer."},

                {type:"str",text:"Those are the charts i was eable to draw using the network i created on a complicated spiral problem"},
                {type:'img',url:'/projects/perceptron/network/courbes_acc_moyenne.png',alt:'Courbe'},
                {type:'img',url:'/projects/perceptron/network/courbes_acc_par_run.png',alt:'Courbe2'},
                {type:"str",text:"We clearly see that 4neurones can not solve this, 8might be a bit better if ran on a bit more cycles, and 16 can definitely solve it quite easily\nTho 32 perceptron per layer get the best results. We also see that having 2 hidden layers is not nescecary the best for these kind of problems, because it will need much more time to reach stability and a good accuracy."},



                {type:"list",title:"Skills used in the project :",content:[
                    "Memory allocation (C)",
                    "Knowledge of the way a Perceptron and a basic neuron network work",
                    "Data analysis",
                    "Collecting data and visualising it as a graph",
                    "Usage of debuging tools for C (gdb,Valgrind)",
                ]},

                {type:"linkList",title:"Usefull links",content:[
                    {title:"Perceptron GitHub :",url:"https://github.com/Yokachii/perceptron"},
                    {title:"Perceptron network GitHub :",url:"https://github.com/Yokachii/Perceptron_network"},
                ]},
            ]
        }
    }, {
        header: {
            title: "Perceptron",
            description: "À l'origine, c'était un projet scolaire. J'ai décidé de l'approfondir pour me mettre à l'épreuve ; il est toujours en cours.",
        },
        content: {
            0: { alt: "Représentation d'un réseau de neurones" },
            1: { text: "L'objectif de ce projet était de découvrir l'intelligence artificielle : comprendre le fonctionnement d'un neurone et apprendre à les relier en réseau pour résoudre des problèmes non linéaires. Le projet est presque entièrement écrit en C et est disponible sur mon GitHub." },
            2: { text: "La première étape a été de construire un perceptron." },
            3: { text: "Qu'est-ce qu'un perceptron ?" },
            4: { text: "Un perceptron est un neurone artificiel unique. Il peut résoudre des problèmes linéaires simples : il reçoit plusieurs entrées et produit un nombre décimal." },
            5: { text: "Comment fonctionne-t-il ?" },
            6: { text: "L'idée derrière un perceptron est très simple.\nIl calcule la somme de chaque entrée multipliée par son poids, à laquelle il ajoute un biais.\nDans un premier temps, je me concentre sur les perceptrons dont la sortie passe par une fonction sigmoïde :\nz = X1*W1 + X2*W2 + ... + Xi*Wi + b\ny = sigmoid(z)\nXi représente les entrées, Wi les poids et b le biais.\nSi la sortie est supérieure à 0,5, on la considère comme vraie ; si elle est inférieure à 0,5, elle est fausse. On la compare ensuite à l'étiquette de la donnée." },
            7: { text: "Comment entraîner un perceptron ?" },
            8: { text: "La méthode est assez directe. Pour entraîner le perceptron sur un jeu de données, on sépare celui-ci en deux parties : une base d'entraînement et une base de test qui servira à évaluer sa capacité à prédire de nouvelles données. On fait passer les données d'entraînement dans le perceptron, puis on ajuste ses poids et son biais en fonction de l'écart entre la sortie obtenue et celle attendue.\nLes formules de mise à jour des poids et du biais sont :\npour chaque poids i :  w_i <- w_i + lr * (label - y) * x_i\nbiais :                b   <- b   + lr * (label - y)\nOn répète ces opérations autant de cycles que nécessaire.\nIl faut aussi mélanger les données à chaque cycle, sinon le perceptron risque de privilégier certaines d'entre elles en raison de leur ordre." },
            9: { text: "Comment tester un perceptron sur un jeu de données ?" },
            10: { text: "La méthode la plus simple consiste à lui présenter les données de test. On compte le nombre de prédictions correctes, puis on le rapporte au nombre total de données pour obtenir la précision du modèle." },
            11: { text: "Les limites de cette façon de calculer la précision :" },
            12: { text: "Par exemple, si toutes les étiquettes du jeu de données valent 1, un perceptron qui renvoie toujours 1 atteindra une précision de 100 % sans rien avoir appris.\nComment éviter cela ?\nLa matrice de confusion permet de mieux analyser les résultats. Au lieu de compter uniquement les prédictions correctes, on distingue :\nFP : faux positifs\nFN : faux négatifs\nTP : vrais positifs\nTN : vrais négatifs\nSi le perceptron obtient 90 vrais positifs, 10 faux positifs, 0 vrai négatif et 0 faux négatif, il ne prédit que 1. Si 90 % des données valent 1, il atteint pourtant 90 % de précision." },
            13: { text: "Avec ces notions en tête, je peux commencer à coder le perceptron. L'idée est simple ; le principal défi sera de gérer correctement la mémoire, puisque le programme est écrit en C." },
            14: { text: "Après avoir codé le perceptron de base en C, j'ai créé un second programme en C pour le tester avec de nombreux paramètres et enregistrer les résultats dans un fichier CSV, afin de pouvoir les représenter sous forme de graphique." },
            15: { text: "Il est difficile de bien visualiser les résultats de cette première partie, car le jeu de données champignons.csv ne contient que 40 éléments. L'ensemble de test est donc très petit et ne permet pas de produire un graphique vraiment représentatif.\nLa meilleure solution que j'ai trouvée a été d'utiliser une carte de chaleur pour afficher davantage d'informations." },
            16: { alt: "Carte de chaleur des résultats du perceptron" },
            17: { text: "Nombre de cycles nécessaires pour atteindre la précision maximale selon le ratio entre les données d'entraînement et de test, et le taux d'apprentissage (lr)." },
            18: { text: "Même avec peu de données, on observe que lorsque le ratio est élevé (0,9), 90 % des données servent à l'entraînement et 10 % aux tests. La convergence est alors très rapide, car le jeu de données est minuscule : avec un ratio de 0,9, l'ensemble de test ne contient que quatre éléments. Même une recherche aléatoire peut donc rapidement atteindre 100 %.\nCe qui reste intéressant malgré le manque de représentativité :\nDans la plupart des cas, plus le taux d'apprentissage est élevé, plus la convergence vers la meilleure précision est rapide.\nCe que le graphique ne montre pas :\nUn taux d'apprentissage trop élevé fait aussi beaucoup varier la précision et peut empêcher le modèle d'atteindre une valeur finale stable. Plus tard dans le projet, je corrigerai cela en diminuant le taux d'apprentissage au fil des cycles." },
            19: { text: "Étape suivante : le réseau" },
            20: { text: "Maintenant que le perceptron fonctionne seul, qu'il peut résoudre des problèmes simples et que son fonctionnement est mieux compris, je vais relier plusieurs neurones pour résoudre des problèmes plus complexes." },
            21: { text: "La limite d'un neurone seul :" },
            22: { text: "Un neurone seul utilise une somme pondérée de ses données d'entrée et ne peut donc pas résoudre de problèmes non linéaires. Par exemple, mon perceptron simple commence à 49,5 % de précision sur un problème de spirale assez facile. Après 100 000 cycles, il atteint seulement 54 % : il n'a probablement rien appris. La limite du perceptron seul est claire." },
            23: { text: "Voici quelques exemples de problèmes non linéaires :\nCercle : l'équation d'un cercle est x^2 + y^2 = 1. Un système reposant sur des équations de type perceptron ne peut pas le résoudre.\nSpirale : pour la même raison, l'équation d'une spirale est encore plus complexe et un perceptron seul ne peut pas la résoudre." },
            24: { text: "Le principe d'un réseau :" },
            25: { alt: "Schéma d'un réseau de neurones" },
            26: { text: "Les neurones sont organisés en couches : une couche d'entrée (généralement autant de neurones que de variables dans les données), une ou plusieurs couches cachées comprenant un nombre arbitraire de neurones, puis une couche de sortie avec un neurone.\nChaque neurone reçoit en entrée les sorties de tous les neurones de la couche précédente." },
            27: { text: "Voici les graphiques que j'ai pu générer avec le réseau que j'ai créé pour résoudre un problème de spirale complexe." },
            28: { alt: "Courbe de précision moyenne du réseau" },
            29: { alt: "Courbes de précision par exécution" },
            30: { text: "On voit clairement que quatre neurones ne suffisent pas. Avec huit neurones, le résultat pourrait être meilleur en augmentant le nombre de cycles, tandis que seize neurones résolvent le problème assez facilement.\nCependant, 32 perceptrons par couche donnent les meilleurs résultats. On observe aussi que deux couches cachées ne sont pas forcément préférables pour ce type de problème : il faut beaucoup plus de temps pour atteindre la stabilité et une bonne précision." },
            31: { title: "Compétences mobilisées", content: [
                "Gestion de la mémoire en C",
                "Compréhension du fonctionnement des perceptrons et des réseaux de neurones simples",
                "Analyse de données",
                "Collecte de données et visualisation sous forme de graphiques",
                "Utilisation d'outils de débogage C (gdb, Valgrind)",
            ] },
            32: { title: "Liens utiles", links: [
                { title: "Dépôt GitHub du perceptron", url: "https://github.com/Yokachii/perceptron" },
                { title: "Dépôt GitHub du réseau de perceptrons", url: "https://github.com/Yokachii/Perceptron_network" },
            ] },
        },
    }),


    // Infinite creation
    // Chess
    // RAT1
    // Contra Burreau
    // Message App
}