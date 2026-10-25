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
    "framework-picture":{
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
    },
    "hallay":{
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
    },

    "3d-engine":{
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
    },

    "ant-sim":{
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
                {type:"str",text:"This step completed i could start by soldering the pico to the pins so that it will not move when i will solder the rest"},

            ]
        }
    },

    "chess-game":{
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
    },

    "infinite-creation":{
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
    },

    "electronique_chessboard":{
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
    },

    "perceptron":{
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
    }, 


    // Infinite creation
    // Chess
    // RAT1
    // Contra Burreau
    // Message App
}