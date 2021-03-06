//Javascripts scripte for the quizz 
var quiztitle = "Quizz";

var progressBarValue = 0
          
var progressBarWidth,progressBarDelay,progressBarCount,progressBarBorderWidth=0,progressBarFG='#ff7638',progressBarBG='#1a7fb3',progressBarBorderColor='#000000';

var quiz = [
        {
            "question" : "Q1: Tout ça c’est de la faute du vieux professeur Barban, qu’a mis de l’huile sur le feu avec ses grandes phrases à la noix. A ton avis qu’est–ce qu’il leur a dit pour les exciter comme çà… ?",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices" : [
                            "Savez-vous que demain Paris remontera toute la Seine et s’étendra jusqu’au Havre !?",
                            "Semaine prochaine, exposé : le Grand Paris, qu’est-ce que ça va changer ?",
                            "Le Grand Paris ça n’existe pas !"
                        ],
            "correct" : "Semaine prochaine, exposé : le Grand Paris, qu’est-ce que ça va changer ?",
            "explanation ": "Le grand Paris existe-t-il ? En tout cas il est en train de se faire. Certains y voient la fin des banlieues de Paris. D’autres aimeraient que Paris aille jusqu’au Havre. Tout çà n’est ni faux ni vrai. La réponse la plus sûre c’est… que semaine prochaine y a interro !",
        },
        {
            "question" : "Q2: Du coup tout le monde s’y met. Selon Ludivine, le Grand Paris c'est la transformation de l’Île-de-France en une seule ville, le Grand Paris. T’en penses quoi ?",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices" : [
                    "L'Île de France... C'est quoi ?",
                    "Elle a en partie raison",
                    "C’est totalement faux !"
                        ],
             "correct" : "C’est totalement faux !",
             "explanation" : "L’Ile de France c’est une Région. Le Grand Paris ce sera une métropole c’est à dire un regroupement des villes des 3 départements de la petite couronne (92, 93, 94) et de Paris(75).",
        },
        {
           "question" : "Q3: Mince alors !! Jean a perdu son livret de présentation du Grand Paris. Lui qui voulait impressionner ses potes en annonçant la date de lancement de la métropole du Grand Paris !! D’après toi, laquelle de ces dates est la bonne?",
           
           "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
           "choices" : [
                    "1 janvier 2016",
                    "1 janvier 2017",
                    "1 janvier 2018"
                        ],
            "correct" : "1 janvier 2016",
            "explanation" : "La création de la métropole est prévue pour le 1er janvier 2016. C’est une loi très récente, la loi Maptam votée en décembre 2013, qui l’a décidée ",
        },
        {
            "question" : "Q4: Anna cherche désespérément comment s'appelle le nouveau métro automatique du Grand Paris. A ton avis, tu dirais quoi toi ? ",
            
             "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices"  : [
                    "L'Autometro",
                    "Le Grand Paris Express",
                    "Le Pari'Metro"
                        ],
             "correct" : "Le Grand Paris Express",
             "explanation" : "Le Grand Paris ce sera aussi un nouveau grand réseau de transport en commun : le Grand Paris Express. Métro entièrement automatique, il dessinera un grand 8 autour de Paris avec 205 km de voies et 72 nouvelles gares.",
        },
        {
            "question" : "Q5: Mamadou qui cherche un appartement depuis 5 ans se demande si avec la Métropole du Grand Paris, il y aura plus de logement. Tu sais ça toi : combien de logements par année la métropole construira t-elle ?",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices" : [
                    "50 000 logements",
                    "70 000 logements",
                    "100 000 logements"
                         ],
            "correct" : "70 000 logements",
            "explanation" : "Le Grand Paris prévoit de construire 70 000 logements par année. Soit le double de ce qui est construit actuellement. C’est l’objectif mais y parviendra-t-elle ? pourrait te répondre Mamadou. ",
        },
        {
            "question" : "Q6 : Nolwen et Mouloud débattent pour savoir qui a eu cette idée folle du grand Paris. D'après Nolwen c'est à Nicolas Sarkozy que l'on doit cette idée. Mouloud est certain que c'est l'un de ces hommes : lequel ?",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices"  : [
                    "Louis XIV",
                    "Napoléon III",
                    "François Hollande"
                          ],
             "correct" : "Napoléon III",
             "explanation" : "Même si c'est Nicolas Sarkozy qui l'a remise au goût du jour, l'idée de base est née sous Napoléon III d'après les plans du baron Haussman : il imaginait déjà étendre la capitale depuis Saint-Germain-en-Laye à l'ouest, à Marne-la-Vallée à l'est : le grand paris d’aujourd’hui ne va pas aussi loin.",
        },
        {
            "question" : "Q7 : Abdou en est persuadé : le professeur Barban va demander d’expliquer pourquoi faire le Grand Paris ? A ton avis qui a raison ?",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices"  : [
                    "Ludivine pense que c'est parce qu'il faut rééquilibrer l'économie en Île de France.",
                    "Mouloud est sûr à 100% que c'est parce que la banlieue c'est moche donc faut la dissoudre dans Paris qui est plus beau !",
                    "Samira a étudié l'histoire, elle dit que c'est parce que depuis toujours dans l'histoire Paris s'étend."
                          ],
            "correct" : "Samira a étudié l'histoire, elle dit que c'est parce que depuis toujours dans l'histoire Paris s'étend.",
            "explanation" : "Paris en effet s'est toujours construite par ajouts successifs de territoires et de communes alentours, au moins jusqu’au XIXème siècle.",
        },
        {
            "question" : "Q8 : Mais Ludivine persiste et signe et ça relance encore le débat… et toi tu dirais que c’est qui qu’a raison cette fois ?",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices"  : [
                    "Ludivine ajoute que c’est pour être plus fort économiquement que les autres capitales du monde",
                    "Lee pense que c’est juste une question de pouvoir ",
                    "Tous les 2 ont raison !"
                         ],
            "correct" : "Tous les 2 ont raison !",
            "explanation": "Il y a plusieurs explications : le problème économique, celui des transports, du logement et du pouvoir (qui décide de quoi ?) sont aussi importants, ce sont les 4 enjeux les plus fréquemment cités pour justifier la construction du Grand Paris. D’autres pensent que ce sont avant tout les questions d’environnement et d’inégalités qui sont importantes.",
        },
        {
            "question" : "Q9 : Antoine lui n’est pas d’accord du tout. Il pense que tout ça c’est du flan. A ton avis pourquoi ?",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices"  : [
                    "Il dit que c’est magouille politique et compagnie.",
                    "Il a trouvé un logement facilement lui !",
                    "Il pense que le Grand Paris ça va rien changer aux inégalités."
                         ],
            "correct" : "Il pense que le Grand Paris ça va rien changer aux inégalités.",
            "explanation" : "Le Grand Paris opposent souvent ceux qui sont pour et ceux qui sont contre. Ceux qui sont contre pensent souvent que ça va rien changer aux inégalités sociales, au contraire. Pour en savoir plus à la question « pourquoi le grand paris ? » et les arguments pour et contre ouvre la pop-up.",
        },
        {
            "question" : "Q10: Selon Rosa, avec le Grand Paris Express il y aura 7 nouvelles lignes de métro automatique pour le métro parisien. Et d'après-vous ?",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices" : [
                                    "4",
                                    "6",
                                    "12"
                                ],
            "correct"   :   "4",
            "explanation" :   "Le nouveau réseau de transport apportera 4 nouvelles lignes de métro automatique autour de Paris : les lignes 15, 16, 17, 18.",
        },
        {
            "question" : "Q11: Jean dit qu’il doit se rendre à l'aéroport d'Orly depuis Saint-Denis. Il prétend qu'avec le Grand Paris Express il pourra le faire avec un seul ticket",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices" : [
                                    "Non, il en faudrait au moins 2 répond Abdou",
                                    "Jasmine assure que ce sera possible.",
                                    "Au fait c'est quoi l'intérêt si je prends jamais l'avion ? demande Eliot."
                                ],
            "correct"   :   "Jasmine assure que ce sera possible.",
            "explanation" :   "Le nouveau réseau de transport prévoit en dehors des 4 nouvelles lignes de métro, le prolongement de la ligne 11 jusqu’à Noisy Champs et… celui de la ligne 14 de St Denis Pleyel jusqu’à Orly à l’horizon… 2027 !",
        },
        {
            "question" : "Q12: D’après Amin en 2016, révolution dans les transports : ça sera la fin des zones ! Avec le Grand Paris il n’y aura plus qu’une seule zone ! Tu lui réponds quoi toi ?",
            
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices" : [
                                    "Calomnie, ça va pas non ! Les zones, ça existera toujours.",
                                    "C’est possible mais c’est une décision qui appartient à la Région Île-de-France.",
                                    "Tout à fait, le 1er ministre l’a décidé."
                                ],
            "correct"   :   "C’est possible mais c’est une décision qui appartient à la Région Île-de-France.",
            "explanation" :   "Ce n’est pas le nouveau réseau de transport Grand Paris Express ni la Métropole du Grand Paris qui pourra décider de la fin des zones mais la Région Île-de-France qui dirige le STIF, le syndicat des transports de la région Île-de-France. C’est dans son programme et devrait être appliqué à la rentrée 2015 mais… ça coute très cher.",
        }
    ];

var currentquestion = 0,
    score = 0,
    submt = true,
    picked;

    $(document).ready(function(){
       $("#submitbutton").hide();

    function htmlEncode(value) {
        return $(document.createElement('div')).text(value).html();
    }
  
    function addChoices(choices) {
        if (typeof choices !== "undefined" && $.type(choices) == "array") {
            $('#choice-block').empty();
            for (var i = 0; i < choices.length; i++) {
                $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
            }
        }
    }

    function nextQuestion() {
        submt = true;
        //alert("nQ");
        $('#explanation').empty();
        $('#question').text(quiz[currentquestion]['question']);
        if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
            if ($('#question-image').length == 0) {
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
            } else {
                $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
            }
        } else {
            $('#question-image').remove();
        }
        addChoices(quiz[currentquestion]['choices']);
        setupButtons();
        progressBarValue = (Number(currentquestion + 1) / quiz.length) * 100
        dispProgressBar();
    }
    
    function processQuestion() {

        //alert(choice);
        currentquestion++;
        //alert(currentquestion);
        $("#submitbutton").hide();
            if (currentquestion == quiz.length) {
                endQuiz();
            } else {
                nextQuestion();
            }
    }


    function setupButtons() {
        $('.choice').on('mouseover', function () {
            $(this).css({
                'background-color': '#e1e1e1'
            });
        });
        $('.choice').on('mouseout', function () {
            $(this).css({
                'background-color': '#fff'
            });
        })
        $('.choice').on('click', function () {
            //alert("");
            choice = $(this).attr('data-index');
            $('.choice').removeAttr('style').off('mouseout mouseover');
            $(this).css({
                'border-color': '#222',
                'font-weight': 700,
                'background-color': '#c1c1c1'
            });
            if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
            $('.choice').eq(choice).css({
                'background-color': '#50D943'
            });
            $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            score++;
        } else {
            $('.choice').eq(choice).css({
                'background-color': '#D92623'
            });
            $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
        }
            $("#submitbutton").click(function(){
               alert("click");
                  $('.choice').off('click', choice);
                 $(this).off('click');
                 processQuestion(choice);
             });

            if (submt) {
                //alert("submit");
                submt = false;
                $('.choice').off('click');
                $(this).off('click');
                setTimeout(processQuestion,2000);
            }
        })
    }


    function endQuiz() {
        $('#explanation').empty();
        $('#question').empty();
        $('#choice-block').empty();
        $('#submitbutton').remove();
        $('#question').text("Vous avez " + score + "bonne(s) réponse(s) sur " + quiz.length + " réponses correctes.");
        $(document.createElement('h2')).css({
            'text-align': 'center',
            'font-size': '4em'
        }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');

        var result = Math.round(score / quiz.length * 100);
        var g = document.createElement('img');
            g.id = 'imgId';
            $(g).css({
            'height':'100px',
            'width': '300px',
            'margin-left':'40%'
        }).insertAfter('#explanation');

        if(result < 25){
            $("#imgId").attr("src","https://ouijarrive.files.wordpress.com/2014/12/image-drole-simpsons.jpg");
        }
        else if(result < 50){
            $("#imgId").attr("src","http://florence.apln-blog.fr/files/2014/12/5tqwzxik.gif");
        }
        else if(result < 100){
            $("#imgId").attr("src","http://www.mondespersistants.com/images/screenshots/World_of_Warcraft-306426517.jpg");
        }
        else if(result == 100){
            $("#imgId").attr("src","http://static.skynetblogs.be/media/42106/dyn007_original_351_345_gif__322f81be8c1209615f2355ad5619ac8b.gif");
        }
    }


    function init() {
        //add title
        if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
            $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
        } else {
            $(document.createElement('h1')).text("Quiz").appendTo('#frame');
        }

        //add pager and questions
        if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
            //add pager
            //$(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
            //add first question
            $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
            //add image if present
            if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
            }
            //questions holder
            $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

            //add choices
            addChoices(quiz[0]['choices']);
            $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#frame');
            setupButtons();
        }
    }

    init();
});