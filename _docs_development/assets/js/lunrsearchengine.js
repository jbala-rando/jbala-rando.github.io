
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
    "url": "/circuits-randonnées",
    "title": "دوائر المشي لمسافات طويلة",
    "body": "      دوائر المشي لمسافات طويلة:     {% for circuit_randonnee in site. circuits_randonnees %} {% include circuits_randonnees_box. html %} {% endfor %}   "
    }, {
    "id": 4,
    "url": "/",
    "title": "Accueil",
    "body": "{% if page. url == “/” %}       مقالات جديدة:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       مقالات:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 5,
    "url": "/inscription",
    "title": "Inscription",
    "body": "InscriptionEn cours de construction "
    }, {
    "id": 6,
    "url": "/itineraires",
    "title": "Nos activités",
    "body": "{% for itinerarie in site. data. sorties %}{{itinerarie[“إسم الخرجة”]}}{{itinerarie[“مؤطر الخرجة”]}}{{itinerarie[“صعوبة المسار”]}}{{itinerarie[“موثق الخرجة”]}} {% endfor %}       سهل:     {% for activity in site. itineraries %} {% if activity. difficulty == 'سهل'  %} {% include itinerarybox. html %} {% endif %} {% endfor %}         سهل إلى متوسط:     {% for activity in site. itineraries %} {% if activity. difficulty == 'سهل إلى متوسط'  %} {% include itinerarybox. html %} {% endif %} {% endfor %}         متوسط :     {% for activity in site. itineraries %} {% if activity. difficulty == 'متوسط'  %} {% include itinerarybox. html %} {% endif %} {% endfor %}          متوسط إلى صعب   :     {% for activity in site. itineraries %} {% if activity. difficulty == 'متوسط إلى صعب'  %} {% include itinerarybox. html %} {% endif %} {% endfor %}         صعب :     {% for activity in site. itineraries %} {% if activity. difficulty == 'صعب'  %} {% include itinerarybox. html %} {% endif %} {% endfor %}   "
    }, {
    "id": 7,
    "url": "/membres",
    "title": "Membres",
    "body": "Membres de clubNotre club a plus de 150 membres classé par trois niveaux Niveau Blanc: Un membre blanc est un membre débutant en programmation et qui n’a pas un portfolio numérique. Niveau Vert: Un membre vert est un membre qui a déjà un projet fonctionnelle sur son portfolio. Niveau Bleu: Un membre bleu est un membre qui a déjà un portfolio avec deux projet en minimum. "
    }, {
    "id": 8,
    "url": "/portfolio-technoligies",
    "title": "Mes réalisations",
    "body": "{% assign technologies = ‘’ | split: ‘’ %}{% for project in site. projects %}{% assign technologies = technologies | concat: project. technologies  %}{% endfor %} {% for technologie in technologies %}       &lt;h2 id= {{ technologie | replace:    , -  | replace:  .  , -  }} &gt;{{ technologie }}&lt;/h2&gt;     {% for project in site. projects %} {% if project. technologies contains technologie  %} {% include projectbox. html %} {% endif %} {% endfor %}   {% endfor %} "
    }, {
    "id": 9,
    "url": "/sorties/21102022-210305/",
    "title": "21/10/2022 21:03:05",
    "body": "                                         {{ page. Horodateur }}      {{ page[ مؤطر الخرجة ] }}            "
    }, {
    "id": 10,
    "url": "/sorties/21102022-224151/",
    "title": "21/10/2022 22:41:51",
    "body": "                                         {{ page. Horodateur }}      {{ page[ مؤطر الخرجة ] }}            "
    }, {
    "id": 11,
    "url": "/sorties/22102022-175445/",
    "title": "22/10/2022 17:54:45",
    "body": "                                         {{ page. Horodateur }}      {{ page[ مؤطر الخرجة ] }}            "
    }, {
    "id": 12,
    "url": "/sorties/24102022-204225/",
    "title": "24/10/2022 20:42:25",
    "body": "                                         {{ page. Horodateur }}      {{ page[ مؤطر الخرجة ] }}            "
    }, {
    "id": 13,
    "url": "/sorties/24102022-205954/",
    "title": "24/10/2022 20:59:54",
    "body": "                                         {{ page. Horodateur }}      {{ page[ مؤطر الخرجة ] }}            "
    }, {
    "id": 14,
    "url": "/sorties/24102022-210845/",
    "title": "24/10/2022 21:08:45",
    "body": "                                         {{ page. Horodateur }}      {{ page[ مؤطر الخرجة ] }}            "
    }, {
    "id": 15,
    "url": "/sorties/24102022-212924/",
    "title": "24/10/2022 21:29:24",
    "body": "                                         {{ page. Horodateur }}      {{ page[ مؤطر الخرجة ] }}            "
    }, {
    "id": 16,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 17,
    "url": "/droit-interne-du-groupe-jbala-rando/",
    "title": "القانون الداخلي لمجموعة جبالة راندو",
    "body": "2022/10/23 - القانون الداخلي لمجموعة جبالة راندو: #JBALA_RANDO مجموعة لا تدعي التميز ولكن التميز يرتبط بإسمها، مجموعة شبابية يجمعها شغف المغامرة وحب السفر و الترحال.  ولكي تبقى المجموعة متميزة ودائمة الافادة يجب علينا الاتزام بالقوانين التنظيمية الداخلية لها:  أولا: المجموعة للجميع وليس لشخص معين.  ثانيا: إحترام الأعضاء واجب وضروري وأي شخص لا يحترم هذا القانون يحذف مباشرة.  ثالثا: مناقشة مواضيع لها علاقة بالترحال و التسلق الجبلي وأي رياضة لها علاقة بهذا المجال باحترام وتقبل الرأي الآخر بكل روح رياضية.  رابعا: نشر المنشور مع الوصف أو العنوان وأي موضوع مخالف للرياضة والسياحة الجبلية غير مسموح به داخل المجموعة.  خامسا: عدم نشر الاشهارات التجارية الخاصة بالصفحات وباقي المجموعات الأخرى.  سادسا: تجنب النقاشات الثنائية والدينية والسياسية والحزبية … سابعا: من لا يريد أن تنشر صوره 📷 مع المجموعة عليه الامتناع عن أخذ صور جماعية.  ثامنا: الالتزام ب مواعيد الرحلة وأي شخص ألغى مقعده في اليوم الذي يسبق اليوم المحدد للرحلة يجب عليه أن يدفع ثمن المشاركة. الهدف من إنشاء المجموعة . . الافادة والاستفادة . . مشاركة الأعضاء المسارات والرحلات . . مشاركة الاعضاء المعدات الخاصة بالترحال . . الإجابة على الاستفسارات المتعلقة بالرياضات الجبليةوالقيام بأعمال تطوعية لفائدة ساكنة القرى الجبلية الهشة. "
    }];

var idx = lunr(function () {
    this.use(lunr.ar);
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