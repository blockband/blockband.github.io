webpackJsonp([212],{541:function(e,a,t){!function(a,t){e.exports=t()}(0,function(){"use strict";return[{locale:"bs",pluralRuleFunction:function(e,a){var t=String(e).split("."),i=t[0],r=t[1]||"",o=!t[1],n=i.slice(-1),s=i.slice(-2),u=r.slice(-1),l=r.slice(-2);return a?"other":o&&1==n&&11!=s||1==u&&11!=l?"one":o&&n>=2&&n<=4&&(s<12||s>14)||u>=2&&u<=4&&(l<12||l>14)?"few":"other"},fields:{year:{displayName:"godina",relative:{0:"ove godine",1:"sljede\u0107e godine","-1":"pro\u0161le godine"},relativeTime:{future:{one:"za {0} godinu",few:"za {0} godine",other:"za {0} godina"},past:{one:"prije {0} godinu",few:"prije {0} godine",other:"prije {0} godina"}}},month:{displayName:"mjesec",relative:{0:"ovaj mjesec",1:"sljede\u0107i mjesec","-1":"pro\u0161li mjesec"},relativeTime:{future:{one:"za {0} mjesec",few:"za {0} mjeseca",other:"za {0} mjeseci"},past:{one:"prije {0} mjesec",few:"prije {0} mjeseca",other:"prije {0} mjeseci"}}},day:{displayName:"dan",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekju\u010der","-1":"ju\u010der"},relativeTime:{future:{one:"za {0} dan",few:"za {0} dana",other:"za {0} dana"},past:{one:"prije {0} dan",few:"prije {0} dana",other:"prije {0} dana"}}},hour:{displayName:"sat",relative:{0:"ovaj sat"},relativeTime:{future:{one:"za {0} sat",few:"za {0} sata",other:"za {0} sati"},past:{one:"prije {0} sat",few:"prije {0} sata",other:"prije {0} sati"}}},minute:{displayName:"minuta",relative:{0:"ova minuta"},relativeTime:{future:{one:"za {0} minutu",few:"za {0} minute",other:"za {0} minuta"},past:{one:"prije {0} minutu",few:"prije {0} minute",other:"prije {0} minuta"}}},second:{displayName:"sekunda",relative:{0:"sada"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekunde",other:"za {0} sekundi"},past:{one:"prije {0} sekundu",few:"prije {0} sekunde",other:"prije {0} sekundi"}}}}},{locale:"bs-Cyrl",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"\u0433\u043e\u0434\u0438\u043d\u0430",relative:{0:"\u041e\u0432\u0435 \u0433\u043e\u0434\u0438\u043d\u0435",1:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u0433\u043e\u0434\u0438\u043d\u0435","-1":"\u041f\u0440\u043e\u0448\u043b\u0435 \u0433\u043e\u0434\u0438\u043d\u0435"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0433\u043e\u0434\u0438\u043d\u0443",few:"\u0437\u0430 {0} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u0437\u0430 {0} \u0433\u043e\u0434\u0438\u043d\u0430"},past:{one:"\u043f\u0440\u0435 {0} \u0433\u043e\u0434\u0438\u043d\u0443",few:"\u043f\u0440\u0435 {0} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u043f\u0440\u0435 {0} \u0433\u043e\u0434\u0438\u043d\u0430"}}},month:{displayName:"\u043c\u0435\u0441\u0435\u0446",relative:{0:"\u041e\u0432\u043e\u0433 \u043c\u0435\u0441\u0435\u0446\u0430",1:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435\u0433 \u043c\u0435\u0441\u0435\u0446\u0430","-1":"\u041f\u0440\u043e\u0448\u043b\u043e\u0433 \u043c\u0435\u0441\u0435\u0446\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446",few:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446\u0430",other:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446\u0438"},past:{one:"\u043f\u0440\u0435 {0} \u043c\u0435\u0441\u0435\u0446",few:"\u043f\u0440\u0435 {0} \u043c\u0435\u0441\u0435\u0446\u0430",other:"\u043f\u0440\u0435 {0} \u043c\u0435\u0441\u0435\u0446\u0438"}}},day:{displayName:"\u0434\u0430\u043d",relative:{0:"\u0434\u0430\u043d\u0430\u0441",1:"\u0441\u0443\u0442\u0440\u0430",2:"\u043f\u0440\u0435\u043a\u043e\u0441\u0443\u0442\u0440\u0430","-2":"\u043f\u0440\u0435\u043a\u0458\u0443\u0447\u0435","-1":"\u0458\u0443\u0447\u0435"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0434\u0430\u043d",few:"\u0437\u0430 {0} \u0434\u0430\u043d\u0430",other:"\u0437\u0430 {0} \u0434\u0430\u043d\u0430"},past:{one:"\u043f\u0440\u0435 {0} \u0434\u0430\u043d",few:"\u043f\u0440\u0435 {0} \u0434\u0430\u043d\u0430",other:"\u043f\u0440\u0435 {0} \u0434\u0430\u043d\u0430"}}},hour:{displayName:"\u0447\u0430\u0441",relative:{0:"this hour"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0441\u0430\u0442",few:"\u0437\u0430 {0} \u0441\u0430\u0442\u0430",other:"\u0437\u0430 {0} \u0441\u0430\u0442\u0438"},past:{one:"\u043f\u0440\u0435 {0} \u0441\u0430\u0442",few:"\u043f\u0440\u0435 {0} \u0441\u0430\u0442\u0430",other:"\u043f\u0440\u0435 {0} \u0441\u0430\u0442\u0438"}}},minute:{displayName:"\u043c\u0438\u043d\u0443\u0442",relative:{0:"this minute"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0438\u043d\u0443\u0442",few:"\u0437\u0430 {0} \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u0437\u0430 {0} \u043c\u0438\u043d\u0443\u0442\u0430"},past:{one:"\u043f\u0440\u0435 {0} \u043c\u0438\u043d\u0443\u0442",few:"\u043f\u0440\u0435 {0} \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u043f\u0440\u0435 {0} \u043c\u0438\u043d\u0443\u0442\u0430"}}},second:{displayName:"\u0441\u0435\u043a\u0443\u043d\u0434",relative:{0:"now"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0441\u0435\u043a\u0443\u043d\u0434",few:"\u0437\u0430 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0435",other:"\u0437\u0430 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},past:{one:"\u043f\u0440\u0435 {0} \u0441\u0435\u043a\u0443\u043d\u0434",few:"\u043f\u0440\u0435 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0435",other:"\u043f\u0440\u0435 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"}}}}},{locale:"bs-Latn",parentLocale:"bs"}]})}});
//# sourceMappingURL=212.c3733936.chunk.js.map