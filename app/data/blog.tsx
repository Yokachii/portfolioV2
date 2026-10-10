import { PageType } from "../types/blog";

export const blogsDatas:Record<string,PageType> = {
    "keypad1-4keys":{
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
    },

    "split-keyboard-1":{
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
                {type:"str",text:"This sted completed i could start by soldering the pico to the pins so that it will not move when i will solder the rest"},

            ]
        }
    }


    // 3D engine 23
    // Halay
    // Infinite creation
    // Chess
    // RAT1
    // Contra Burreau
    // Message App
}