
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/activités",
    "title": "Nos activités",
    "body": "{% assign activitiesNatures = ‘’ | split: ‘’ %}{% for activity in site. activities %}{% assign activitiesNatures = activitiesNatures | concat: activity. activityNatures  %}{% endfor %} {% for activityNature in activitiesNatures %}       &lt;h2 id= {{ activityNature | replace:    , -  }} &gt;{{ activityNature }}&lt;/h2&gt;     {% for activity in site. activities %} {% if activity. activityNatures contains activityNature  %} {% include activitybox. html %} {% endif %} {% endfor %}   {% endfor %} "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Accueil",
    "body": "{% if page. url == “/” %}       Nouveaux articles:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       Articles:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 4,
    "url": "/inscription",
    "title": "Inscription",
    "body": "InscriptionToutes personne peut s’inscrire à notre club même les personnes qui n’habite pas à Tanger. Formulaire d’inscription: Pour devenir membre vous pouvez s’inscrire au formulaire d’inscription :  Formulaire d’inscription "
    }, {
    "id": 5,
    "url": "/membres",
    "title": "Membres",
    "body": "Membres de clubNotre club a plus de 150 membres classé par trois niveaux Niveau Blanc: Un membre blanc est un membre débutant en programmation et qui n’a pas un portfolio numérique. Niveau Vert: Un membre vert est un membre qui a déjà un projet fonctionnelle sur son portfolio. Niveau Bleu: Un membre bleu est un membre qui a déjà un portfolio avec deux projet en minimum. "
    }, {
    "id": 6,
    "url": "/portfolio-technoligies",
    "title": "Mes réalisations",
    "body": "{% assign technologies = ‘’ | split: ‘’ %}{% for project in site. projects %}{% assign technologies = technologies | concat: project. technologies  %}{% endfor %} {% for technologie in technologies %}       &lt;h2 id= {{ technologie | replace:    , -  | replace:  .  , -  }} &gt;{{ technologie }}&lt;/h2&gt;     {% for project in site. projects %} {% if project. technologies contains technologie  %} {% include projectbox. html %} {% endif %} {% endfor %}   {% endfor %} "
    }, {
    "id": 7,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 8,
    "url": "/rendez-vous-h%C3%A9bdomadaire/",
    "title": "Rendez-vous hebdomadaire",
    "body": "2021/06/25 - Chaque semaine nous vous propose une rencontre d’échange et de motivation. L’objectif et de répondre au questions des membres et suivre l’avancement de nos activités. Heure: Le rencontre aura lieu à google meet chaque vendredi à 20:00 h ( Maroc ). Lien de rencontre: Lien google meet "
    }, {
    "id": 9,
    "url": "/html/",
    "title": "Qu'est-ce que le HTML ?",
    "body": "2021/06/10 - Définition:    HTML signifie H yper T ext M arkup L anguage     HTML est le langage de balisage standard pour les pages Web     Les éléments HTML sont les blocs de construction des pages HTML     Les éléments HTML sont représentés par des balises &lt;&gt;  Références:  What is HTML?"
    }, {
    "id": 10,
    "url": "/css/",
    "title": "Qu'est-ce que le CSS ?",
    "body": "2021/06/10 -  CSS signifie feuilles de style en cascade CSS décrit comment les éléments HTML doivent être affichés à l’écran, sur papier ou dans d’autres médias CSS économise beaucoup de travail. Il peut contrôler la mise en page de plusieurs pages Web à la fois Les feuilles de style externes sont stockées dans des fichiers CSSRéférences:  CSS Introduction"
    }, {
    "id": 11,
    "url": "/lancement-club-au-centre-solicode/",
    "title": "Lancement du club au centre SoliCode",
    "body": "2021/06/04 - Nous somme heureux du lancement du club des développeurs informatique au centre centre solidaire digital SoliCode à Tanger le 04/06/2021. Dans notre première rencontre, nous avons discuté sur l’objectif de club à atteindre et les activités que nous pouvons réaliser dans le centre. Nous avons mis d’accord sur l’objectif principale de notre club qui est : l’insertion professionnelle. Nous avons mis d’accord sur deux activités :  Motivation des membre pour la création de leurs portfolio numérique.  Organisation d’une journée d’initiation à la programmation. Références:  solicode. co"
    }, {
    "id": 12,
    "url": "/notre-page-sur-github/",
    "title": "Notre page sur Github.com",
    "body": "2020/06/12 - Nous partageons avec vous notre page sur github. com. il contient tous les fichiers que nous avons utilisé durant nos activités. Références:  github. com/club-dev-info"
    }, {
    "id": 13,
    "url": "/formation-initiation-algorithme/",
    "title": "Formation initiation à l'algorithme et la programmation",
    "body": "2020/06/12 - Qu’est ce qu’un algorithme ?: Un programme est un code écrit par un programmeur pour être exécuter sur l’ordinateur afin de résoudre un problème de traitement d’information. Pour apprendre à programmer, nous commençons d’abord à apprendre la logique de l’ordinateur et comment il pense ou comment nous devons penser pour écrire de code compréhensible par l’ordinateur. Cette logique s’appelle “Algorithme”. Dans notre formation live, en ligne et gratuite pour les membres du club. Nous allons vous expliquer et entraîner sur la logique de l’ordinateur étape par étape. À la fin de cette formation vous serai capable d’écrire des programmes simples pour résoudre des problèmes de traitement d’information sur l’ordinateur. Aussi vous aurez une idée claire sur la programmation et sa logique, chose qui vous faciliterez la tâche d’apprentissage d’un langage de programmation. Programme de formation:  Introduction Comprendre l’ordinateur Algorithme et pseudo-code Variable et affectation Entrée et sortie Test et boucleInscription à la formation: Pour s’inscrire à la formation, il suffit de remplir le formulaire suivant : Formulaire d’inscription Nous allons vous envoyer un email content le lien de google meet au jour de la séance. Flayer: Références:  Lien de la formation sur Udemy"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});