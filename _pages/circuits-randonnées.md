---
layout: default
title:  دوائر المشي لمسافات طويلة
permalink: /circuits-randonnées
comments: false
---



<section class="recent-posts">
    <div class="section-title">
        <h2 id="facile"><span>دوائر المشي لمسافات طويلة</span></h2>
    </div>
    <div class="row listrecent">
 {% for circuit_randonnee in site.circuits_randonnees %}
 {% include circuits_randonnees_box.html %}
 {% endfor %} 
    </div>
</section>

