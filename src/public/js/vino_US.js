/* eslint-disable */
if (typeof vino === 'undefined') {
    console.log('Initialize API emulation');
    if (typeof wiiu === 'undefined') { window.wiiu = {}, window.wiiu.gamepad = { update: function () { } }; }

    $(document).on('keyup', function (event) {
        wiiu.gamepad.hold = 0;
    });

    var debugConsole = {
        nnid: "prodtest1",
        name: "Vino Debug",
        mii: "AwEAQBs8xqsHR9PC3MXz5YXEaBemLwAAVllEAGEAdgBpAGQAIABKAG8AYQBxAExRABBXAAJoRBgTZEUUgRIZZg4AACkAaGdQYgBpAGcAIABzAGEAbAB0AHkAAAAAAC96",
        pid: 1530610731,
        country: "US",
        language: "EN",

        fl: "1236925795,1166356730,1409518437,1088392656,1090934832,1573645812,1672254576,1746347141,1112166243,1773702389,1541552688,1679086960,1609011959,1371173300,1426703823,1381149235,1338603408,1122156854,1309239659,1427220684,1498872945,1468960081,1029645862,1092713399,1413957266,1106036020,1637587789,1391350154,1672305136,1098860494"
    };

    window.vino = {
        wakeKeyboard: function () {
            console.log("Focus keyboard to: " + document.activeElement);
        },
        requestGarbageCollect: function () {
            console.log('Requested Garbage collection');
        },
        acr_setHostName: function (hostname) {
        },
        acr_setPort: function (port) {
        },
        acr_startMatching: function (gain, msec, times, conf, msecxtimes) {
        },
        acr_stopMatching: function () {
        },
        acr_getLastResult: function () {
        },
        acr_getRemainedTime: function () {
        },
        acr_getHostName: function () {
            return "acr-test.i.tv";
        },
        acr_getPort: function () {
            return "8443";
        },
        title_getImageCount: function () {
            return 0;
        },
        title_hasImage: function (img) {
            return false;
        },
        title_setFixedImage: function (url, id, n, n, n, type) {
            return true;
        },
        soundStopAll: function () {
            console.log("Stop all sounds")
        },
        ls_getItem: function (key) {
            return localStorage.getItem(key);
        },
        ls_setItem: function (key, value) {
            localStorage.setItem(key, value);
            return true;
        },
        ls_removeItem: function (key) {
            localStorage.removeItem(key);
        },
        ls_clear: function () {
            localStorage.clear();
        },
        ls_key: function (index) {
            return localStorage.key(index);
        },
        ls_length: function () {
            return localStorage.length;
        },
        lyt_setIsEnableClientLoadingIcon: function (show) {
            console.log((show ? 'Show' : 'Hide') + ' blue loading icon');
        },
        lyt_setIsEnableWhiteMask: function (withmask) {
            console.log((withmask ? 'With' : 'Without') + ' white mask');
        },
        lyt_startTouchEffect: function () {
            console.log('Show touch effect');
        },
        lyt_reset: function () {
            console.log('Reset lyt');
        },
        lyt_decideFixedFrame: function () {
            console.log('Decide lyt');
        },
        lyt_drawFixedFrame: function (one, two, three, four) {
            console.log('Drew frame at ' + one, two, three, four);
        },
        lyt_startTouchNodeEffect: function (one, two, three, four) {
            console.log('Show touch mouse effect at ' + one, two, three, four);
        },
        video_enableOnTV: function (bool) {
            console.log('Enable video on TV is ' + bool);
        },
        emulate_touch: function (one, two, three) {
            console.log('Emulate touch at ' + one, two, three);
        },
        emulate_inputDelay: function (one) {
            console.log('Emulate input delay in ' + one + ' seconds');
        },
        exit: function () {
            console.log('Exit app');
        },
        exitForce: function () {
            console.log('Forcing exit app');
        },
        isReturnedFromOtherApplication: function () {
            console.log('App was not returned from other application');
            return false;
        },
        runOliveErrorDialog: function (errorCode) {
            alert('115-' + errorCode + '\n\n' + 'An Miiverse error occurred.');
        },
        runErrorDialog: function (errorCode) {
            alert('119-9' + errorCode + '\n\n' + 'An Vino error occurred.');
        },
        olv_getErrorCodeOnInitialize: function () {
            alert('115-5004' + '\n\n' + 'The Miiverse service has ended.');
        },
        runSingleButtonDialog: function (msg, btnStr) {
            alert(msg + "\n\n[ " + btnStr + " ]");
        },
        runTwoButtonDialog: function (msg, lBtnStr, rBtnStr) {
            if (confirm(msg + "\n\n[ " + lBtnStr + " (Cancel) ]  [ " + rBtnStr + " (OK) ]")) {
                return false;
            }
        },
        info_getCountry: function () {
            return debugConsole.country;
        },
        info_getLanguage: function () {
            return debugConsole.language;
        },
        loading_setIconRect: function (one, two, three, four) {
            console.log('Set loading icon position at ' + one, two, three, four);
        },
        loading_setIconAppear: function (show) {
            console.log((show ? 'Show' : 'Hide') + ' loading icon.');
        },
        loading_setIconVisibility: function (show) {
            console.log((show ? 'Instantly show' : 'Instantly hide') + ' loading icon.');
        },
        soundPlay: function (soundLabel) {
            console.log('Played sound effect ' + soundLabel);
        },
        soundPlayEx: function (soundLabel, delay) {
            console.log('Played sound effect ' + soundLabel + " with delay " + delay);
        },
        soundPlayVolume: function (soundLabel, vol) {
            console.log('Played sound effect ' + soundLabel + ' with volume ' + vol);
        },
        ir_enableCodeset: function (one) {
            console.log('Enabled IR codeset ' + one);
        },
        ir_existsTvCodeset: function () {
            return true;
        },
        ir_existsOtherCodeset: function () {
            return false;
        },
        ir_send: function (one, two) {
            console.log('Sent IR code ' + one);
        },
        ir_muteOneShotSound: function (bool) {
            console.log('IR sound is enabled?: ' + bool);
        },
        navi_reset: function () {
        },
        navi_getRect: function () {
            return;
        },
        navi_setMoveMethod: function (one) {
            console.log('Set move method ' + one);
        },
        navi_setBaseVisibilityOnKeyEvent: function (bool) {
            console.log('Base visibility is ' + bool);
        },
        navi_setBaseVisibility: function (bool) {
            console.log('Base visibility is ' + bool);
        },
        navi_set: function (one, two, three, four) {
            console.log('Navi set at ' + one, two, three, four);
        },
        navi_decide: function () {
        },
        act_getCurrentSlotNo: function () {
            console.log('Returned account slot "1"');
            return 1;
        },
        act_getMiiImage: function (slot) {
            console.log('Returned Mii image from ' + slot);
            return "https://pretendo-cdn.b-cdn.net/mii/" + debugConsole.pid + "/normal_face.png";
        },
        act_getMiiImageEx: function (slot, expression) {
            console.log('Returned Mii image from ' + slot + ' with expression ' + expression);
            var imageUrl;
            switch (expression) {
                case 7:
                    imageUrl = "https://pretendo-cdn.b-cdn.net/mii/" + debugConsole.pid + "/body.png";
                    break;
                case 2:
                    imageUrl = "https://pretendo-cdn.b-cdn.net/mii/" + debugConsole.pid + "/smile_open_mouth.png";
                    break;
                case 3:
                    imageUrl = "https://pretendo-cdn.b-cdn.net/mii/" + debugConsole.pid + "/wink_left.png";
                    break;
                case 4:
                    imageUrl = "https://pretendo-cdn.b-cdn.net/mii/" + debugConsole.pid + "/surprised_open_mouth.png";
                    break;
                case 5:
                    imageUrl = "https://pretendo-cdn.b-cdn.net/mii/" + debugConsole.pid + "/frustrated.png";
                    break;
                case 6:
                    imageUrl = "https://pretendo-cdn.b-cdn.net/mii/" + debugConsole.pid + "/sorrow.png";
                    break;
                default:
                    imageUrl = "https://pretendo-cdn.b-cdn.net/mii/" + debugConsole.pid + "/normal_face.png";
                    break;
            }
            return imageUrl;
        },
        act_getMiiData: function (slot) {
            console.log('Returned Mii data from ' + slot);
            return debugConsole.mii;
        },
        act_getNum: function () {
            console.log('Returned number of accounts');
            return 1;
        },
        act_getName: function (slot) {
            console.log('Returned Mii name from ' + slot);
            return debugConsole.name;
        },
        act_getPid: function (slot) {
            console.log('Returned account PID from ' + slot);
            return debugConsole.pid;
        },
        act_getAgeDivision: function (slot) {
            console.log('Returned account age division from ' + slot);
            return 1;
        },
        apd_isEnabled: function () {
            console.log('APD is enabled on console');
            return true;
        },
        apd_getPeriod: function () {
            console.log('Return APD period');
            return 6200;
        },
        apd_enable: function () {
            console.log('APD has been enabled');
            return true;
        },
        apd_disable: function () {
            console.log('APD has been disabled');
            return false;
        },
        memo_open: function (state) {
            console.log((state ? 'Open with reset' : 'Open without reset') + ' memo UI');
            return true;
        },
        memo_reset: function () {
            console.log('Memo UI was reset');
            return true;
        },
        memo_isFinish: function () {
            console.log('Memo UI finished');
            return true;
        },
        memo_getImagePng: function () {
            console.log('Return memo UI image');
            return 'https://i.ibb.co/rwr9J38/descarga.png';
        },
        memo_getImageTgaRaw: function () {
            console.log('Return memo UI raw image');
            return 'DARA';
        },
        memo_getImageTgaCompressed: function () {
            console.log('Return memo UI compressed image');
            return 'DARA';
        },
        fp_getFriendList: function () {
            console.log('Return friend list');
            return debugConsole.fl;
        },
        fp_getFriendName: function (PID) {
            console.log('Get friend name of ' + PID);
            return 'David Joaq';
        },
        jumpToTitle: function (TID, bool) {
            console.log('Jump to app ' + TID);
        },
        checkTitleExist: function (TID) {
            console.log("TID " + TID + " does exist.")
            return true;
        },
        jumpToMiiverse: function (bool) {
            console.log('Jump to Miiverse is ' + bool);
        },
        jumpToMiiversePostId: function (postid, bool) {
            console.log('Jump to post ' + postid + ' on Miiverse is ' + bool);
        },
        jumpToEShop: function (TID, bool) {
            console.log('Jump to eShop page of TID ' + TID + ' is ' + bool);
        },
        jumpToVod: function (url, TID, bool) {
            console.log('Jump to VOD app of TID ' + TID + ' with URL ' + url + ' is ' + bool);
            window.location.href = url;
        },
        jumpToBrowser: function (url, bool) {
            console.log((bool ? 'Jump' : 'Did not jump') + ' to URL ' + url);
            window.location.href = url;
        },
        jumpToSettingsTvRemote: function (bool) {
            console.log((bool ? 'Jump' : 'Did not jump') + ' to TV Remote Settings');
        },
        olv_isEnabled: function () {
            console.log('Miiverse is enabled');
            return true;
        },
        olv_getPostingResult: function () {
            console.log('Post was successful');
            return 1;
        },
        olv_getHostName: function () {
            console.log('Miiverse host name ' + 'https://api.olv.pretendo.cc');
            return 'https://api.olv.pretendo.cc';
        },
        olv_getUserAgent: function () {
            console.log('Miiverse user agent ' + 'WiiU/POLV-5.0.3/353');
            return 'WiiU/POLV-5.0.3/305';
        },
        olv_getServiceToken: function () {
            console.log('Return service token');
            return '837vCg+l8rgFmGSHhZXRH22xr7YUxPhQ95FvhWr3JmoYBsWxUfIYZHFF+J6NYy9eUVnEhv8y3YFw2BrZZ3UEunQfHf7omFk0t4kWywIZYQcaZUDx367u7uSwW+34xF4+/IPQFGLtCh6moWe97yHcOMR374iAmzb1uTDM2cRgDco=';
        },
        olv_getParameterPack: function () {
            console.log('Return param pack');
            return 'XHRpdGxlX2lkXDE0MDc1ODEzMTA0OTcwMzRcYWNjZXNzX2tleVwzNDczXHBsYXRmb3JtX2lkXDFc cmVnaW9uX2lkXDJcbGFuZ3VhZ2VfaWRcMVxjb3VudHJ5X2lkXDQ5XGFyZWFfaWRcMzZcbmV0d29y a19yZXN0cmljdGlvblwwXGZyaWVuZF9yZXN0cmljdGlvblwwXHJhdGluZ19yZXN0cmljdGlvblwx N1xyYXRpbmdfb3JnYW5pemF0aW9uXDFcdHJhbnNmZXJhYmxlX2lkXDExMDU5OTY0MDc3OTU4MjI1 MzQ3XHR6X25hbWVcQW1lcmljYS9OZXdfWW9ya1x1dGNfb2Zmc2V0XC0xNDQwMFw=';
        },
        olv_postText: function (body, topicTag, feelingID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse with message ' + '"' + body + '"' + ' with topic ' + topicTag + ' with feeling ID ' + feelingID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        olv_postTextFixedPhrase: function (body, topicTag, feelingID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse fixed phrase with message ' + '"' + body + '"' + ' with topic ' + topicTag + ' with feeling ID ' + feelingID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        olv_postImage: function (painting, topicTag, feelingID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse with drawing ' + '"' + painting + '"' + ' with topic ' + topicTag + ' with feeling ID ' + feelingID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        olv_postImageFixedPhrase: function (painting, topicTag, feelingID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse fixed phrase with drawing ' + '"' + painting + '"' + ' with topic ' + topicTag + ' with feeling ID ' + feelingID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        suggest_isOpening: function () {
        },
        suggest_set: function (sug1, sug2, sug3, sug4, sug5, sug6, sug7, sug8, sug9, sug10) {
            console.log('Set suggestion strings ' + '"' + sug1 + '", ' + '"' + sug2 + '", ' + '"' + sug3 + '", ' + '"' + sug4 + '", ' + '"' + sug5 + '", ' + '"' + sug6 + '", ' + '"' + sug7 + '", ' + '"' + sug8 + '", ' + '"' + sug9 + '", ' + '"' + sug10 + '"');
            return true;
        },
        suggest_reset: function () {
            console.log('Reset suggestion strings');
            return true;
        },
        suggest_getString: function () {
        },
        pc_checkPIN: function () {
            console.log('PIN is true, perentl conrol allowed');
            return true;
        },
        pc_runPINInput: function () {
            console.log('PIN is correcto, perentl conrol allowed');
            return 1;
        },
        pc_isControlled: function () {
            console.log('Parental Controls are disabled');
            return false;
        },
        pc_getMiiverseControlLevel: function () {
            console.log('No Miiverse Control Settings');
            return 0;
        },
        pc_isControlledNetworkCommunication: function () {
            console.log('No Network Communication Settings');
            return false;
        },
        pc_isControlledFriendReg: function () {
            console.log('No Friend Settings');
            return false;
        },
        pc_isControlledBrowser: function () {
            console.log('No Browser Settings');
            return false;
        },
        ng_checkText: function (message) {
            console.log(message + ' does not contain any blacklisted words.');
            return true;
        },
        ng_checkWord: function (message) {
            console.log(message + ' is not a blacklisted word.');
            return true;
        }

    };
}

var Jamiroquai = function () {
    this.travelWithoutMoving = function () {
        return vino.requestGarbageCollect();
    }
    this.getFrameRate = function () {
        return "25fps";
    }
    this.isReturnOfTheSpaceCowboy = function () {
        return true;
    }
}


var tvii = tvii || {
    clientUrl: location.origin,
    userSlot: vino.act_getCurrentSlotNo(),
    currentToggle: null,
    naviResetInterval: null,
    tvTagProgramLeftInterval: null,
    currentXHR: null,
    locFile: null,
    url: {
        LOGIN: function (create) {
            return tvii.clientUrl + "/api/v1/account/" + (create ? "create" : "login");
        },
        USER_FAVORITES: function (pid) {
            return tvii.clientUrl + "/api/v1/favorites/" + pid;
        },
        PARENTAL_CONTROL_SETTING: function (rating) {
            return tvii.clientUrl + "/api/v1/pc/change/" + rating;
        },
        FRIEND_PRESENCE: function (pids) {
            return tvii.clientUrl + "/api/v1/friends/status" + pids;
        },
        TV_TAG_TAGLINE: function (programId, episodeId) {
            /*return tvii.clientUrl + "/api/v1/tvtag/" + programId + "/" + episodeId;*/
            return tvii.clientUrl + "/api/tvtagexample.json";
        },
        TV_TAG_POST: function (programId, episodeId, tagId) {
            return tvii.clientUrl + "/api/v1/tvtag/" + programId + "/" + episodeId + "/" + tagId + "/comment";
        },
        TV_TAG_VOTE: function (programId, episodeId, tagId) {
            return tvii.clientUrl + "/api/v1/tvtag/" + programId + "/" + episodeId + "/" + tagId + "/poll_vote";
        },
        TV_TAG_SPORTS_STATS: function () {
            return "";
        },
        GUIDE: function (zipcode, lineup, headend, timerows, country, device, time, pref) {
            return "http://tvschedule.zap2it.com/api/grid?lineupId=" + lineup + "&timespan=" + timerows + "&postalCode=" + zipcode + "&headendId=" + headend + "&country=" + country + "&device=" + device + "&time=" + time + "&pref=" + pref + "&isOverride=true&aid=gapzap&timezone=&languagecode=" + tvii.utils.getLang();
        },
        CHANNELS: function (zipcode, lineup, headend, device, time) {
            return tvii.clientUrl + "/api/v1/data/channels?lineupId=" + lineup + "&zipcode=" + zipcode + "&headendId=" + headend + "&country=" + vino.info_getCountry() + "&device=" + device + "&date=" + time + "&lang=" + tvii.utils.getLang();
        },
        DISCOVER: function (isTV, providerQuery, streamingProviders) {
            return tvii.clientUrl + (isTV ? "/api/v1/data/getStreamingTV" : "/api/v1/data/getStreamingMovies") + "?lang=" + tvii.utils.getLang() + "&country=" + vino.info_getCountry() + "&providers=" + streamingProviders + "&query=" + encodeURIComponent(providerQuery);
        },
        STREAMING_PROVIDERS: function (isTV) {
            return "https://api.themoviedb.org/3/watch/providers/" + (isTV ? "tv" : "movie") + "?language=" + tvii.utils.getLang() + "&watch_region=" + vino.info_getCountry();
        },
        CREDITS: function (isTV, programID, all) {
            return "https://api.themoviedb.org/3/" + (isTV ? "tv" : "movie") + "/" + programID + (all == 1 ? "/credits" : "/aggregate_credits") + "?language=" + tvii.utils.getLang();
        },
        DETAILS: function (isTV, programID) {
            return "https://api.themoviedb.org/3/" + (isTV ? "tv" : "movie") + "/" + programID + "?append_to_response=videos%2Cimages&language=" + tvii.utils.getLang();
        },
        SEASONS: function (isTV, programID, seasonNum) {
            return "https://api.themoviedb.org/3/" + (isTV ? "tv" : "movie") + "/" + programID + "/season/" + seasonNum + "?append_to_response=videos%2Cimages&language=" + tvii.utils.getLang();
        },
        SEARCH: function (isMulti, query, streamingProviders) {
            return tvii.clientUrl + (isMulti == 4 ? "/api/v1/data/search?type=live-tv" : isMulti == 3 ? "/api/v1/data/search?type=person" : isMulti == 2 ? "/api/v1/data/search?type=movie" : "/api/v1/data/search?type=tv") + "&q=" + encodeURIComponent(query) + "&country=" + vino.info_getCountry() + "&lang=" + tvii.utils.getLang() + "&providers=" + streamingProviders;
        },
        PROVIDERS: function (zipcode) {
            return tvii.clientUrl + "/api/v1/data/getTVProvidersByZipCode?country=" + vino.info_getCountry() + "&zipcode=" + zipcode + "&lang=" + tvii.utils.getLang();
        },
        RATINGS: function (isTV, programID) {
            return "https://api.themoviedb.org/3/" + (isTV ? "tv" : "movie") + "/" + programID + "/content_ratings?language=" + tvii.utils.getLang();
        },
        generateTMDBImageUrl: function (backdrop_path, width) {
            return tvii.clientUrl + "/api/v1/data/image?url=https://image.tmdb.org/t/p/w500" + backdrop_path + "&width=" + String(width);
        },
        generateImageUrl: function (url, width) {
            return tvii.clientUrl + "/api/v1/data/image?url=" + url + "&width=" + String(width);
        }
    },
    templates: {
        templateList: [
            {
                template_query: "tv",
                template_file: "tv.html"
            },
            {
                template_query: "settings",
                template_file: "settings.html"
            },
            {
                template_query: "home",
                template_file: "home.html"
            },
            {
                template_query: "remote",
                template_file: "remote.html"
            },
            {
                template_query: "setup",
                template_file: "setup.html"
            },
            {
                template_query: "program_view",
                template_file: "program.html"
            },
            {
                template_query: "tvtags",
                template_file: "tvtag.html"
            },
            {
                template_query: "tvtag_tagline",
                template_file: "tvtag_tagline.html"
            },
            {
                template_query: "tvtag_moment",
                template_file: "tvtag_moment.html"
            },
            {
                template_query: "favorites",
                template_file: "favorites.html"
            },
            {
                template_query: "sports",
                template_file: "sports.html"
            },
            {
                template_query: "movies",
                template_file: "movies.html"
            },
            {
                template_query: "manual",
                template_file: "manual.html"
            }
        ],
        requestAll: function () {
            var templateLoadCount = 0;

            for (var i = 0; i < tvii.templates.templateList.length; i++) {
                (function (temToLoad) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", tvii.clientUrl + "/templates/" + temToLoad.template_file);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4) {
                            if (xhr.status == 200) {
                                var tem = {
                                    template_name: temToLoad.template_query,
                                    template_html: xhr.responseText
                                }

                                sessionStorage.setItem("template_" + tem.template_name, JSON.stringify(tem))

                                templateLoadCount++;
                                if (templateLoadCount >= tvii.templates.templateList.length) {
                                    $(document).trigger("tvii:templates:loaded");
                                    sessionStorage.setItem("temLoaded", "true");
                                }
                            }
                        }
                    };
                    xhr.send();
                })(tvii.templates.templateList[i]);
            }

        },
        get: function (templateName) {
            //Always include remote HTML
            var remoteHTML = JSON.parse(sessionStorage.getItem("template_remote")).template_html
            var getHTML = JSON.parse(sessionStorage.getItem("template_" + templateName)).template_html;
            return getHTML.trim() + remoteHTML.trim();
        },
        requestJSONLoc: function () {
            var region;
            var locFile;
            switch (vino.info_getCountry()) {

                case "US":
                case "CA":
                case "MX":
                case "BR":
                case "AR":
                case "CL":
                case "CO":
                case "PE":
                case "VE":
                case "UY":
                case "EC":
                case "PY":
                case "CR":
                case "GT":
                case "DO":
                    region = "US";
                    break;

                case "FR":
                case "DE":
                case "IT":
                case "ES":
                case "GB":
                case "PT":
                case "BE":
                case "NL":
                case "LU":
                case "AT":
                case "PL":
                case "DK":
                case "RU":
                case "CH":
                case "ZA":
                case "CZ":
                case "SE":
                case "NO":
                case "FI":
                case "GR":
                case "IE":
                case "AU":
                case "NZ":
                    region = "EU";
                    break;

                case "JP":
                case "KR":
                case "HK":
                case "SG":
                case "TW":
                    region = "JP";
                    break;

                default:
                    region = "US";
                    break;
            }


            var locFile = tvii.utils.getLang().split('-')[0] + "_" + region + ".json";

            var sendRequest = function (locFile) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", tvii.clientUrl + "/loc/" + locFile);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            tvii.locFile = JSON.parse(xhr.responseText);
                            $(document).trigger("tvii:templates:jsonloc:loaded");
                        } else {
                            if (locFile !== "en_US.json") {
                                sendRequest("en_US.json");
                            }
                        }
                    }
                };
                xhr.send();
            };

            sendRequest(locFile);
        },
        getLoc: function (locID, arrayReplace) {
            var localizedString = tvii.locFile[locID];

            if (arrayReplace && typeof arrayReplace === 'object') {
                for (var key in arrayReplace) {
                    if (arrayReplace.hasOwnProperty(key)) {
                        var placeholder = new RegExp(key, 'g');
                        localizedString = localizedString.replace(placeholder, arrayReplace[key]);
                    }
                }
            }
            return localizedString;
        },
        setUpLocHTML: function () {
            $("body").find("[data-loc]").each(function (index, el) {
                var els = tvii.templates.getLoc($(el).attr("data-loc"));
                $(el).html(els);
            });

            $("body").find("[data-loc-attr]").each(function (index, el) {
                var a = JSON.parse($(el).attr("data-loc-attr"));

                for (var key in a) {
                    var value = a[key];
                    $(el).attr(key, tvii.templates.getLoc(value))
                }

            });
        }
    },
    router: {
        routes: [],
        connect: function (regex, handler) {
            this.routes.push({ regex: new RegExp(regex), handler: handler });
        },
        checkRoutes: function (url) {
            var matchFound = false;
            for (var i = 0; i < this.routes.length; i++) {
                var route = this.routes[i];
                var match = url.match(route.regex);
                if (match) {
                    matchFound = true;
                    route.handler.apply(null, match.slice(1));
                    break;
                }
            }
        }
    },
    utils: {
        buttonType: {
            32768: "a",
            16384: "b",
            8192: "x",
            4096: "y",
            32: "l",
            16: "r",
            128: "zl",
            64: "zr",
            8: "plus",
            4: "minus"
        },
        getDateInTMDBFormat: function (date) {
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();

            function twoDigits(value) {
                return value < 10 ? '0' + value : value;
            }

            return year + '-' + twoDigits(month) + '-' + twoDigits(day);
        },
        startInitialLoading: function () {
            vino.loading_setIconRect(360, 160, 120, 120);
            vino.loading_setIconAppear(true);

            //Request actor birthday for title image



            $(document).on("tvii:templates:loaded", function () {
                $(document).off("tvii:templates:loaded");
                tvii.templates.requestJSONLoc();
            })

            $(document).on("tvii:templates:jsonloc:loaded", function () {
                $(document).off("tvii:templates:jsonloc:loaded");
                $(document).trigger("tvii:initialized");
            })

            tvii.templates.requestAll();
        },
        setUpHoverToEls: function (els) {
            var sel = null;
            els.each(function () {
                if (!$.data(this, "hoverLSTNR")) {
                    $(this).on("mousedown", function () {
                        sel = $(this);
                        vino.soundPlay('SE_CMN_TOUCH_ON');
                        $(this).data("soundPlayed", true);

                        $(this).addClass("hover");
                    });
                    $(this).on("mouseout", function (evt) {
                        if (sel && sel.length && !sel.is($(this))) {
                            return;
                        };

                        if (sel == null) {
                            $(this).removeClass("hover");
                            return;
                        }

                        $(this).removeClass("hover");
                        $(this).data("soundPlayed", false);

                        vino.soundPlay('SE_CMN_TOUCH_CANCEL');
                        sel = null;
                    });
                    $(this).on("mouseup", function () {
                        sel = null;
                        $(this).data("soundPlayed", false);
                        $(this).removeClass("hover");
                    });
                    $.data(this, "hoverLSTNR", true);
                }
            });
        },
        endInitialLoading: function () {
            vino.loading_setIconAppear(false);
            if (vino.ls_getItem("vino_initialized") == "true") {
                if (tvii.utils.getQuery("page", true)) {
                    tvii.utils.changePage(1, true);
                } else {
                    tvii.utils.changePage("?page=home", true);
                }
            } else {
                tvii.utils.changePage("?page=setup", true);
            }
        },
        getLang: function () {
            var l = vino.info_getLanguage().toLowerCase();
            var c = vino.info_getCountry();
            switch (l) {
                case "sp":
                    l = "es";
                    break;
                case "jp":
                    l = "ja";
                    break;
                default:
                    break;
            }
            return l + "-" + c;
        },
        getQuery: function (param, isSearch) {
            var queryString;

            if (isSearch) {
                queryString = window.location.search.substring(1);
            } else {
                queryString = param;
                param = param.split('?')[1];
            }

            var params = queryString.split('&');

            for (var i = 0; i < params.length; i++) {
                var pair = params[i].split('=');
                if (pair[0] === param) {
                    return decodeURIComponent(pair[1]);
                }
            }

            return null;
        },
        changePage: function (pageQuery, replace) {
            //If is returned from app?
            if (pageQuery == 1) {
                pageQuery = location.search
            }
            if (replace) {
                window.history.replaceState({}, '', pageQuery);
            } else {
                window.history.pushState({}, '', pageQuery);
                console.log("pushed state")
            }
            tvii.utils.showWrapper(false);
            tvii.utils.clearWrapper();
            $(document).trigger("tvii:pageclear");
            tvii.utils.replaceWrapper(tvii.templates.get(tvii.utils.getQuery("page", true)));
            tvii.templates.setUpLocHTML();
            tvii.utils.initTouchEffect();
            tvii.utils.showWrapper(true);
            tvii.router.checkRoutes(location.search);

            $(document).trigger("tvii:pagechange");
        },
        replacePageQuery: function (queryName, queryValue) {
            var queryString = location.search;

            var currentQuery = tvii.utils.getQuery(queryName, true);

            if (currentQuery == null) {
                if (queryString) {
                    queryString += '&' + encodeURIComponent(queryName) + '=' + encodeURIComponent(queryValue);
                } else {
                    queryString = '?' + encodeURIComponent(queryName) + '=' + encodeURIComponent(queryValue);
                }
            } else {
                var regex = new RegExp('([?&])' + encodeURIComponent(queryName) + '=.*?(&|$)', 'i');
                queryString = queryString.replace(regex, '$1' + encodeURIComponent(queryName) + '=' + encodeURIComponent(queryValue) + '$2');
            }

            window.history.replaceState({}, '', tvii.clientUrl + queryString);
        },
        initTouchEffect: function () {
            //Check if click was real
            $("a:not([no_touch]), label:not([no_touch]), navi_touch").each(function () {
                if (!$.data(this, "tL")) {
                    $(this).on("click", function (evt) {
                        var el = $(this);
                        if (evt.originalEvent && !vino.navi_getRect() && !el.hasClass("disabled") && !el.attr("disabled")) {
                            vino.lyt_startTouchEffect();
                        }
                    });
                    $.data(this, "tL", true);
                }
            });
        },
        initNaviConfirm: function (els) {
            els.each(function () {
                if (!$.data(this, "nL")) {
                    $(this).on("click", function (evt) {
                        vino.navi_setBaseVisibility(true);
                        var coords = this.getBoundingClientRect();
                        vino.navi_set(coords.left, coords.top, coords.width, coords.height);
                        vino.navi_decide();
                    });
                    $.data(this, "nL", true);
                }
            });
        },
        clearWrapper: function () {
            $(".wrapper").html("");
        },
        replaceWrapper: function (html) {
            $(".wrapper").html(html)
        },
        getWrapper: function () {
            return $(".wrapper").html();
        },
        showWrapper: function (show) {
            if (show) {
                $(".wrapper").removeClass("none");
            } else {
                $(".wrapper").addClass("none");
            }
        },
        clearEvents: function () {
            $(document).off("mousedown");
            $(document).off("mousemove");
            $(document).off("mouseup");
            $(document).off("scroll");
            $(document).off("click");
            $(document).off("tvii:tabchange");
            $(document).off("modalchange:setup");
            $(window).off("click");
            $(window).off("scroll");
            $(window).off("mousemove");
            $(window).off("mousedown");
            $(".container").off("mousedown");
            $(".container").off("mousemove");
            $(".container").off("mouseup");
            clearInterval(tvii.naviResetInterval)
            clearInterval(tvii.tvTagProgramLeftInterval)

        },
        handleImageLoading: function (imgs, transition) {
            var images = imgs;
            for (var i = 0; i < images.length; i++) {
                var img = images[i];
                if ($(img).hasClass("loaded")) {
                    continue;
                }

                $(img).off("load");
                $(img).off("error");

                // Handle image load success
                $(img).on('load', function () {
                    var g = $(this);
                    if (transition) {
                        g.addClass("fadein");
                        setTimeout(function () {
                            g.removeClass("fadein");
                        }, 450);
                    }
                    g.addClass("loaded");
                });

                // Handle image load error
                $(img).on('error', function () {
                    var g = $(this);
                    if (transition) {
                        g.removeClass("fadein");
                    }
                    g.css("display", "none");
                });

                // Trigger load event manually if image is already complete
                if (img.complete) {
                    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                        $(img).trigger('load');
                    } else {
                        $(img).trigger('error');
                    }
                }
            }
        },
        clearStorage: function () {
            sessionStorage.removeItem("program-container");
            sessionStorage.removeItem("actors_program_cache");
        },
        ScrollingContainer: function (container, isHorizontal) {
            this.scrCont = container;
            this.isHorizontal = isHorizontal;
            this.isMouseDown = false;
            this.startPosX = 0;
            this.startPosY = 0;
            this.scrollStartX = 0;
            this.scrollStartY = 0;
            this.lastScrollPosX = 0;
            this.lastScrollPosY = 0;
            this.scrollVelocityX = 0;
            this.scrollVelocityY = 0;
            this.friction = 0.90; // Inertia friction factor
            this.inertiaInterval = null;
            this.hasStartedScrolling = false; // To track if scrolling has started

            var self = this;

            // Initialize event listeners
            this.scrCont.on('mousedown', function (e) {
                self.isMouseDown = true;
                self.startPosX = e.pageX;
                self.startPosY = e.pageY;
                self.scrollStartX = self.scrCont.scrollLeft();
                self.scrollStartY = self.scrCont.scrollTop();
                self.lastScrollPosX = self.scrollStartX; // Track the last scroll position for velocity calculation
                self.lastScrollPosY = self.scrollStartY;
                self.scrollVelocityX = 0; // Reset scroll velocity on mousedown
                self.scrollVelocityY = 0;
                self.scrCont.css('cursor', 'grabbing');
                clearInterval(self.inertiaInterval); // Stop any previous inertia interval
            });

            $(document).on('mouseup', function () {
                if (self.isMouseDown) {
                    self.isMouseDown = false;
                    self.scrCont.css('cursor', 'grab');
                    self.hasStartedScrolling = false; // Reset scroll start flag

                    // Smooth scrolling inertia
                    self.inertiaInterval = setInterval(function () {
                        var continueX = Math.abs(self.scrollVelocityX) > 0.1;
                        var continueY = Math.abs(self.scrollVelocityY) > 0.1;

                        if (continueX || continueY) {
                            if (continueX) {
                                self.scrCont.scrollLeft(self.scrCont.scrollLeft() + self.scrollVelocityX);
                                self.scrollVelocityX *= self.friction;
                            }
                            if (continueY) {
                                self.scrCont.scrollTop(self.scrCont.scrollTop() + self.scrollVelocityY);
                                self.scrollVelocityY *= self.friction;
                            }

                            // Trigger scrolling event on the container element
                            self.scrCont.trigger('scrolling', {
                                scrollX: self.getScrollX(),
                                scrollY: self.getScrollY()
                            });
                        } else {
                            clearInterval(self.inertiaInterval); // Stop inertia when velocity is low

                            // Trigger scrollEnd event on the container element
                            self.scrCont.trigger('scrollEnd', {
                                scrollX: self.getScrollX(),
                                scrollY: self.getScrollY()
                            });
                        }
                    }, 20); // Update every 20ms for smooth scrolling
                }
            });

            this.scrCont.on('mousemove', function (e) {
                if (self.isMouseDown) {
                    if (!self.hasStartedScrolling) {
                        self.hasStartedScrolling = true;

                        // Trigger scrollStart event on the container element
                        self.scrCont.trigger('scrollStart', {
                            scrollX: self.getScrollX(),
                            scrollY: self.getScrollY()
                        });
                    }

                    var currentPosX = e.pageX;
                    var currentPosY = e.pageY;

                    if (self.isHorizontal === 4) {
                        // Strictly horizontal or vertical scrolling
                        var deltaX = Math.abs(currentPosX - self.startPosX);
                        var deltaY = Math.abs(currentPosY - self.startPosY);

                        // Compare the difference in movement to decide the forced scroll direction
                        if (deltaX > deltaY) {
                            // Horizontal scroll
                            var walkX = (currentPosX - self.startPosX) * 2; // Scroll speed
                            self.scrCont.scrollLeft(self.scrollStartX - walkX);
                            self.scrollVelocityX = self.scrCont.scrollLeft() - self.lastScrollPosX; // Update velocity based on scroll change
                            self.lastScrollPosX = self.scrCont.scrollLeft(); // Update last scroll position
                            self.scrollVelocityY = 0; // Prevent any vertical velocity
                        } else {
                            // Vertical scroll
                            var walkY = (currentPosY - self.startPosY) * 2; // Scroll speed
                            self.scrCont.scrollTop(self.scrollStartY - walkY);
                            self.scrollVelocityY = self.scrCont.scrollTop() - self.lastScrollPosY; // Update velocity based on scroll change
                            self.lastScrollPosY = self.scrCont.scrollTop(); // Update last scroll position
                            self.scrollVelocityX = 0; // Prevent any horizontal velocity
                        }
                    } else {
                        // Normal behavior (not forced to one direction)
                        var walkX = (currentPosX - self.startPosX) * 2; // Scroll speed
                        var walkY = (currentPosY - self.startPosY) * 2;

                        if (self.isHorizontal === true || self.isHorizontal === 3) {
                            self.scrCont.scrollLeft(self.scrollStartX - walkX);
                            self.scrollVelocityX = self.scrCont.scrollLeft() - self.lastScrollPosX; // Update velocity based on scroll change
                            self.lastScrollPosX = self.scrCont.scrollLeft(); // Update last scroll position
                        }
                        if (self.isHorizontal === false || self.isHorizontal === 3) {
                            self.scrCont.scrollTop(self.scrollStartY - walkY);
                            self.scrollVelocityY = self.scrCont.scrollTop() - self.lastScrollPosY; // Update velocity based on scroll change
                            self.lastScrollPosY = self.scrCont.scrollTop(); // Update last scroll position
                        }
                    }

                    // Trigger scrolling event on the container element
                    self.scrCont.trigger('scrolling', {
                        scrollX: self.getScrollX(),
                        scrollY: self.getScrollY()
                    });
                }
            });

            // Method to get the horizontal scroll position
            this.getScrollX = function () {
                return this.scrCont.scrollLeft();
            };

            // Method to get the vertical scroll position
            this.getScrollY = function () {
                return this.scrCont.scrollTop();
            };

            this.stop = function () {
                clearInterval(self.inertiaInterval);
                self.scrollVelocityX = 0;
                self.scrollVelocityY = 0;
            };
        },
        initTabs: function () {
            $(".tab-label").each(function () {
                var lab = $(this);
                if (!lab.data("tabClickL")) {
                    lab.on("click", function (evt) {
                        vino.soundPlay("SE_A_TAB_TOUCH_OFF");
                        var $this = $(this);
                        var $dropdownMenu = $this.closest('.dropdown-container').find('.dropdown-menu');
                        if ($dropdownMenu.length === 0) {
                            if (tvii.currentToggle != null) {
                                tvii.currentToggle.addClass("none");
                                $(".dropdown-arrow").removeClass("dropdown-arrow");
                                tvii.currentToggle = null;
                            }
                            $(".tab-label").removeClass("selected");
                            $(".tab-container .tab-label .current:not(.none)").addClass("none");
                            $this.addClass("selected");
                            $(document).trigger("tvii:tabchange", [$this]);
                        }
                    });
                    lab.data("tabClickL", true);
                }
            });
        },
        initToggle: function () {
            function untoggleCurrent() {
                if (tvii.currentToggle != null) {
                    tvii.currentToggle.addClass("none");
                    $(".dropdown-arrow").removeClass("dropdown-arrow");
                    tvii.currentToggle = null;
                }
            }
            $(".container").each(function () {
                if (!$.data(this, "containerMSDL")) {
                    $(this).on("mousedown", function () {
                        untoggleCurrent();
                    });
                    $.data(this, "containerMSDL", true);
                }
            });

            $('[data-toggle]').each(function () {
                if (!$.data(this, "toggleL")) {
                    $(this).on("click", function (evt) {
                        var toggler = $(this);
                        var toggle = toggler.parent().find(".dropdown-menu");

                        if (tvii.currentToggle && tvii.currentToggle[0] !== toggle[0]) {
                            untoggleCurrent();
                        }

                        if (toggle.hasClass("none")) {
                            toggle.removeClass("none");
                            toggler.addClass("dropdown-arrow");
                            tvii.currentToggle = toggle;
                        } else {
                            toggle.addClass("none");
                            toggler.removeClass("dropdown-arrow");
                            tvii.currentToggle = null;
                        }
                    });

                    $.data(this, "toggleL", true);
                }
            });

            $('.dropdown-menu .tab-label').each(function () {
                if (!$.data(this, "labelTogL")) {
                    $(this).on("click", function (evt) {
                        var option = $(this);
                        option.parent().find(".tab-label").removeClass("selected");

                        $('[data-toggle]').removeClass("selected");
                        $('[data-toggle]').find(".current").addClass("none");

                        if (!option.parent().parent().parent().find("[data-toggle]").hasClass("selected")) {
                            $('.dropdown-menu .tab-label').removeClass("selected")
                            option.parent().parent().parent().find("[data-toggle]").addClass("selected");
                            option.addClass("selected");
                            option.parent().parent().parent().find("[data-toggle]").find(".current").removeClass("none").text(option.text());
                            $(document).trigger("tvii:tabchange", [option]);
                            $(".tab-container.with-dropdown-float>.tab-label").removeClass("selected");
                            untoggleCurrent();
                        }
                    });
                    $.data(this, "labelTogL", true);
                }
            });

        },
        triggerToggleByOption: function (toggleXY, option) {
            //Untoggle if exists
            if (tvii.currentToggle != null) {
                tvii.currentToggle.addClass("none");
                $(".dropdown-arrow").removeClass("dropdown-arrow");
                tvii.currentToggle = null;
            }

            //Inital option selection
            var dropToggle = toggleXY.find("[data-toggle]");
            var dropToggleContainer = toggleXY.find(".dropdown-menu");

            var dropOption = toggleXY.find(option);
            dropOption.addClass("selected");

            tvii.currentToggle = dropToggleContainer;
            dropToggle.addClass("dropdown-arrow");
            dropToggle.find(".current").removeClass("none");
            dropToggle.find(".current").text(dropOption.text());
            dropToggle.addClass("selected");
            dropToggleContainer.removeClass("none");

            $(document).trigger("tvii:tabchange", [dropOption]);
        },
        triggerTab: function (tab) {
            //Untoggle if exists
            if (tvii.currentToggle != null) {
                tvii.currentToggle.addClass("none");
                $(".dropdown-arrow").removeClass("dropdown-arrow");
                tvii.currentToggle = null;
            }

            $(".tab-label").removeClass("selected");
            tab.addClass("selected");
            $(document).trigger("tvii:tabchange", [tab]);
        },
        disableElements: function (els, disable) {
            if (disable) {
                els.each(function () {
                    $(this).addClass("disabled");
                    $(this).css("pointer-events", "none");
                });
            } else {
                els.each(function () {
                    $(this).removeClass("disabled");
                    $(this).css("pointer-events", "");
                });
            }
        },
        initRemote: function () {
            var irCodes = {
                "POWER": 0,
                "CHANNEL_UP": 1,
                "CHANNEL_DOWN": 2,
                "VOLUME_UP": 3,
                "VOLUME_DOWN": 4,
                "1": 11,
                "2": 12,
                "3": 13,
                "4": 14,
                "5": 15,
                "6": 16,
                "7": 17,
                "8": 18,
                "9": 19,
                "0": 20,
                "INPUT": 52
            }

            //Set up codeset?
            if (vino.ir_existsTvCodeset()) {
                vino.ir_enableCodeset(1);
            }
            else if (vino.ir_existsOtherCodeset()) {
                vino.ir_enableCodeset(2);
            }

            vino.ir_muteOneShotSound(false);

            var channelInterval = null;

            function changeChannel() {
                var codes = Array.prototype.slice.call(arguments);

                if (channelInterval) { return; }
                channelInterval = true;

                function sendWithDelay(index) {
                    if (index >= codes.length) {
                        channelInterval = false;
                        vino.soundPlay("SE_REMOTE_FINISH");
                        return;
                    }

                    var code = codes[index];

                    if (code !== undefined && code !== null) {
                        sendIr(code);
                    }

                    setTimeout(function () {
                        sendWithDelay(index + 1);
                    }, 400);
                }

                sendWithDelay(0);
            }

            function sendIr(code) {
                vino.ir_send(irCodes[code], 1);
            }

            tvii.utils.setUpHoverToEls($(".remote-control a:not(.channel):not(.exit-modal)"))
            var chBtns = $('.remote-control .remote-content .channel-scroll .channel');
            chBtns.on("click", function () {
                if (!$(this).attr("data-ir-code")) {
                    return;
                }
                var chCode = $(this).attr("data-ir-code").split('');
                changeChannel.apply(null, chCode);
            });

            var favChScroll = new tvii.utils.ScrollingContainer($('.remote-control .remote-content .channel-scroll'), true);
            favChScroll.scrCont.on("scroll", function (e) {
                var $this = $(this);
                var scrollLeft = $this.scrollLeft();
                var scrollWidth = $this[0].scrollWidth;
                var clientWidth = $this.outerWidth();
                var scrollEndThreshold = scrollWidth - clientWidth - 15;

                // Handle the .left class
                if (scrollLeft > 9) {
                    $this.parent().addClass("left");
                } else {
                    $this.parent().removeClass("left");
                }

                // Handle the .right class
                if (scrollLeft >= scrollEndThreshold) {
                    $this.parent().removeClass("right");
                } else {
                    $this.parent().addClass("right");
                }

                // Play sound when scrolling
                vino.soundPlayEx('SE_A_DIAL_SCROLL', 20);
            })

            $(".remote-button, .exit-remote-control").on("click", function () {
                $(".remote-control").toggleClass("none");
                $(".remote-control").toggleClass("modal-window-open");
            })
            $(".remote-button").on("click", function () {
                vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
            })
            $(".exit-remote-control").on("click", function () {
                vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
            })

            $(".remote-control").on("click", function (e) {
                if (e.target === this) {
                    $(this).toggleClass("none");
                    $(this).toggleClass("modal-window-open");
                }
            });
        },
        initPageLinks: function () {
            $('a').on("click", function () {
                var link = $(this);
                if (link.attr("data-url") != null) {
                    tvii.utils.changePage(link.attr("data-url"), false)
                }
            })
        },
        sendXHR: function (type, url, callbackSuccess, callbackError, headers, formData) {
            tvii.utils.abortOngoingXHR();

            vino.loading_setIconAppear(true);
            tvii.currentXHR = new XMLHttpRequest();
            tvii.currentXHR.open(type, url);

            if (headers) {
                for (var i = 0; i < headers.length; i++) {
                    var headerParts = headers[i].split(":");
                    var headerName = headerParts[0].trim();
                    var headerValue = headerParts[1].trim();
                    tvii.currentXHR.setRequestHeader(headerName, headerValue);
                }
            }

            tvii.currentXHR.onreadystatechange = function () {
                if (tvii.currentXHR.readyState == 4) {
                    vino.loading_setIconAppear(false);
                    if (tvii.currentXHR.status == 200) {
                        callbackSuccess(tvii.currentXHR.responseText || "", tvii.currentXHR);
                    } else {
                        callbackError(tvii.currentXHR);
                    }
                    tvii.currentXHR = null;
                }
            }

            if (type == "POST") {
                tvii.currentXHR.send(formData);
            } else {
                tvii.currentXHR.send();
            }
        },
        abortOngoingXHR: function () {
            if (tvii.currentXHR != null) {
                vino.loading_setIconAppear(false);
                tvii.currentXHR.abort();
                tvii.currentXHR = null;
            }
        },
        focusElement: function (el) {
            $('[navi_target]').removeClass('focus');
            el.addClass('focus').focus();
        },
        initButton: function () {
            var buttonType = {
                65: "a",
                66: "b",
                88: "x",
                89: "y",
                76: "l",
                82: "r",
                90: "zl",
                46: "zr",
                80: "plus",
                77: "minus",
                38: "d-up",
                40: "d-down",
                37: "d-left",
                39: "d-right",
            }
            var lockW = null;

            function lerp(a, b, alpha) {
                return a + alpha * (b - a)
            }

            vino.navi_setMoveMethod(-1);

            $(document).on("keypress", function (evt) {
                var kc = evt.keyCode;
                if (lockW === null) {
                    lockW = kc;
                    doButtonAction(kc);
                }
            });

            $(document).on("keyup", function (evt) {
                var kc = evt.keyCode;
                if (lockW === kc) {
                    lockW = null;
                }
            });

            function doButtonAction(r) {
                if (r == 65) {
                    if ($('.focus').length > 0) {
                        if (!$('.focus').is(':visible')) {
                            $('.focus').removeClass('focus').blur();
                        }
                        else if ($('.focus').find('input:not([type="radio"])').length) {
                            $('.focus').find('input:not([type="radio"])').first().focus();
                            vino.wakeKeyboard();
                        } else if ($('.focus').is('label')) {
                            $('.focus').find('input').first().focus();
                            $('.focus').find('input').first().trigger('click');
                            if ($('.focus').find('input').first().is('input:not([type="radio"]')) {
                                vino.wakeKeyboard();
                            }
                        } else if ($('.focus').is('input[type="text"]')) {
                            $('.focus').focus();
                            vino.wakeKeyboard();
                        } else if ($('.focus').is('input[type="number"]')) {
                            $('.focus').focus();
                            vino.wakeKeyboard();
                        } else if ($('.focus').is('input[type="radio"]')) {
                            $('.focus').focus();
                            $('.focus').trigger('click');
                        } else {
                            $('.focus').trigger('click');
                        }
                    }
                }

                if (r == 38 || r == 40 || r == 37 || r == 39) {
                    var all;
                    var f;

                    if ($(".modal-window-open").length) {
                        all = $('.modal-window-open [navi_target]:visible');  // Get all visible elements with the navi_target attribute
                        f = $('.modal-window-open [navi_target].focus:visible');  // Get the currently focused visible element
                    } else {
                        all = $('[navi_target]:visible');  // Get all visible elements with the navi_target attribute
                        f = $('[navi_target].focus:visible');  // Get the currently focused visible element
                    }


                    if (f.length === 0) {
                        $('[navi_target]').removeClass('focus');
                        // If no element has the .focus class, focus the first visible element in document order
                        all.first().addClass('focus').focus();
                    } else {
                        // If a focused element exists, move focus based on the arrow key
                        var currentIndex = all.index(f); // Get the index of the currently focused element
                        var newIndex;

                        if (r == 38 || r == 37) {
                            // Up or left arrow key: move focus to the previous visible element in document order
                            newIndex = currentIndex - 1;
                        } else if (r == 40 || r == 39) {
                            // Down or right arrow key: move focus to the next visible element in document order
                            newIndex = currentIndex + 1;
                        }

                        // Ensure new index is within bounds
                        if (newIndex >= 0 && newIndex < all.length) {
                            // Remove .focus from current and add it to the new visible element
                            f.removeClass('focus');
                            all.eq(newIndex).addClass('focus').focus(); // Focus the element at the new index
                        }
                    }
                }

                var openModal2 = $('.modal-window-open-2');
                var openModal = $('.modal-window-open');
                if (openModal.length) {
                    var i = openModal.find('.accesskey-' + buttonType[r] + ':visible');
                    if (i.length) {
                        if (i.is("input")) {
                            i.focus();
                            vino.wakeKeyboard();
                        } else {
                            i.trigger("click");
                        }
                    }
                    return;
                } else if (openModal2.length) {
                    var i = openModal2.find('.accesskey-' + buttonType[r] + ':visible');
                    if (i.length) {
                        if (i.is("input")) {
                            i.focus();
                            vino.wakeKeyboard();
                        } else {
                            i.trigger("click");
                        }
                    }
                    return;
                } else {
                    var i = $('.accesskey-' + buttonType[r] + ':visible');
                    if (i.length) {
                        if (i.is("input")) {
                            i.focus();
                            vino.wakeKeyboard();
                        } else {
                            i.trigger("click");
                        }
                    }
                }
            }

            var inputCheck = setInterval(function () {
                wiiu.gamepad.update();
                if (wiiu.gamepad.tpTouch == 1) {
                    if ($('.focus').length > 0) {
                        $('.focus').removeClass('focus').blur();
                    }
                }

                if (wiiu.gamepad.hold != 1073741824 &&
                    wiiu.gamepad.hold != 536870912 &&
                    wiiu.gamepad.hold != 268435456 &&
                    wiiu.gamepad.hold != 134217728
                ) {
                    return;
                }

                var c = $('.l-stick-scroll:visible').first();
                switch (wiiu.gamepad.hold) {
                    case 1073741824:
                        c.scrollLeft(function (i, v) { return v + lerp(-25, -25, wiiu.gamepad.lStickX); });
                        break;
                    case 536870912:
                        c.scrollLeft(function (i, v) { return v + lerp(-25, 25, wiiu.gamepad.lStickX); });
                        break;
                    case 268435456:
                        c.scrollTop(function (i, v) { return v + lerp(-25, -25, wiiu.gamepad.lStickY); });
                        break;
                    case 134217728:
                        c.scrollTop(function (i, v) { return v + lerp(25, 25, wiiu.gamepad.lStickY); });
                        break;
                }
            }, 0);

        }
    }
};

$(window).on("load", function () {
    tvii.utils.startInitialLoading();
    $(window).off("load");
})

$(document).on("tvii:initialized", function () {
    tvii.utils.endInitialLoading();
    tvii.utils.initButton();
    $(document).off("tvii:initialized");
});

$(document).on("tvii:pageclear", function () {
    tvii.utils.abortOngoingXHR();
    tvii.utils.clearEvents();
})

$(document).on("tvii:pagechange", function () {
    var j = new Jamiroquai();
    j.travelWithoutMoving();

    tvii.utils.initRemote();
    tvii.utils.initPageLinks();
})

$(window).on("popstate", function () {
    tvii.utils.changePage(location.search, true);
});

tvii.router.connect("^[?&]page=manual(?:&|$)", function () {
    function changeScreen(hide, show) {
        $(hide).addClass("none");
        $(show).removeClass("none")
        $(document).trigger("modalchange:setup", [$(show)]);
    };

    $("[data-show]").on("click", function () {
        changeScreen($(this).attr("data-hide"), $(this).attr("data-show"));
    });

    $("[data-id]").on("click", function () {
        history.pushState(null, "", location.search + "&manual=" + $(this).attr("data-id"));
    });    

    $(".manual-back").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
        history.back();
    });

    $(function () {
        $("body").addClass("manualBody");
    });    
});

tvii.router.connect("^[?&]page=setup(?:&|$)", function () {

    function changeScreen(hide, show) {
        $(hide).addClass("none");
        $(show).removeClass("none")
        $(document).trigger("modalchange:setup", [$(show)]);
    }

    var zipCode;
    var provX;
    var favTVX;
    var favMX;
    var favSocial;
    var favStr;
    var favChn;
    var aboutPageInfo = new tvii.utils.ScrollingContainer($(".setup-modal.zipcode-info .about-text"), false)
    var providerScroll = new tvii.utils.ScrollingContainer($(".provider-container"), true);
    var favoriteTVAddScroll = new tvii.utils.ScrollingContainer($(".program-container.favorites-tv-container"), true);
    var favoriteMovieAddScroll = new tvii.utils.ScrollingContainer($(".movie-container.favorites-movie-container"), true);
    var favoriteSocialScroll = new tvii.utils.ScrollingContainer($(".social-media-container"), true);
    var favoriteStreamingScroll = new tvii.utils.ScrollingContainer($(".streaming-container"), true);
    var favoriteChannelsScroll = new tvii.utils.ScrollingContainer($(".fav-tv-channels"), true);
    var BGMisPlaying = false;
    var pcIsEnabled = false;
    var pcAlertTimeout;
    var newZip;

    //Make this vary depending if the setup page is changed when the user already has an account
    var TVRating;
    var MovieRating;

    providerScroll.scrCont.on("scrolling", function (e, data) {
        provX = data.scrollX
    })

    favoriteTVAddScroll.scrCont.on("scrolling", function (e, data) {
        favTVX = data.scrollX
    })

    favoriteMovieAddScroll.scrCont.on("scrolling", function (e, data) {
        favMX = data.scrollX
    })

    favoriteSocialScroll.scrCont.on("scrolling", function (e, data) {
        favSocial = data.scrollX
    })

    favoriteStreamingScroll.scrCont.on("scrolling", function (e, data) {
        favStr = data.scrollX
    })

    favoriteChannelsScroll.scrCont.on("scrolling", function (e, data) {
        favChn = data.scrollX
    })

    $("[data-show]").on("click", function () {
        changeScreen($(this).attr("data-hide"), $(this).attr("data-show"));
    })

    $(".back-button, .exit-modal").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
    })

    $(".next-button").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
    })

    $(".setup-modal.zipcode a:not(.mii):not(.exit-button)").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
    })

    $(".setup-modal.zipcode a:not(.mii):not(.exit-button)").on("mousedown mouseup mousemove mouseout", function () {
    })

    $(".setup-modal.zipcode a:not(.mii):not(.exit-button)").on("mousedown", function () {
        vino.soundPlay("SE_CMN_TOUCH_ON");
    })

    $(".setup-modal.zipcode .mii img").attr("src", vino.act_getMiiImage(tvii.userSlot));

    $(".exit-button").on("click", function () {
        vino.soundPlay("SE_COMMON_FINISH_TOUCH_OFF");
        vino.exit();
    });

    $(".setup-modal.zipcode input").on("change", function () {
        changeScreen(".setup-modal-page-1", ".setup-modal-page-2");
    });

    //Show different keyboard depending of country, if neither, continue

    switch (vino.info_getCountry()) {
        case "US":
        case "FR":
        case "GT":
        case "CR":
        case "HN":
        case "DE":
        case "PE":
        case "MX":
        case "ES":
            $(".setup-modal.zipcode input.zipnum").css("display", "");
            $(".setup-modal.zipcode input.zipnum").attr("maxlength", "5");
            $("#normal-zipcode-help").css("display", "");
            break;
        case "CL":
            $(".setup-modal.zipcode input.zipnum").css("display", "");
            $(".setup-modal.zipcode input.zipnum").attr("maxlength", "7");
            $(".setup-modal.zipcode input.zipnum").css("padding-left", "19px");
            $("#normal-zipcode-help").css("display", "");
            break;
        case "VE":
        case "PA":
            $(".setup-modal.zipcode input.zipnum").css("display", "");
            $(".setup-modal.zipcode input.zipnum").attr("maxlength", "4");
            $(".setup-modal.zipcode input.zipnum").css("padding-left", "51px");
            $("#normal-zipcode-help").css("display", "");
            break;
        case "EC":
        case "CO":
            $(".setup-modal.zipcode input.zipnum").css("display", "");
            $(".setup-modal.zipcode input.zipnum").attr("maxlength", "6");
            $(".setup-modal.zipcode input.zipnum").css("padding-left", "30px");
            $("#normal-zipcode-help").css("display", "");
            break;
        case "CA":
            $(".setup-modal.zipcode input.zipkey").css("display", "");
            $(".setup-modal.zipcode input.zipkey").attr("maxlength", "7");
            $(".setup-modal.zipcode input.zipnum").css("padding-left", "19px");
            $("#normal-zipcode-help").css("display", "");
            break;
        case "AR":
            $(".setup-modal.zipcode input.zipkey").css("display", "");
            $(".setup-modal.zipcode input.zipkey").attr("maxlength", "5");
            $("#normal-zipcode-help").css("display", "");
            break;
        case "GB":
            $(".setup-modal.zipcode input.zipkey").css("display", "");
            $(".setup-modal.zipcode input.zipkey").attr("maxlength", "4");
            $(".setup-modal.zipcode input.zipnum").css("padding-left", "51px");
            $("#normal-zipcode-help").css("display", "");
            break;
        default:
            $("#normal-zipcode-notsupported").css("display", "");
            $(".setup-modal.zipcode .skip-zip-code").css("display", "");
            break;
    }

    if (vino.pc_isControlled()) {
        pcIsEnabled = true;
        $(".setup-modal-page-1").addClass("none");
        $(".setup-modal-page-pc").removeClass("none");

        $(".setup-modal .pin-input").on("click", function () {
            clearInterval(pcAlertTimeout);
            switch (vino.pc_runPINInput()) {
                case -1:
                    break;
                case 0:
                    pcAlertTimeout = setTimeout(function () {
                        alert(tvii.templates.getLoc("vino.setup.screen.pc.alert1"));
                    }, 95)
                    break;
                case 1:
                    $(".setup-modal-page-pc").addClass("none");
                    $(".setup-modal-page-1").removeClass("none");
                    break;
                default:
                    break;
            }
        })
    }

    function requestProviders() {

        var zipNum = $(".setup-modal.zipcode input.zipnum");
        var zipLet = $(".setup-modal.zipcode input.zipkey");
        if (zipNum.val().length) {
            newZip = zipNum;
        } else if (zipLet.val().length) {
            newZip = zipLet;
        } else {
            newZip = zipNum;
        }


        if ($(".provider-container a").length &&
            zipCode === newZip.val() ||
            newZip.hasClass("zipnum") &&
            parseInt(newZip.attr("maxlength"), 10) !=
            newZip.val().length ||
            !newZip.val().length) {

            console.log(zipCode)
            console.log(newZip.val())

            //Checks only for US Zip code
            if (newZip.hasClass("zipnum") &&
                parseInt(newZip.attr("maxlength"), 10) !=
                newZip.val().length) {
                $(".provider-container").css("display", "none");
                $(".setup-modal p.notice").css("display", "none");
                $(".provider-type-container").css("display", "none");
                $(".provider-type-container").removeClass("fadein");

                $(".loading-provider").css("display", "none");
                $(".loading-provider").removeClass("fadein");

                $(".loading-provider.invalid").addClass("fadein");
                $(".loading-provider.invalid").css("display", "");
            }

            //Not on a supported country? Tell user to skip screen
            if (!newZip.val().length) {
                $(".provider-container").css("display", "none");
                $(".setup-modal p.notice").css("display", "none");
                $(".provider-type-container").css("display", "none");
                $(".provider-type-container").removeClass("fadein");

                $(".loading-provider").css("display", "none");
                $(".loading-provider").removeClass("fadein");

                //Changing string permantely since user would have to reset if country changes
                $(".loading-provider.invalid").html(tvii.templates.getLoc("vino.setup.screen2.h6"));
                $(".loading-provider.invalid").addClass("fadein");
                $(".loading-provider.invalid").css("display", "");
            }

            if (zipCode === newZip.val() && $(".provider-container a").length) {
                $(".loading-provider").css("display", "none");
                $(".loading-provider").removeClass("fadein");

                $(".setup-modal p.notice").css("display", "");

                $(".provider-type-container").removeClass("fadein");
                $(".provider-type-container").css("display", "");

                if ($(".provider-type-container a.selected").length) {
                    $(".provider-container").css("display", "");
                }
            }

            providerScroll.scrCont.scrollLeft(provX);
            return;
        }

        zipCode = newZip.val();

        $(".provider-container").html("");
        $(".setup-modal p.notice").css("display", "none");
        $(".setup-modal p.notice span").html("");
        $(".provider-type-container").css("display", "none");
        $(".provider-type-container").removeClass("fadein");
        $(".provider-container").css("display", "none");

        $(".loading-provider").css("display", "none");
        $(".loading-provider").removeClass("fadein");

        $(".loading-provider:not(.error):not(.invalid)").css("display", "");

        $(".provider-type-container a").removeClass("selected");
        $(".provider-container").find("h3.no-providers").css("display", "none");
        $(".provider-container").find("h3.no-providers").removeClass("fadein");

        function showPreviewChannels(providerTab) {
            var chAm = providerTab.attr("data-provider-channel-amount");
            var ch1Na = providerTab.attr("data-channel-preview-0-name");
            var ch1Nu = providerTab.attr("data-channel-preview-0-num");
            var ch2Na = providerTab.attr("data-channel-preview-1-name");
            var ch2Nu = providerTab.attr("data-channel-preview-1-num");
            var ch3Na = providerTab.attr("data-channel-preview-2-name");
            var ch3Nu = providerTab.attr("data-channel-preview-2-num");

            //Handling <3 channel packages (Sioux City Standard Dish Network reference)
            if (parseInt(chAm, 10) === 0) {
                ch1Na = "";
                ch1Nu = "";

                ch2Na = "";
                ch2Nu = "";

                ch3Na = "";
                ch3Nu = "";

            } else if (parseInt(chAm, 10) === 1) {
                ch2Na = "";
                ch2Nu = "";

                ch3Na = "";
                ch3Nu = "";

            } else if (parseInt(chAm, 10) === 2) {
                ch3Na = "";
                ch3Nu = "";
            }


            $(".setup-modal p.notice .provider-chamount").html(
                tvii.templates.getLoc("vino.setup.screen1.p5", {
                    "%s": chAm
                })
            )

            $(".setup-modal p.notice .provider-chpreview").html(
                tvii.templates.getLoc("vino.setup.screen1.p6", {
                    "%s": ch1Nu,
                    "%f": ch1Na,
                    "%g": ch2Nu,
                    "%h": ch2Na,
                    "%j": ch3Nu,
                    "%k": ch3Na
                })
            )

            $(".setup-modal p.notice").css("display", "none");
            setTimeout(function () {
                $(".setup-modal p.notice").css("display", "");
            }, 0)
        }

        if (!$(".setup-modal-page-2").data("providerTVTypeListener")) {

            $(".provider-type-container a").on("click", function () {
                providerScroll.stop();
                $(".provider-container").css("display", "none");
                $(".provider-container").find("h3.no-providers").css("display", "none");
                $(".provider-container").find("h3.no-providers").removeClass("fadein");
                $(".provider-type-container a").removeClass("selected");
                vino.soundPlay("SE_A_TAB_TOUCH_OFF");
                $(this).addClass("selected");
                switch ($(this).attr("data-type")) {
                    case "cab":
                        $(".provider-container a").css("display", "none");
                        if ($('.provider-container [data-provider-type="CABLE"], .provider-container [data-provider-type="OVD"]').length < 1) {
                            $(".provider-container").find("h3.no-providers").addClass("fadein");
                            $(".provider-container").find("h3.no-providers").css("display", "");
                            break;
                        }
                        $('.provider-container [data-provider-type="CABLE"], .provider-container [data-provider-type="OVD"]').css("display", "");
                        break;
                    case "sat":
                        $(".provider-container a").css("display", "none");
                        if ($('.provider-container [data-provider-type="SATELLITE"]').length < 1) {
                            $(".provider-container").find("h3.no-providers").addClass("fadein");
                            $(".provider-container").find("h3.no-providers").css("display", "");
                            break;
                        }
                        $('.provider-container [data-provider-type="SATELLITE"]').css("display", "");
                        break;
                    case "ant":
                        $(".provider-container a").css("display", "none");
                        if ($('.provider-container [data-provider-type="OTA"]').length < 1) {
                            $(".provider-container").find("h3.no-providers").addClass("fadein");
                            $(".provider-container").find("h3.no-providers").css("display", "");
                            break;
                        }
                        $('.provider-container [data-provider-type="OTA"]').css("display", "");
                        break;
                    default:
                        break;
                }

                $(".provider-container").css("display", "");

                if ($(".provider-container .selected:visible").length) {
                    showPreviewChannels($(".provider-container .selected"));
                } else {
                    $(".setup-modal p.notice").css("display", "none");
                }

                providerScroll.scrCont.scrollLeft(provX);
            })

            $(".setup-modal-page-2").data("providerTVTypeListener", true);
        }

        tvii.utils.sendXHR("GET", tvii.url.PROVIDERS(zipCode), function (responseText) {
            $(".loading-provider:not(.error):not(.invalid)").addClass("fadeout");
            setTimeout(function () {
                $(".loading-provider:not(.error):not(.invalid)").css("display", "none");
                $(".loading-provider:not(.error):not(.invalid)").removeClass("fadeout");
                $(".setup-modal p.notice").css("display", "");
                provX = 0;
                var providers = JSON.parse(responseText).hits;
                var providerHTML = '';

                for (var i = 0; i < providers.length; i++) {
                    var headendId = providers[i].headendId;
                    var lineupId = providers[i].id;
                    var lineupType = providers[i].lineupType;
                    var name = providers[i].name.en;
                    var channelAmount = providers[i].channelAmount;
                    var channelsPreview = providers[i].channels;

                    var attrsCh = "";

                    for (var g = 0; g < channelsPreview.length; g++) {
                        var chName = channelsPreview[g].name.en;
                        var chNum = channelsPreview[g].channels[0].channel;

                        attrsCh += 'data-channel-preview-' + g + '-name="' + chName + '" ' +
                            'data-channel-preview-' + g + '-num="' + chNum + '" '
                    }


                    var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="black-tab clamp" ' +
                        'data-provider-headend-id="' + headendId + '" ' +
                        'data-provider-id="' + lineupId + '" ' +
                        attrsCh +
                        'data-provider-channel-amount="' + channelAmount + '" ' +
                        'data-provider-type="' + lineupType + '">' +
                        '<span>' + name + '</span>' +
                        '</a>';

                    providerHTML += anchor + '\n';
                }

                providerHTML += '<h3 class="no-providers">' + tvii.templates.getLoc("vino.setup.screen2.h7") + '</h3>\n';

                $(".provider-container").html(providerHTML);
                $(".provider-container a").addClass("fadein");
                tvii.utils.initTouchEffect();
                $(".provider-container a").on("click", function () {
                    $(".provider-container a").removeClass("selected");
                    vino.soundPlay("SE_A_TAB_TOUCH_OFF");
                    showPreviewChannels($(this));

                    $(this).addClass("selected");

                    console.log($(this).attr("data-provider-headend-id"))
                })
                $(".provider-type-container").addClass("fadein");
                $(".provider-type-container").css("display", "");
            }, 450);
        }, function () {
            $(".loading-provider:not(.error):not(.invalid)").addClass("fadeout");
            setTimeout(function () {
                $(".loading-provider:not(.error):not(.invalid)").css("display", "none");
                $(".loading-provider:not(.error):not(.invalid)").removeClass("fadeout");
                $(".loading-provider.error").css("display", "");
                $(".loading-provider.error").addClass("fadein");
            }, 450);
        })

    }

    function requestStreamingProviders() {

        if ($(".streaming-container .provider").length) {
            favoriteStreamingScroll.scrCont.scrollLeft(favStr)
        }

        function setStrProvListeners() {
            $(".streaming-container .provider").each(function () {
                if (!$.data(this, "boundClick")) {
                    $(this).on("click", function () {
                        vino.soundPlay("SE_A_CHECK_TOUCH_OFF");
                        $(this).toggleClass("selected");
                    });
                    $.data(this, "boundClick", true);
                }
            });
        }

        $(".streaming-container").css("display", "none");
        $(".streaming-container").css("display", "");

        if (!$(".setup-modal-page-5").data("providerStreamSecListener")) {
            setStrProvListeners();
            $(".setup-modal-page-5").data("providerStreamSecListener", true);
        }
    }

    function requestDiscoverTVFavorites() {

        if (sessionStorage.getItem("not_responsible_content_shown_flag") != "shown") {
            alert(tvii.templates.getLoc("vino.setup.screen3.alert1"))
            alert(tvii.templates.getLoc("vino.setup.screen3.alert2"));
            alert(tvii.templates.getLoc("vino.setup.screen3.alert3"));
            sessionStorage.setItem("not_responsible_content_shown_flag", "shown");
        }

        if ($(".program-container .program").length) {
            favoriteTVAddScroll.scrCont.scrollLeft(favTVX)
            return;
        }

        function setTVFavoriteListeners() {
            $(".program-container.favorites-tv-container .program").each(function () {
                if (!$.data(this, "boundClick")) { // Check if the event is already bound
                    $(this).on("click", function () {
                        vino.soundPlay("SE_A_CHECK_TOUCH_OFF");
                        $(this).toggleClass("selected");
                    });
                    $.data(this, "boundClick", true); // Mark the event as bound
                }
            });

            tvii.utils.handleImageLoading($('.program-container.favorites-tv-container .program img'), true);
        }

        $(".program-container.favorites-tv-container").html("");
        $(".program-container.favorites-tv-container").css("display", "none");

        function getLastWeekDate() {
            var today = new Date();
            var lastWeek = new Date(today);
            lastWeek.setDate(today.getDate() - 7);

            return lastWeek;
        }

        var discoverTVQuery = "&screened_theatrically=false&air_date.gte=" + tvii.utils.getDateInTMDBFormat(getLastWeekDate()) + "&air_date.lte=" + tvii.utils.getDateInTMDBFormat(new Date());

        tvii.utils.sendXHR("GET", tvii.url.DISCOVER(true, discoverTVQuery, ""), function (responseText) {
            var results = JSON.parse(responseText).results;
            if (!results.length) { return; }
            var resultHTML = '';
            var halfwayIndex = Math.floor(results.length / 2);

            for (var i = 0; i < results.length; i++) {
                var image = tvii.url.generateTMDBImageUrl(results[i].backdrop_path, 276);
                var name = results[i].name;
                var id = results[i].id;

                var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="program" ' +
                    'data-program-id="' + id + '">' +
                    '<img src="' + image + '"/>' +
                    '<div class="content">' +
                    '<span class="name">' + name + '</span>' +
                    '<span class="episode"></span>' +
                    '<span class="season"></span>' +
                    '</div>' +
                    '<span class="checked-border"></span>' +
                    '</a>';

                resultHTML += anchor + '\n';

                if (i === halfwayIndex - 1) { // Add <br> after the first half
                    resultHTML += '<br>\n';
                }
            }

            resultHTML += '<a href="javascript:void(0)" navi_target navi_no_reset class="program-search program-favorite-search">' +
                '<input type="text" vino_ok_text="' + tvii.templates.getLoc("vino.search") + '" maxlength="250"/>' +
                '</a>';

            $(".program-container.favorites-tv-container").html(resultHTML);
            tvii.utils.initTouchEffect();
            setTVFavoriteListeners();

            $(".program-container.favorites-tv-container .program-favorite-search").on("click", function () {
                vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
            })

            $(".program-container.favorites-tv-container .program-favorite-search input").on("change", function () {
                tvii.utils.sendXHR("GET", tvii.url.SEARCH(1, $(this).val(), ""), function (searchResults) {
                    var searchRes = JSON.parse(searchResults).results;
                    if (!searchRes.length) { return; }

                    var firstHalfHTML = '';
                    var secondHalfHTML = '';

                    var $container = $(".program-container.favorites-tv-container");
                    var $br = $container.find('br');
                    var $searchElement = $('.program-container .program-favorite-search');

                    var $beforeBr = $br.prevAll("a");  // Find all <a> elements before <br>
                    var $afterBr = $br.nextAll("a");   // Find all <a> elements after <br>

                    var elementsBeforeBr = $beforeBr.length;
                    var elementsAfterBr = $afterBr.length;

                    // Generate HTML for each program
                    for (var x = 0; x < searchRes.length; x++) {
                        var image = tvii.url.generateTMDBImageUrl(searchRes[x].backdrop_path, 276);
                        var name = searchRes[x].name;
                        var id = searchRes[x].id;

                        // Check if the program with the same id already exists
                        if ($('.program-container.favorites-tv-container').find('[data-program-id="' + id + '"]').length > 0) {
                            continue; // Skip if the anchor already exists
                        }

                        var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="program" ' +
                            'data-program-id="' + id + '">' +
                            '<img src="' + image + '"/>' +
                            '<div class="content">' +
                            '<span class="name">' + name + '</span>' +
                            '<span class="episode"></span>' +
                            '<span class="season"></span>' +
                            '</div>' +
                            '<span class="checked-border"></span>' +
                            '</a>';

                        if (elementsBeforeBr <= elementsAfterBr) {
                            firstHalfHTML += anchor + '\n';
                            elementsBeforeBr++;
                        } else {
                            secondHalfHTML += anchor + '\n'
                            elementsAfterBr++;
                        }
                    }

                    // Always append the first half before <br>
                    $br.before(firstHalfHTML);

                    if ($afterBr.length) {
                        $afterBr.last().after(secondHalfHTML);
                    } else {
                        $br.after(secondHalfHTML);
                    }

                    // Manually update the counts based on where the search element currently is
                    if ($searchElement.prevAll("br").length) {
                        elementsAfterBr--; // Search element is counted in the bottom section
                    } else {
                        elementsBeforeBr--; // Search element is counted in the top section
                    }

                    // Move the search element based on the counts
                    if (elementsBeforeBr < elementsAfterBr) {
                        $br.before($searchElement);
                    } else {
                        $br.nextAll("a").last().after($searchElement);
                    }

                    tvii.utils.initTouchEffect();
                    setTVFavoriteListeners();

                }, function () {
                    // Handle error if necessary
                });
            });


            $(".program-container.favorites-tv-container").css("display", "");
        }, function (xhr) {

        })
    }

    function requestDiscoverMovieFavorites() {

        function setMovieFavoriteListeners() {
            $(".movie-container.favorites-movie-container .movie").each(function () {
                if (!$.data(this, "boundClick")) { // Check if the event is already bound
                    $(this).on("click", function () {
                        vino.soundPlay("SE_A_CHECK_TOUCH_OFF");
                        $(this).toggleClass("selected");
                    });
                    $.data(this, "boundClick", true); // Mark the event as bound
                }
            });

            tvii.utils.handleImageLoading($('.movie-container.favorites-movie-container .movie img'), true);
        }

        if ($(".movie-container.favorites-movie-container .movie").length) {
            favoriteMovieAddScroll.scrCont.scrollLeft(favMX)
            return;
        }

        $(".movie-container.favorites-movie-container").html("");
        $(".movie-container.favorites-movie-container").css("display", "none");

        function getLastWeekDate() {
            var today = new Date();
            var lastWeek = new Date(today);
            lastWeek.setDate(today.getDate() - 7);

            return lastWeek;
        }

        var discoverMovieQuery = "&release_date.gte=" + tvii.utils.getDateInTMDBFormat(getLastWeekDate()) + "&release_date.lte=" + tvii.utils.getDateInTMDBFormat(new Date());


        tvii.utils.sendXHR("GET", tvii.url.DISCOVER(false, discoverMovieQuery, ""), function (responseText) {
            var results = JSON.parse(responseText).results;
            if (!results.length) { return; }
            var resultHTML = '';

            for (var i = 0; i < results.length; i++) {
                var image = tvii.url.generateTMDBImageUrl(results[i].poster_path, 224);
                var name = results[i].title;
                var id = results[i].id;

                var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="movie" ' +
                    'data-movie-id="' + id + '">' +
                    '<img src="' + image + '"/>' +
                    '<div class="content">' +
                    '<span class="name">' + name + '</span>' +
                    '</div>' +
                    '<span class="checked-border"></span>' +
                    '</a>';

                resultHTML += anchor + '\n';
            }

            resultHTML += '<a href="javascript:void(0)" navi_target navi_no_reset class="movie-search movie-favorite-search">' +
                '<input type="text" vino_ok_text="' + tvii.templates.getLoc("vino.search") + '" maxlength="250"/>' +
                '</a>';

            $(".movie-container.favorites-movie-container").html(resultHTML);
            tvii.utils.initTouchEffect();
            setMovieFavoriteListeners();

            $(".movie-container.favorites-movie-container .movie-favorite-search").on("click", function () {
                vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
            })

            $(".movie-container.favorites-movie-container .movie-favorite-search input").on("change", function () {
                tvii.utils.sendXHR("GET", tvii.url.SEARCH(2, $(this).val(), ""), function (searchResults) {
                    var searchRes = JSON.parse(searchResults).results;
                    if (!searchRes.length) { return; }

                    var resultHTML = '';

                    // Generate HTML for each program
                    for (var x = 0; x < searchRes.length; x++) {
                        var image = tvii.url.generateTMDBImageUrl(searchRes[x].poster_path, 224);
                        var name = searchRes[x].title;
                        var id = searchRes[x].id;

                        // Check if the program with the same id already exists
                        if ($('.movie-container.favorites-movie-container').find('[data-movie-id="' + id + '"]').length > 0) {
                            continue; // Skip if the anchor already exists
                        }

                        var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="movie" ' +
                            'data-movie-id="' + id + '">' +
                            '<img src="' + image + '"/>' +
                            '<div class="content">' +
                            '<span class="name">' + name + '</span>' +
                            '</div>' +
                            '<span class="checked-border"></span>' +
                            '</a>';

                        resultHTML += anchor + '\n';
                    }

                    $(".movie-container.favorites-movie-container .movie-favorite-search").before(resultHTML);
                    tvii.utils.initTouchEffect();
                    // Set up event listeners
                    setMovieFavoriteListeners();

                }, function () {
                    // Handle error if necessary
                });
            });


            $(".movie-container.favorites-movie-container").css("display", "");
        }, function (xhr) {

        })

    }

    function setUpTVChannelsFavorites() {

        if (!$(".setup-modal-page-6").data("tvChanFavListener")) {

            $(".search-channel.search-callsign, .search-channel.search-number").on("click", function () {
                vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
            })

            $(".search-channel.search-number input").on("change", function () {
                if (!channelList || !channelList.length) {
                    return;
                }
                favoriteChannelsScroll.stop();

                var searchValue = $(this).val().trim().toUpperCase();
                var regex = new RegExp(searchValue, 'i');

                var matches = channelList.filter(function (channel) {
                    return regex.test(channel.channelNo);
                });

                matches = matches.slice(0, 25);

                var firstHalfHTML = '';
                var secondHalfHTML = '';

                var $container = $(".fav-tv-channels");
                var $br = $container.find('br');
                var $beforeBr = $br.prevAll("a");  // Find all <a> elements before <br>
                var $afterBr = $br.nextAll("a");   // Find all <a> elements after <br>

                var elementsBeforeBr = $beforeBr.length;
                var elementsAfterBr = $afterBr.length;

                for (var i = 0; i < matches.length; i++) {
                    var image = matches[i].thumbnail;
                    var g = image.indexOf('?w=');

                    if (g !== -1) {
                        var updatedStr = image.substring(0, g);
                        g = tvii.url.generateImageUrl("https:" + updatedStr + "?w=95", 0);
                    } else {
                        g = tvii.url.generateImageUrl("https:" + image + "?w=95", 0);
                    }

                    var number = matches[i].channelNo;
                    var id = matches[i].id;
                    var chid = matches[i].channelId;
                    var cs = matches[i].callSign;

                    if ($container.find("a[data-channel-id='" + chid + "']").length > 0) {
                        continue;
                    }

                    var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="channel" ' +
                        'data-channel-id="' + chid + '" ' +
                        'data-channel-cs="' + cs + '" ' +
                        'data-channel-station-id="' + id + '">' +
                        '<img src="' + g + '"/>' +
                        '<span>' + cs + ' ' + number + '</span>' +
                        '<span class="checked-border"></span>' +
                        '</a>';

                    // Distribute matches based on the current length of each section
                    if (elementsBeforeBr <= elementsAfterBr) {
                        firstHalfHTML += anchor + '\n'; // Add to first half (before <br>) if it has fewer or equal items
                        elementsBeforeBr++;
                    } else {
                        secondHalfHTML += anchor + '\n'; // Add to second half (after <br>) if it has fewer items
                        elementsAfterBr++;
                    }
                }

                // Always append the first half before <br>
                $br.before(firstHalfHTML);

                // Append the second half after the last <a> in the container (after <br>)
                if ($afterBr.length) {
                    $afterBr.last().after(secondHalfHTML); // Append after the last <a> after <br>
                } else {
                    $br.after(secondHalfHTML); // If no <a> after <br>, insert after <br>
                }

                tvii.utils.initTouchEffect();
                setFavChnListeners();
                favoriteChannelsScroll.stop();
                $container.animate({
                    scrollLeft: $container[0].scrollWidth
                }, 1000, "swing", function () {
                    favoriteChannelsScroll.stop();
                });
            });

            // Search by call sign (before the space)
            $(".search-channel.search-callsign input").on("change", function () {
                if (!channelList || !channelList.length) {
                    return;
                }
                favoriteChannelsScroll.stop();

                var searchValue = $(this).val().trim().toUpperCase();
                var regex = new RegExp(searchValue, 'i');

                var matches = channelList.filter(function (channel) {
                    return regex.test(channel.callSign);
                });

                matches = matches.slice(0, 25);

                var firstHalfHTML = '';
                var secondHalfHTML = '';

                var $container = $(".fav-tv-channels");
                var $br = $container.find('br');
                var $beforeBr = $br.prevAll("a");  // Find all <a> elements before <br>
                var $afterBr = $br.nextAll("a");   // Find all <a> elements after <br>

                var elementsBeforeBr = $beforeBr.length;
                var elementsAfterBr = $afterBr.length;

                for (var i = 0; i < matches.length; i++) {
                    var image = matches[i].thumbnail;
                    var g = image.indexOf('?w=');

                    if (g !== -1) {
                        var updatedStr = image.substring(0, g);
                        g = tvii.url.generateImageUrl("https:" + updatedStr + "?w=95", 0);
                    } else {
                        g = tvii.url.generateImageUrl("https:" + image + "?w=95", 0);
                    }

                    var number = matches[i].channelNo;
                    var id = matches[i].id;
                    var chid = matches[i].channelId;
                    var cs = matches[i].callSign;

                    // Check if the channel is already in the container to avoid duplication
                    if ($container.find("a[data-channel-id='" + chid + "']").length > 0) {
                        continue;
                    }

                    var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="channel" ' +
                        'data-channel-id="' + chid + '" ' +
                        'data-channel-cs="' + cs + '" ' +
                        'data-channel-station-id="' + id + '">' +
                        '<img src="' + g + '"/>' +
                        '<span>' + cs + ' ' + number + '</span>' +
                        '<span class="checked-border"></span>' +
                        '</a>';


                    // Distribute matches based on the current length of each section
                    if (elementsBeforeBr <= elementsAfterBr) {
                        firstHalfHTML += anchor + '\n'; // Add to first half (before <br>) if it has fewer or equal items
                        elementsBeforeBr++;
                    } else {
                        secondHalfHTML += anchor + '\n'; // Add to second half (after <br>) if it has fewer items
                        elementsAfterBr++;
                    }
                }

                // Always append the first half before <br>
                $br.before(firstHalfHTML);

                // Append the second half after the last <a> in the container (after <br>)
                if ($afterBr.length) {
                    $afterBr.last().after(secondHalfHTML); // Append after the last <a> after <br>
                } else {
                    $br.after(secondHalfHTML); // If no <a> after <br>, insert after <br>
                }

                tvii.utils.initTouchEffect();
                setFavChnListeners();
                favoriteChannelsScroll.stop();
                $container.animate({
                    scrollLeft: $container[0].scrollWidth
                }, 1000, "swing", function () {
                    favoriteChannelsScroll.stop();
                });
            });


            $(".setup-modal-page-6").data("tvChanFavListener", true);
        }

        function setFavChnListeners() {
            $(".fav-tv-channels .channel").each(function () {
                if (!$.data(this, "boundClick")) {
                    $(this).on("click", function () {
                        vino.soundPlay("SE_A_CHECK_TOUCH_OFF");
                        $(this).toggleClass("selected");
                    });
                    $.data(this, "boundClick", true);
                }
            });
        }

        var selectedProvider = $(".provider-container .black-tab.selected"),
            zipcode,
            lineup,
            headend,
            device;

        if (vino.info_getCountry() == "US" && $(".setup-modal.zipcode input.zipnum").val()) {
            zipcode = $(".setup-modal.zipcode input.zipnum").val();
        } else if (vino.info_getCountry() == "CA" && $(".setup-modal.zipcode input.zipkey").val()) {
            zipcode = $(".setup-modal.zipcode input.zipkey").val().replace(/\s/g, '').toUpperCase();
        } else {
            zipcode = null;
        }

        if (selectedProvider.length) {
            lineup = selectedProvider.attr("data-provider-lineup-id")
            headend = selectedProvider.attr("data-provider-headend-id")
            device = selectedProvider.attr("data-provider-device") ? selectedProvider.attr("data-provider-device") : "-"
        }

        var time = new Date().toISOString();
        var country = vino.info_getCountry();

        if (country != "US" && country != "CA") {
            //Country is not supported since its not US or Canada
            $(".tv-channel-type").css("display", "none");
            $(".ch-provider-unsupported").addClass("fadein");
            $(".ch-provider-unsupported").css("display", "");
            return;
        }

        if ($(".fav-tv-channels").attr("data-channel-container-zipcode") === zipcode &&
            $(".fav-tv-channels").attr("data-channel-container-lineup") === lineup &&
            $(".fav-tv-channels").attr("data-channel-container-headend") === headend &&
            $(".fav-tv-channels").attr("data-channel-container-device") === device &&
            $(".fav-tv-channels .channel").length) {
            favoriteChannelsScroll.scrCont.scrollLeft(favChn)
            return;
        }

        $(".chfav").css("display", "none");
        $(".chfav").removeClass("fadein");
        $(".fav-tv-channels").html("");
        $(".tv-channel-type").css("display", "none");

        if (zipcode == null || country == "US" && zipcode.length != 5) {
            //User didnt set up his provider correctly
            $(".ch-provider-zipcodenotsetup").addClass("fadein");
            $(".ch-provider-zipcodenotsetup").css("display", "");
            return;
        }

        if (!selectedProvider.length) {
            //User didnt set up his provider correctly
            $(".ch-provider-providernotsetup").addClass("fadein");
            $(".ch-provider-providernotsetup").css("display", "");
            return;
        }


        tvii.utils.sendXHR("GET", tvii.url.CHANNELS(zipcode, lineup, headend, device, time), function (responseText) {
            favChn = 0;
            $(".tv-channel-type").css("display", "");
            $(".fav-tv-channels").attr("data-channel-container-zipcode", zipcode);
            $(".fav-tv-channels").attr("data-channel-container-lineup", lineup);
            $(".fav-tv-channels").attr("data-channel-container-headend", headend);
            $(".fav-tv-channels").attr("data-channel-container-device", device);
            channelList = JSON.parse(responseText).channels;
            console.log(channelList)
            //Load 50 channels initally
            var initialCh;
            if (channelList.length > 40) {
                initialCh = 40;
            } else {
                initialCh = channelList.length;
            }
            var resultHTML = '';
            var halfwayIndex = Math.floor(initialCh / 2);

            for (var i = 0; i < initialCh; i++) {
                var image = channelList[i].thumbnail;
                var g = image.indexOf('?w=');

                if (g !== -1) {
                    var updatedStr = image.substring(0, g);
                    g = tvii.url.generateImageUrl("https:" + updatedStr + "?w=95", 0);
                } else {
                    g = tvii.url.generateImageUrl("https:" + image + "?w=95", 0);
                }

                var number = channelList[i].channelNo;
                var id = channelList[i].id;
                var chid = channelList[i].channelId;
                var cs = channelList[i].callSign;

                var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="channel" ' +
                    'data-channel-id="' + chid + '" ' +
                    'data-channel-cs="' + cs + '" ' +
                    'data-channel-station-id="' + id + '">' +
                    '<img src="' + g + '"/>' +
                    '<span>' + cs + ' ' + number + '</span>' +
                    '<span class="checked-border"></span>' +
                    '</a>';


                resultHTML += anchor + '\n';

                if (i === halfwayIndex - 1) { // Add <br> after the first half
                    resultHTML += '<br>\n';
                }
            }

            $(".fav-tv-channels").html(resultHTML);
            tvii.utils.initTouchEffect();
            setFavChnListeners();
        }, function (xhr) {

        })

    }

    function setUpSocialMediaLogin() {
        function requestBlueSkyLogin(bskyUser, bskyPass, callbackSuccess, callbackError) {
            vino.loading_setIconAppear(true);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", tvii.clientUrl + "/api/v1/account/BSLinkAttempt");
            xhr.send(JSON.stringify({
                identifier: bskyUser,
                password: bskyPass
            }))

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    vino.loading_setIconAppear(false);
                    if (xhr.status == 200) {
                        if (!xhr.responseText) { return }
                        var r = JSON.parse(xhr.responseText);
                        callbackSuccess(
                            JSON.parse(xhr.responseText),
                            {
                                password: bskyPass,
                                username: bskyUser,
                                handle: r.handle,
                                active: r.active,
                                accessJwt: r.accessJwt,
                                refreshJwt: r.refreshJwt,
                                displayName: r.displayName
                            }
                        );
                    } else {
                        if (!xhr.responseText) { return }
                        callbackError(JSON.parse(xhr.responseText));
                    }
                }
            }
        }

        function requestTwitterCodeActivated(code, callbackSuccess, callbackError) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", tvii.clientUrl + "/api/v1/account/TWCodeCheck?code=" + code);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        if (!xhr.responseText) { return }
                        var r = JSON.parse(xhr.responseText);
                        if (r.status == "verified") {
                            callbackSuccess(r);
                        }
                    } else {
                        if (!xhr.responseText) { return }
                        callbackError(JSON.parse(xhr.responseText));
                    }
                }
            }
        }

        function requestTwitterLoginCode(callbackSuccess, callbackError) {
            vino.loading_setIconAppear(true);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", tvii.clientUrl + "/api/v1/account/TWLinkAttempt");
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    vino.loading_setIconAppear(false);
                    if (xhr.status == 200) {
                        if (!xhr.responseText) { return }
                        var r = JSON.parse(xhr.responseText);
                        callbackSuccess(r);
                    } else {
                        if (!xhr.responseText) { return }
                        callbackError(JSON.parse(xhr.responseText));
                    }
                }
            }
        }

        if (!$(".setup-modal-page-6").data("socialSetupListeners")) { // Check if the event is already bound

            var twttrSuccessInterval;
            var tumblrSuccessInterval;

            /* Support when we implement getting user data to check if bsky has been set before
            (accessing setup wizard on Settings)
            $(".social-media-container .bsky-button").addClass("selected");
            $(".bsky-login-container").find(".bsky-login form").addClass("none");
            $(".bsky-login-container").find(".bsky-login .logged").removeClass("none");
            $(".bsky-login-container").find(".bsky-login .logged>span").text("@" + logins.blueSky.username)
            */
            $(".social-media-container .bsky-button").removeClass("selected");
            $(".bsky-login-container").find(".bsky-login .logged").addClass("none");
            $(".bsky-login-container").find(".bsky-login form").removeClass("none");

            /*
            $(".twttr-login-container").find(".twttr-login form").addClass("none");
            $(".social-media-container .twtt-button").addClass("selected");*/

            $(".twttr-login-container").find(".twttr-login form").removeClass("none");
            $(".social-media-container .twtt-button").removeClass("selected");

            /*
            $(".twttr-login-container").find(".tumblr-login form").addClass("none");
            $(".social-media-container .tumblr-button").addClass("selected");*/

            $(".tumblr-login-container").find(".tumblr-login form").removeClass("none");
            $(".social-media-container .tumblr-button").removeClass("selected");

            /*
            $(".social-media-container .miiverse-button").addClass("selected");
            */
            $(".social-media-container .miiverse-button").removeClass("selected");

            function setTwitterInterval() {
                clearInterval(twttrSuccessInterval);
                twttrSuccessInterval = setInterval(function () {
                    requestTwitterCodeActivated($(".twttr-login .code").text(), function (response) {
                        clearInterval(twttrSuccessInterval);
                        $(".social-media-container .twtt-button").attr("data-twitter-user-id", response.twttr_user_id)
                        $(".social-media-container .twtt-button").attr("data-twitter-oauth-token", response.twttr_oauth_token)
                        $(".social-media-container .twtt-button").attr("data-twitter-oauth-verifier", response.twttr_oauth_verifier)
                        $(".twttr-login .username").text("@" + response.twttr_screen_name);
                        $(".twttr-login form").addClass("none");
                        $(".twttr-login .logged").removeClass("none");
                        $(".social-media-container .twtt-button").addClass("selected");

                        setTimeout(function () {
                            $(".twttr-login-container").removeClass("modal-window-open");
                            $(".twttr-login-container").css("display", "");
                        }, 1000);
                    }, function () {

                    });
                }, 2200);
            }

            $(".social-media-container a").on("click", function () {
                if ($(this).hasClass("miiverse-button")) {
                    vino.soundPlay("SE_A_CHECK_TOUCH_OFF");
                    $(this).toggleClass("selected");

                } else if ($(this).hasClass("bsky-button")) {
                    vino.soundPlay("SE_A_CHECK_TOUCH_OFF");

                    $(".bsky-login-container").toggleClass("modal-window-open");
                    $(".bsky-login-container").css("display", "block");
                } else if ($(this).hasClass("twtt-button")) {
                    vino.soundPlay("SE_A_CHECK_TOUCH_OFF");
                    $(".twttr-login-container").toggleClass("modal-window-open");
                    $(".twttr-login-container").css("display", "block");

                    if (!$(".twttr-login .code").text().length) {
                        requestTwitterLoginCode(function (codeResponse) {
                            $(".twttr-login .code").text(codeResponse.code)

                            setTwitterInterval();
                        }, function () { });
                    } else {
                        //If logged screen can be seen, that means the user did log in
                        if ($(".twttr-login .logged:not(.none)").length) {
                            return;
                        }
                        setTwitterInterval();
                    }

                } else if ($(this).hasClass("tumblr-button")) {
                    vino.soundPlay("SE_A_CHECK_TOUCH_OFF");

                    $(".tumblr-login-container").toggleClass("modal-window-open");
                    $(".tumblr-login-container").css("display", "block");
                }
            })

            $(".bsky-login-container .exit-modal").on("click", function () {
                $(".bsky-login-container").toggleClass("modal-window-open");
                $(".bsky-login-container").css("display", "");
            })

            $(".tumblr-login-container .exit-modal").on("click", function () {
                clearInterval(tumblrSuccessInterval);
                $(".tumblr-login-container").toggleClass("modal-window-open");
                $(".tumblr-login-container").css("display", "");
            })

            $(".twttr-login-container .exit-modal").on("click", function () {
                clearInterval(twttrSuccessInterval);
                $(".twttr-login-container").toggleClass("modal-window-open");
                $(".twttr-login-container").css("display", "");
            })

            $(".bsky-login input").on("input change", function () {
                if ($(".bsky-login .username").val().length < 1) {
                    $(".bsky-login .submit").addClass("disabled");
                    return;
                }

                if ($(".bsky-login .pass").val().length < 1) {
                    $(".bsky-login .submit").addClass("disabled");
                    return;
                }

                if ($(".bsky-login .pass").val().length >= 1 && $(".bsky-login .username").val().length >= 1) {
                    $(".bsky-login .submit").removeClass("disabled");
                }
            });

            //Log out button
            $(".twttr-login .submit").on("click", function () {
                if ($(this).hasClass("disabled")) {
                    return;
                }
                vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
                if (confirm(tvii.templates.getLoc("vino.setup.twttr.confirm1"))) {
                    $(".social-media-container .twtt-button").removeAttr("data-twitter-user-id");
                    $(".social-media-container .twtt-button").removeAttr("data-twitter-oauth-token");
                    $(".social-media-container .twtt-button").removeAttr("data-twitter-oauth-verifier");
                    $(".social-media-container .twtt-button").removeClass("selected");

                    $(".twttr-login .code").text("");

                    $(".twttr-login .username").text("");

                    $(".twttr-login .logged").addClass("none");
                    $(".twttr-login form").removeClass("none");

                    $(".twttr-login-container").removeClass("modal-window-open");
                    $(".twttr-login-container").css("display", "");
                }
            })

            $(".bsky-login form>.submit").on("click", function () {
                var btn = $(this);
                if (btn.hasClass("disabled")) {
                    return;
                }
                vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
                var bskyUser = $(".bsky-login .username");
                var bskyPass = $(".bsky-login .pass");
                btn.addClass("disabled");
                requestBlueSkyLogin(bskyUser.val().replace(/@/g, ''), bskyPass.val(), function (response, data) {
                    $(".social-media-container .bsky-button").attr("data-bsky-password", data.password);
                    $(".social-media-container .bsky-button").attr("data-bsky-username", data.username);

                    btn.removeClass("disabled");
                    $(".social-media-container .bsky-button").addClass("selected");
                    $(".bsky-login-container").find(".bsky-login form").addClass("none");
                    $(".bsky-login-container").find(".bsky-login .logged").removeClass("none");
                    $(".bsky-login-container").find(".bsky-login .logged>span.username").text(data.displayName);
                    $(".bsky-login-container").find(".bsky-login .logged>span:not(.username)").text("@" + data.handle);
                    setTimeout(function () {
                        $(".bsky-login-container").removeClass("modal-window-open");
                        $(".bsky-login-container").css("display", "");
                    }, 1000);
                }, function () {
                    alert(tvii.templates.getLoc("vino.setup.bsky.error1"));
                    btn.removeClass("disabled");
                })
            })

            $(".bsky-login .logged>.submit").on("click", function () {
                if ($(this).hasClass("disabled")) {
                    return;
                }
                vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
                if (confirm(tvii.templates.getLoc("vino.setup.bsky.confirm1"))) {
                    $(".social-media-container .bsky-button").removeAttr("data-bsky-password");
                    $(".social-media-container .bsky-button").removeAttr("data-bsky-username");
                    $(".social-media-container .bsky-button").removeClass("selected");

                    $(".bsky-login-container").find(".bsky-login .logged>span.username").text("");
                    $(".bsky-login-container").find(".bsky-login .logged>span:not(.username)").text("");

                    $(".bsky-login-container").find(".bsky-login .logged").addClass("none");
                    $(".bsky-login-container").removeClass("modal-window-open");
                    $(".bsky-login-container").css("display", "");
                    $(".bsky-login .username").val("");
                    $(".bsky-login .pass").val("");
                    $(".bsky-login-container").find(".bsky-login form").removeClass("none");
                }
            })

            $(".setup-modal-page-6").data("socialSetupListeners", true); // Mark the event as bound
        }
    }

    function changeStatusbar(amount) {
        $(".setup-statusbar>span").css("width", String(amount) + "%");
    }

    $("[data-create-account-confirmation]").on("click", function () {

    })

    $(document).on("modalchange:setup", function (evt, show) {
        if (!BGMisPlaying && show.hasClass("setup-modal-page-2")) {
            vino.soundStopAll();
            vino.soundPlayVolume("SE_APP_START_SUB", 30);
            BGMisPlaying = true;
        } else if (BGMisPlaying && show.hasClass("setup-modal-page-1")) {
            vino.soundStopAll();
            BGMisPlaying = false;
        }
        //Stop scrolling when modal changes
        providerScroll.stop();
        favoriteTVAddScroll.stop();
        favoriteMovieAddScroll.stop();
        favoriteSocialScroll.stop();
        favoriteStreamingScroll.stop();
        favoriteChannelsScroll.stop();
        if (show.hasClass("setup-modal-page-2")) {
            requestProviders();
            changeStatusbar(20);
        } else if (show.hasClass("setup-modal-page-3")) {
            requestDiscoverTVFavorites();
            changeStatusbar(40);
        } else if (show.hasClass("setup-modal-page-4")) {
            requestDiscoverMovieFavorites();
            changeStatusbar(60);
        } else if (show.hasClass("setup-modal-page-5")) {
            requestStreamingProviders();
            changeStatusbar(75);
        } else if (show.hasClass("setup-modal-page-6")) {
            setUpTVChannelsFavorites();
            changeStatusbar(80);
        } else if (show.hasClass("setup-modal-page-7")) {
            setUpSocialMediaLogin();
            changeStatusbar(80);
        } else if (show.hasClass("setup-modal-page-1")) {
            changeStatusbar(0);
        }
    })

});

tvii.router.connect("^[?&]page=home(?:&|$)", function () {
    //Main page, clear previous cache from other pages that may have not been used
    tvii.utils.clearStorage();

    var helpContainer = new tvii.utils.ScrollingContainer($('.help-modal .help-container'), true);

    $(".mii-icon img").attr("src", vino.act_getMiiImage(tvii.userSlot));

    $(".mii-icon").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
    })

    $(".home-buttons a").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
    })

    $(".exit-button").on("click", function () {
        vino.soundPlay("SE_COMMON_FINISH_TOUCH_OFF");
        vino.exit();
    })

    $(".help-button").on("click", function () {
        vino.soundPlay("SE_A_HELP_TOUCH_OFF");
    })

    $(".exit-help").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
    })

    $(".help-button, .exit-help").on("click", function () {
        $(".help-modal").toggleClass("none");
        $(".help-modal").toggleClass("modal-window-open");
    })
});

tvii.router.connect("^[?&]page=settings(?:&|$)", function () {
    tvii.utils.initTabs();

    var settingScroll = new tvii.utils.ScrollingContainer($('.settings-container'), true);
    var toolsScroll = new tvii.utils.ScrollingContainer($('.tools-container'), true);
    var creditScroll = new tvii.utils.ScrollingContainer($('.credits-container'), true);

    var sX;
    var tX;
    var cX;
    var touchMii = 0;

    settingScroll.scrCont.on("scrolling", function (e, data) {
        sX = data.scrollX;
    })

    toolsScroll.scrCont.on("scrolling", function (e, data) {
        tX = data.scrollX;
    })

    creditScroll.scrCont.on("scrolling", function (e, data) {
        cX = data.scrollX;
    })

    $(document).on("tvii:tabchange", function (event, tab) {
        settingScroll.stop();
        toolsScroll.stop();
        creditScroll.stop();

        if (touchMii > 0) {
            touchMii = 0;
            $(".mii-body img").attr("src", vino.act_getMiiImageEx(tvii.userSlot, 7));
        }

        if (tab.attr("data-section") == "about") {
            $(".settings-container").addClass("none");
            $(".tools-container").addClass("none");
            $(".about-container").removeClass("none");

            creditScroll.scrCont.scrollLeft(cX);
        } else if (tab.attr("data-section") == "settings") {
            $(".about-container").addClass("none");
            $(".tools-container").addClass("none");
            $(".settings-container").removeClass("none");

            settingScroll.scrCont.scrollLeft(sX);
        } else {
            $(".settings-container").addClass("none");
            $(".about-container").addClass("none");
            $(".tools-container").removeClass("none");

            toolsScroll.scrCont.scrollLeft(tX);
        }
    })

    //If did go back, then tab query should already exist
    if (tvii.utils.getQuery("scene", true) != null) {
        var query = tvii.utils.getQuery("scene", true);

    } else {
        tvii.utils.triggerTab($('[data-section="settings"]'));
    }

    $(".back-button").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
        history.back();
    })

    $(".home-top").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
        tvii.utils.changePage("?page=home", true);
    })

    $(".settings-container .mii-body").on("click", function () {
        var mii = $(this).find("img");
        var numImages = vino.act_getNum();
        touchMii++;
        vino.soundPlay("SE_WORD_MII");

        if (touchMii >= 100) {
            var randomIndex = Math.floor(Math.random() * numImages) + 1;
            var newImageSrc = vino.act_getMiiImageEx(randomIndex, 7);
            mii.attr("src", newImageSrc);
        }
        mii.css("bottom", "10px");
        setTimeout(function () {
            mii.css("bottom", "0px");
        }, 50);
    });

    $(".tools-container .mii-body").on("click", function () {
        var mii = $(this).find("img");
        vino.soundPlay("SE_WORD_MII");
        mii.css("bottom", "30px");
        setTimeout(function () {
            mii.css("bottom", "0px");
        }, 50);
    })

    $(".settings-buttons a, .tools-buttons a").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
    })

    $(".mii-body img").attr("src", vino.act_getMiiImageEx(tvii.userSlot, 7));
    $(".mii-body span").text(vino.act_getName(tvii.userSlot));
});

tvii.router.connect("^[?&]page=program_view(?:&|$)", function () {
    tvii.utils.initTabs();
    tvii.utils.initToggle();

    var episodesScroll = new tvii.utils.ScrollingContainer($('.program-view-episodes'), true);
    var actorsScroll = new tvii.utils.ScrollingContainer($('.program-view-actors'), true);
    var infoDescScroll = new tvii.utils.ScrollingContainer($('.program-view-info .info>p1'), false);
    var seasonDropScroll = new tvii.utils.ScrollingContainer($('#season-dropdown .dropdown-menu'), true);


    var query;
    var queryS;
    var epiX;
    var actiX;

    var dropX;
    var jsonActorCache = null;
    var seasons = null;
    var program = null;

    if (tvii.utils.getQuery("program_id", true) != null) {
        query = tvii.utils.getQuery("program_id", true);
    }

    seasonDropScroll.scrCont.prev().on("click", function () {
        seasonDropScroll.scrCont.scrollLeft(dropX);
    })

    $(".back-button").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
        history.back();
    })

    $(".home-top").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
        tvii.utils.changePage("?page=home", true);
    })

    episodesScroll.scrCont.on("scrolling", function (e, data) {
        epiX = data.scrollX
    })

    actorsScroll.scrCont.on("scrolling", function (e, data) {
        actiX = data.scrollX
    })

    seasonDropScroll.scrCont.on("scrolling", function (e, data) {
        dropX = data.scrollX
    })

    actorsScroll.scrCont.on("scroll", function () {
        var c = $(this);

        if (c.attr("data-actor-selected")) {
            var scrollLeft = c.scrollLeft();
            var scrollWidth = c.get(0).scrollWidth;
            var containerWidth = c.outerWidth();
            var maxScrollLeft = scrollWidth - containerWidth;

            if (scrollLeft >= maxScrollLeft - 400) {
                getActorsById(query, c.attr("data-actor-selected"), true);
            }
        }
    });

    $(document).on("tvii:tabchange", function (event, tab) {
        seasonDropScroll.stop();
        episodesScroll.stop();
        infoDescScroll.stop();
        actorsScroll.stop();
        switch (tab.attr("data-season")) {
            case "info":
                tvii.utils.replacePageQuery("tab", tab.attr("data-season"));
                tvii.utils.replacePageQuery("season", "");
                $(".program-view-actors").addClass("none");
                $(".program-view-episodes").addClass("none");
                $(".program-view-info").removeClass("none");
                break;
            case "cast-latest":
                tvii.utils.replacePageQuery("tab", tab.attr("data-season"));
                tvii.utils.replacePageQuery("season", "");
                $(".program-view-episodes").addClass("none");
                $(".program-view-info").addClass("none");
                $(".program-view-actors").removeClass("none");

                actorsScroll.scrCont.scrollLeft(actiX);
                getActorsById(query, "latest", false);
                break;
            case "cast-all":
                tvii.utils.replacePageQuery("tab", tab.attr("data-season"));
                tvii.utils.replacePageQuery("season", "");
                $(".program-view-episodes").addClass("none");
                $(".program-view-info").addClass("none");
                $(".program-view-actors").removeClass("none");

                actorsScroll.scrCont.scrollLeft(actiX);
                getActorsById(query, "all", false);
                break;
            default:
                tvii.utils.replacePageQuery("tab", tab.attr("data-season"));
                tvii.utils.replacePageQuery("season", tab.attr("data-season"));
                $(".program-view-actors").addClass("none");
                $(".program-view-info").addClass("none");
                $(".program-view-episodes").removeClass("none");
                episodesScroll.scrCont.scrollLeft(epiX);
                switch (tab.attr("data-season")) {
                    case "schedule":
                        console.log("schedule")
                        break;
                    case "upcoming":
                        var curS = program.next_ep_season;
                        var lastS = $("#season-dropdown .dropdown-menu li:last-child .tab-label").attr("data-season");
                        getEpisodesBySeason(curS != null ? String(curS) : lastS, true);
                        break;
                    default:
                        getEpisodesBySeason(String(tab.attr("data-season")), false);
                        break;
                }
                break;
        }
    })

    function getProgramDetailsById(id) {
        tvii.utils.disableElements($(".tab-label"), true);
        tvii.utils.sendXHR("GET", tvii.url.DETAILS(true, id), function (responseText) {
            var details = JSON.parse(responseText);
            seasons = details.seasons.length;
            program = {
                name: details.name,
                id: details.id,
                backdrop_path: details.backdrop_path,
                next_ep_season: details.next_episode_to_air ? details.next_episode_to_air.season_number : null
            }

            var seasonHTML = '';
            for (var i = 0; i < seasons; i++) {
                console.log(details.seasons);
                console.log(details.seasons[i]);
                var anchor = '<li>' +
                    '<a href="javascript:void(0)" navi_target class="tab-label" ' +
                    (details.seasons[i].episode_count < 1 || details.seasons[i].name == "Specials" ? 'style="display: none"; ' : '') +
                    'data-season="' + details.seasons[i].season_number + '">' +
                    'Season ' + details.seasons[i].season_number +
                    '</a>' +
                    '</li>';

                seasonHTML += anchor + '\n';
            }

            $("#season-dropdown .dropdown-menu").html($("#season-dropdown .dropdown-menu").html() + seasonHTML);

            $(".program-title-big").text(details.name);
            $(".program-title-big").css("display", "block")

            $(".program-poster>img").attr("src", tvii.url.generateTMDBImageUrl(details.poster_path, 200));
            tvii.utils.handleImageLoading($(".program-poster>img"), false);

            $(".program-view-info .info>h1").text(details.name)
            $(".program-view-info .info>p1").text(details.overview);

            $(".program-view-info .info>.metadata>.score").text(String(Math.round(details.vote_average * 10)) + "%");
            $(".program-view-info .info>.metadata>.year").text(details.first_air_date.split("-")[0]);

            if (details.videos.results.length) {
                var video = details.videos.results[0];
                if (video.site == "YouTube") {
                    $(".program-view-trailer").html($(".program-view-trailer").html() +
                        '<video width="560" height="315" controls src="' + '/img/videotest.mp4?key=' + video.key + '&enablejsapi=1" frameborder="0" allowfullscreen></video>'
                    );
                    $(".program-view-trailer>marquee").text(details.name + " : " + video.name)
                    $('.program-view-trailer>video').on('load', function () {
                    });
                    $('.program-view-trailer>video').on('error', function () {
                    });
                    $(".program-view-info .info>.metadata>.trailer").removeClass("none");
                    $(".program-view-info .info>.metadata>.trailer").on("click", function () {
                        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
                    })
                    $(".program-view-trailer>.exit-modal").on("click", function () {
                        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF")
                    })
                    $(".program-view-info .info>.metadata>.trailer, .program-view-trailer>.exit-modal").on("click", function () {
                        $(".program-view-trailer").toggleClass("none");
                        $(".program-view-trailer").toggleClass("modal-window-open-2");
                    })
                }
            }

            if (details.homepage) {
                $(".program-view-info .info>.metadata>.website").attr("data-url-jump", details.homepage);
                $(".program-view-info .info>.metadata>.website").removeClass("none");

                $(".program-view-info .info>.metadata>.website").on("click", function () {
                    vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
                    var url = $(this).attr("data-url-jump");
                    if (url) {
                        if (!vino.runTwoButtonDialog("Do you want to close Nintendo TVii\nand open the website for this\nprogram?", "Cancel", "Yes")) {
                            vino.jumpToBrowser(url, false);
                        }
                    }
                })
            }

            tvii.utils.initTouchEffect();
            tvii.utils.initTabs();
            tvii.utils.initToggle();

            setTimeout(function () {
                if (tvii.utils.getQuery("season", true) != "") {
                    console.log("Query exists")
                    var queryS = tvii.utils.getQuery("season", true);

                    var tab = $('[data-season="' + queryS + '"]');
                    var dropdown = tab.parent().parent().parent();

                    tvii.utils.triggerToggleByOption(dropdown, tab);

                } else if (tvii.utils.getQuery("tab", true) != "") {
                    var queryT = tvii.utils.getQuery("tab", true);
                    if (queryT == "info") {
                        tvii.utils.triggerTab($('[data-season="' + queryT + '"]'))
                    } else {
                        console.log(queryT)
                        var dropdown = $('[data-season="' + queryT + '"]').parent().parent().parent();
                        tvii.utils.triggerToggleByOption(dropdown, $('[data-season="' + queryT + '"]'))
                    }
                } else {
                    tvii.utils.triggerToggleByOption($("#season-dropdown"), $('[data-season="upcoming"]'));
                }

                tvii.utils.disableElements($(".tab-label"), false);
            }, 0);

        }, function () {
            tvii.utils.disableElements($(".tab-label"), false);
        });

    }

    function getActorsById(id, type, offset) {

        if (offset && jsonActorCache != null) {
            var offsetL = $(".program-view-actors .actor").length;
            if (offsetL < jsonActorCache.length) {
                var castHTML = '';
                var limit = offsetL + 10;
                limit = Math.min(limit, jsonActorCache.length);

                for (var y = offsetL; y < limit; y++) {
                    var actor = jsonActorCache[y];
                    var anchor =
                        '<a href="javascript:void(0)" navi_target class="actor" ' +
                        'data-actor-id="' + actor.id + '">' +
                        (actor.profile_path ? '<img src="' + tvii.url.generateTMDBImageUrl(actor.profile_path, 200) + '"/>' : '') +
                        '<div class="content">' +
                        (type == "latest" ? '<span class="character">' + actor.character + '</span>' : '<span class="character">' + actor.roles[0].character + '</span>') +
                        '<span class="actor-name">' + actor.name + '</span>' +
                        '<span class="copy">(c)TheMovieDB.org</span>' +
                        '</div>' +
                        '</a>';

                    castHTML += anchor + '\n';
                }

                // Append the new batch of actors
                $(".program-view-actors").append(castHTML);
                tvii.utils.initTouchEffect();
                tvii.utils.initNaviConfirm($(".program-view-actors .actor"));
                tvii.utils.handleImageLoading($(".program-view-actors .actor img"), true);
            } else {
                console.log("No more actors to load.");
                jsonActorCache = null;
            }
        }

        if (type == $(".program-view-actors").attr("data-actor-selected")) {
            return;
        }

        jsonActorCache = null;
        $(".program-view-actors").html('');
        $(".program-view-actors").attr("data-actor-selected", type);

        var url;
        if (type == "latest") {
            url = tvii.url.CREDITS(true, id, 1);
        } else {
            url = tvii.url.CREDITS(true, id, 2);
        }

        tvii.utils.sendXHR("GET", url, function (responseText) {
            actiX = 0;
            var details = JSON.parse(responseText);
            if (!details.cast || details.cast.length < 1) {
                $(".program-view-actors").html('<p class="container-error">No cast information is available.</p>');
                return;
            }
            var cast = details.cast;
            jsonActorCache = cast;

            var castHTML = '';

            for (var b = 0; b < Math.min(10, cast.length); b++) {
                var actor = cast[b];
                var anchor =
                    '<a href="javascript:void(0)" navi_target class="actor" ' +
                    'data-actor-id="' + actor.id + '">' +
                    (actor.profile_path ? '<img src=" ' + tvii.url.generateTMDBImageUrl(actor.profile_path, 200) + '"/>' : '') +
                    '<div class="content">' +
                    (type == "latest" ? '<span class="character">' + actor.character + '</span>' : '<span class="character">' + actor.roles[0].character + '</span>') +
                    '<span class="actor-name">' + actor.name + '</span>' +
                    '<span class="copy">(c)TheMovieDB.org</span>' +
                    '</div>' +
                    '</a>';

                castHTML += anchor + '\n';
            }

            //When changing screen, not implemented yet
            /*sessionStorage.setItem("actors_program_cache", castHTML);*/

            $(".program-view-actors").html(castHTML);
            tvii.utils.initTouchEffect();
            tvii.utils.initNaviConfirm($(".program-view-actors .actor"));
            tvii.utils.handleImageLoading($(".program-view-actors .actor img"), true);

        }, function () {
            actiX = 0;
        })
    }

    function formatReleaseDate(air_date) {
        // Manually parse the "YYYY-MM-DD" format
        var parts = air_date.split("-");
        var releaseDate = new Date(parts[0], parts[1] - 1, parts[2]); // Month is 0-indexed in JavaScript Date

        var today = new Date();

        // Remove the time part from the dates for accurate comparisons
        today.setHours(0, 0, 0, 0);
        releaseDate.setHours(0, 0, 0, 0);

        var timeDiff = releaseDate.getTime() - today.getTime();
        var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to full days

        var timeString = "";

        if (daysDiff === 0) {
            timeString = "Available today";
        } else if (daysDiff === 1) {
            timeString = "Available tomorrow";
        } else if (daysDiff === -1) {
            timeString = "Available recently";
        } else if (daysDiff > 1) {
            timeString = "Available in " + daysDiff + " days";
        } else if (daysDiff < -1) {
            timeString = "Available " + Math.abs(daysDiff) + " days ago";
        }

        return timeString;
    }

    function getEpisodesBySeason(season, isUpcoming) {
        if ($(".program-view-episodes").attr("data-season-selected") && $(".program-view-episodes").attr("data-season-selected").trim() == season && !isUpcoming) {
            return;
        }

        $(".program-view-episodes").attr("data-season-selected", isUpcoming ? "-1" : season);
        $(".program-view-episodes .episodes").html("");


        tvii.utils.sendXHR("GET", tvii.url.SEASONS(true, query, season), function (responseText) {
            epiX = 0;
            var seasonData = JSON.parse(responseText);

            var episodes = seasonData.episodes;

            if (!episodes.length && isUpcoming) {
                $(".program-view-episodes>.episodes").html('<span class="container-empty">No episodes are set to release on<br>Streaming Video<br>Check Schedule for upcoming TV airings.</span>');
                return;
            } else if (!episodes.length) {
                $(".program-view-episodes>.episodes").html('<span class="container-empty">No episodes are available in this<br>season on either Streaming Video or live TV.</span>');
                return;
            }

            var filteredEpisodes = [];
            var today = new Date();
            today.setHours(0, 0, 0, 0);

            // Filter episodes based on the isUpcoming flag
            for (var a = 0; a < episodes.length; a++) {
                var episode = episodes[a];
                if (!episode.air_date) {
                    continue;
                }
                var parts = episode.air_date.split("-");
                var episodeDate = new Date(parts[0], parts[1] - 1, parts[2]);
                episodeDate.setHours(0, 0, 0, 0);

                if (isUpcoming && episodeDate < today) {
                    // Skip past episodes if isUpcoming is true
                    continue;
                }

                filteredEpisodes.push(episode);
            }

            var seasonHTML = '';
            var halfwayIndex = Math.floor(filteredEpisodes.length / 2);

            //Currently only handle 400 episodes
            if (filteredEpisodes.length > 400) {
                alert("This season contains way too many\nepisodes that can't be shown at all.\nYou will be returned to the Home page now.");
                tvii.utils.changePage("?page=home", true);
                return;
            }

            for (var i = 0; i < filteredEpisodes.length; i++) {
                var episode = filteredEpisodes[i];
                var parts = episode.air_date.split("-");
                var episodeDate = new Date(parts[0], parts[1] - 1, parts[2]);
                episodeDate.setHours(0, 0, 0, 0);

                var timeString = formatReleaseDate(episode.air_date);

                var programName = program.name;

                var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="program episode" ' +
                    'data-episode-id="' + episode.id + '">' +

                    (isUpcoming ?
                        '<div class="date">' +
                        '<span class="time">' + timeString + '</span>' +
                        '</div>'
                        : '') +

                    (episode.still_path ? '<img src="' + tvii.url.generateTMDBImageUrl(episode.still_path, 300) + '"/>' : '<img src="' + tvii.url.generateTMDBImageUrl(program.backdrop_path, 300) + '"/>') +
                    '<div class="content">' +
                    '<span class="name">' + programName + '</span>' +
                    '<span class="episode">' + episode.name + '</span>' +
                    '<span class="season">' + "S" + episode.season_number + ":E" + episode.episode_number +
                    '</span>' +
                    '</div>' +
                    '</a>';

                seasonHTML += anchor + '\n';

                if (i === halfwayIndex - 1) { // Add <br> after the first half
                    seasonHTML += '<br>\n';
                }
            }

            if (seasonHTML.trim() === '' && isUpcoming) {
                $(".program-view-episodes>.episodes").html('<span class="container-empty">No episodes are set to release on<br>Streaming Video<br>Check Schedule for upcoming TV airings.</span>');
                return;
            } else {
                $(".program-view-episodes .episodes").html(seasonHTML);
            }
            setProgramEpisodesListeners();
        }, function (xhr) {
            epiX = 0;
            if (isUpcoming) {
                $(".program-view-episodes>.episodes").html('<span class="container-empty">This season does not have upcoming episodes on<br>either Streaming Video or Live TV.</span>');
                return;
            } else {
                $(".program-view-episodes>.episodes").html('<span class="container-empty">This season does not have available episodes on<br>either Streaming Video or Live TV.</span>');
                return;
            }
            return;
        });
    }


    function setProgramEpisodesListeners() {
        tvii.utils.initTouchEffect();
        tvii.utils.initNaviConfirm($('.program-container .program.episode'));

        $(".program-container .program.episode").each(function () {
            if (!$.data(this, "prgeCL")) {
                $(this).on("click", function (evt) {
                    vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
                    var episodeID = $(this).attr("data-episode-id");

                    tvii.utils.changePage("?page=tvtag_tagline&program_id=" + program.id + "&episode_id=" + episodeID, false);

                });
                $.data(this, "prgeCL", true);
            }
        });
        tvii.utils.handleImageLoading($(".program-container .program.episode img"), true);
    }

    getProgramDetailsById(query);
});

tvii.router.connect("^[?&]page=tvtags(?:&|$)", function () {
    $(".back-button").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
        history.back();
    })

    $(".home-top").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
        tvii.utils.changePage("?page=home", true);
    })
});

tvii.router.connect("^[?&]page=favorites(?:&|$)", function () {
    $(".back-button").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
        history.back();
    })

    $(".home-top").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
        tvii.utils.changePage("?page=home", true);
    })
});

tvii.router.connect("^[?&]page=movies(?:&|$)", function () {
    $(".back-button").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
        history.back();
    })

    $(".home-top").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
        tvii.utils.changePage("?page=home", true);
    })
});


tvii.router.connect("^[?&]page=tvtag_moment(?:&|$)", function () {
    $(".back-button").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
        history.back();
    })

    $(".home-top").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
        tvii.utils.changePage("?page=home", true);
    })

    tvii.utils.setUpHoverToEls($(".tvtag-container.moment-view .comments>.comment .meta>.yeah, .tvtag-container.moment-view .comments>.comment .meta>.reply"))

    var chatScroll = new tvii.utils.ScrollingContainer($('.tvtag-container.moment-view .container'), false);
    var colorsScroll = new tvii.utils.ScrollingContainer($('.doodle-modal ul.colors'), false);

    function setUpDoodleCanvas() {
        //canvas is drawing to canvas, canvaso is the final, and canvasx is the transparent canvas
        var finalDrawingCanvas,
            finalBGCanvas,
            finalBGCanvasContext,
            finalDrawingCanvasContext,
            initialTempCanvas,
            initialTempCanvasContext,
            doodleImg,
            latestCanvas;
        var tool;
        var latestCanvas = null;
        var previousCanvas = null;
        var undoStack = [];
        var redoStack = [];

        function init() {
            finalBGCanvas = document.querySelector('canvas#final');

            finalBGCanvasContext = finalBGCanvas.getContext('2d');

            //canvas with all drawings

            var container = finalBGCanvas.parentNode;

            finalDrawingCanvas = document.createElement('canvas');
            finalDrawingCanvas.id = 'doodle-final-canvas';
            finalDrawingCanvas.width = finalBGCanvas.width;
            finalDrawingCanvas.height = finalBGCanvas.height;

            finalDrawingCanvasContext = finalDrawingCanvas.getContext('2d');
            finalDrawingCanvasContext.lineWidth = 3.0;
            finalDrawingCanvasContext.strokeStyle = "rgba(0,0,0,1)";

            //canvas with temp drawings

            initialTempCanvas = document.createElement('canvas');
            initialTempCanvas.id = 'doodle-temp-canvas';
            initialTempCanvas.width = finalBGCanvas.width;
            initialTempCanvas.height = finalBGCanvas.height;

            //Add both canvas
            container.appendChild(finalDrawingCanvas);
            container.appendChild(initialTempCanvas);

            //Make all drawings happen on inital canvas, we later copy the drawing to the final drawing canvas
            initialTempCanvasContext = initialTempCanvas.getContext('2d');
            initialTempCanvasContext.strokeStyle = "#af0000";
            initialTempCanvasContext.lineWidth = 3.0;

            initialTempCanvas.addEventListener('mousedown', ev_canvas, false);
            initialTempCanvas.addEventListener('mousemove', ev_canvas, false);
            initialTempCanvas.addEventListener('mouseup', ev_canvas, false);
            initialTempCanvas.addEventListener('mousedown', untoggle, false);
        }

        var tools = {};
        // Chalk tool.
        tools.pencil = function () {
            var tool = this;
            this.started = false;
            // Begin drawing with the chalk tool.
            this.mousedown = function (ev) {
                initialTempCanvasContext.beginPath();
                initialTempCanvasContext.lineJoin = "round";
                finalDrawingCanvasContext.globalCompositeOperation = 'source-over';
                initialTempCanvasContext.moveTo(ev._x, ev._y);
                tool.started = true;
            };
            this.mousemove = function (ev) {
                if (tool.started) {
                    initialTempCanvasContext.lineTo(ev._x, ev._y);
                    initialTempCanvasContext.stroke();
                }
            };
            this.mouseup = function (ev) {
                if (tool.started) {
                    tool.mousemove(ev);
                    tool.started = false;
                    img_update();
                }
            };
        };

        tools.eraser = function () {
            var tool = this;
            this.started = false;
            // Begin drawing with the chalk tool.
            this.mousedown = function (ev) {
                finalDrawingCanvasContext.beginPath();
                finalDrawingCanvasContext.lineJoin = "round";
                finalDrawingCanvasContext.globalCompositeOperation = 'destination-out';
                finalDrawingCanvasContext.moveTo(ev._x, ev._y);
                tool.started = true;
            };
            this.mousemove = function (ev) {
                if (tool.started) {
                    finalDrawingCanvasContext.lineTo(ev._x, ev._y);
                    finalDrawingCanvasContext.stroke();
                }
            };
            this.mouseup = function (ev) {
                if (tool.started) {
                    tool.mousemove(ev);
                    tool.started = false;
                }
            };
        };

        //Init default tool(pencil)
        tool = new tools["pencil"]();

        function untoggle() {
            if (tvii.currentToggle != null) {
                tvii.currentToggle.addClass("none");
                $(".dropdown-arrow").removeClass("dropdown-arrow");
                tvii.currentToggle = null;
            }
        }

        function ev_canvas(ev) {

            if (ev.layerX || ev.layerX == 0) { // Firefox
                ev._x = ev.layerX;
                ev._y = ev.layerY;
            } else if (ev.offsetX || ev.offsetX == 0) { // Opera
                ev._x = ev.offsetX;
                ev._y = ev.offsetY;
            }
            // Get the tool's event handler.
            var func = tool[ev.type];
            if (func) {
                func(ev);
            }
        }

        // Create the temporary canvas on top of the canvas, which is cleared each time the user draws.
        function img_update() {
            finalDrawingCanvasContext.drawImage(initialTempCanvas, 0, 0);
            initialTempCanvasContext.clearRect(0, 0, initialTempCanvas.width, initialTempCanvas.height);
        }

        init();
        handleDoodleLoad();

        function handleDoodleLoad() {
            doodleImg = new Image();
            doodleImg.onload = drawMoment;
            doodleImg.onerror = drawWhite;
            doodleImg.src = "/img/tvtagtest1.png";
        }

        function drawMoment() {
            finalBGCanvasContext.drawImage(doodleImg, 0, 0, 732, 412);
        }

        function drawWhite() {
            finalDrawingCanvasContext.fillStyle = "#FFFFFF";
            finalDrawingCanvasContext.fillRect(0, 0, 732, 412);
        }

        function changeColor(color) {
            initialTempCanvasContext.strokeStyle = color;
        }

        function changeStrokeSize(size) {
            initialTempCanvasContext.lineWidth = size;
        }

        function changeEraserStrokeSize(size) {
            finalDrawingCanvasContext.lineWidth = size;
        }

        function cleanMomentDrawAndRedraw() {
            finalDrawingCanvasContext.clearRect(0, 0, finalDrawingCanvas.width, finalDrawingCanvas.height);
        }

        $(".doodle-button").on("click", function () {
            vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
            $(".tvtag-container.moment-view").addClass("none");
            $(".doodle-button").addClass("none");
            $(".back-button").addClass("none");
            $(".remote-button").addClass("none");
            $(".doodle-modal").removeClass("none");
        })

        $(".exit-doodle").on("click", function () {
            vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
            $(".doodle-modal").addClass("none");
            $(".doodle-button").removeClass("none");
            $(".back-button").removeClass("none");
            $(".remote-button").removeClass("none");
            $(".tvtag-container.moment-view").removeClass("none");
        });

        $(".doodle-modal ul.colors li a:not(.input-hex)").on("click", function (evt) {
            untoggle();
            if (!$(".doodle-modal ul li a.pencil").hasClass("selected")) {
                $(".doodle-modal ul li a.pencil").addClass("selected");
                $(".doodle-modal ul li a.eraser").removeClass("selected");
                tool = new tools["pencil"]();
            }
            vino.soundPlay("SE_A_CHECK_TOUCH_OFF");
            $(".doodle-modal ul.colors li a").removeClass("selected");
            $(this).addClass("selected");
            changeColor("#" + $(this).attr('id'));
        })

        $(".doodle-modal ul:not(.colors) li a:not(.dropdown-menu a)").on("click", function () {
            vino.soundPlay("SE_A_TAB_TOUCH_OFF");
        })

        $(".doodle-modal ul.colors").on("scroll", function () {
            untoggle();
        })

        $(".doodle-modal ul li a.clear").on("click", function () {
            var c = $(this);
            c.addClass("selected");
            setTimeout(function () {
                cleanMomentDrawAndRedraw();
                c.removeClass("selected");
            }, 300)
        })

        /*$(".doodle-modal ul li a.undo").on("click", function () {
        restoreLatestCanvas();
        })

        /$(".doodle-modal ul li a.redo").on("click", function () {
        restoreLatestCanvas();
        })*/

        $(".doodle-modal .dropdown-menu.pencil-size a").on("click", function () {
            vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
            if (!$(".doodle-modal ul li a.pencil").hasClass("selected")) {
                $(".doodle-modal ul li a.pencil").addClass("selected");
                $(".doodle-modal ul li a.eraser").removeClass("selected");
                tool = new tools["pencil"]();
            }
            $(".doodle-modal .dropdown-menu.pencil-size a").removeClass("selected");
            $(this).addClass("selected");
            changeStrokeSize(parseInt($(this).attr("data-stroke")), 10);
            untoggle();
        })

        $(".doodle-modal .dropdown-menu.eraser-size a").on("click", function () {
            vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
            if (!$(".doodle-modal ul li a.eraser").hasClass("selected")) {
                $(".doodle-modal ul li a.eraser").addClass("selected");
                $(".doodle-modal ul li a.pencil").removeClass("selected");
                tool = new tools["eraser"]();
            }
            $(".doodle-modal .dropdown-menu.eraser-size a").removeClass("selected");
            $(this).addClass("selected");
            changeEraserStrokeSize(parseInt($(this).attr("data-stroke")), 10);
            untoggle();
        })

        $(".doodle-modal ul.colors li a.input-hex input").on("change", function () {
            if (!$(".doodle-modal ul li a.pencil").hasClass("selected")) {
                $(".doodle-modal ul li a.pencil").addClass("selected");
                $(".doodle-modal ul li a.eraser").removeClass("selected");
                tool = new tools["pencil"]();
            }
            $(".doodle-modal ul.colors li a:not(.input-hex)").removeClass("selected");
            $(this).parent().addClass("selected");
            $(this).parent().find("span").css("background", $(this).val());
            changeColor($(this).val());
            untoggle();
            vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
        })

        //Set up
        $(".doodle-modal ul.colors li a").first().addClass("selected");
        $(".doodle-modal ul li a.pencil").addClass("selected");
        $(".doodle-modal .dropdown-menu.pencil-size a.three").addClass("selected");
        $(".doodle-modal .dropdown-menu.eraser-size a.three").addClass("selected");

        tvii.utils.initToggle();

    }

    function setUpTVTagChat() {
        $(".tvtag-container.moment-view .comments>.comment .meta>.reply").on("mousedown", function (event) {
            event.preventDefault();
            $(this).blur();
        });

        $(".tvtag-container.moment-view .comments>.comment .meta>.reply").on("click", function () {
            $(this).focus();
            vino.wakeKeyboard();
        })

        var fc = $(".tvtag-container.moment-view .comments>.comment:first-child");

        var fch = fc.outerHeight(true);

        $('.tvtag-container.moment-view .container').animate({
            scrollTop: fch
        }, 500);
    }

    setUpTVTagChat();
    setUpDoodleCanvas();

});

tvii.router.connect("^[?&]page=tvtag_tagline(?:&|$)", function () {
    $(".back-button").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
        history.back();
    })

    $(".home-top").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
        tvii.utils.changePage("?page=home", true);
    })

    var taglineScroll = new tvii.utils.ScrollingContainer($('.tvtag-container .container'), false);
    var stationsScroll = new tvii.utils.ScrollingContainer($('.tvtag-container .tvtag-menu #tune-stations .dropdown-menu'), false);
    tvii.utils.initToggle();

    var episode;
    var program;

    if (tvii.utils.getQuery("episode_id", true) != null && tvii.utils.getQuery("program_id", true) != null) {
        console.log("Query exists")
        episode = tvii.utils.getQuery("episode_id", true);
        program = tvii.utils.getQuery("program_id", true);

        requestTagline();

    } else {
    }

    function requestTagline() {
        tvii.utils.sendXHR("GET", tvii.url.TV_TAG_TAGLINE(program, episode), function (text) {
            var response = JSON.parse(text);
            console.log(response)
        }, function (err) {

        })
    }
    //Canvas test

    function initProgramLeftToEnd(startTime, duration, callbackOnEnd) {
        var canvas = document.getElementById('time-left-endtime');
        var ctx = canvas.getContext('2d');
        var canvasSize = 34;
        var totalDuration = duration * 1000;  // Convert duration to milliseconds
        var fps = 60; // Frames per second
        var updateInterval = 1000 / fps;  // Update interval for animation
        var isStarted = false;  // Flag to track if the program has started

        // Get elapsed time since start
        function getElapsedTime() {
            var now = new Date();
            var elapsed = now - startTime;
            return Math.max(0, elapsed); // Return 0 if elapsed time is negative
        }

        // Get remaining time until the start time
        function getTimeUntilStart() {
            var now = new Date();
            var remainingTime = startTime - now;
            return Math.max(0, remainingTime); // Return 0 if remaining time is negative
        }

        // Format the time as h:m:s or m:s
        function formatTime(ms) {
            var totalSeconds = Math.floor(ms / 1000);
            var hours = Math.floor(totalSeconds / 3600);
            var minutes = Math.floor((totalSeconds % 3600) / 60);
            var seconds = totalSeconds % 60;

            if (hours > 0) {
                // Return h:m:s format
                return hours + ':' +
                    (minutes < 10 ? '0' + minutes : minutes) + ':' +
                    (seconds < 10 ? '0' + seconds : seconds);
            } else {
                // Return m:s format
                return minutes + ':' +
                    (seconds < 10 ? '0' + seconds : seconds);
            }
        }

        // Update the span element with the remaining time
        function updateTimeSpan() {
            var timeSpanElement = document.getElementById('time-left-span');

            if (isStarted) {
                var elapsedTime = getElapsedTime();
                var remainingTime = totalDuration - elapsedTime;

                // Ensure remainingTime does not go below zero
                if (remainingTime < 0) {
                    remainingTime = 0;
                }

                var formattedTime = formatTime(remainingTime);
                timeSpanElement.textContent = formattedTime;
            } else {
                var remainingTime = getTimeUntilStart();
                var formattedTime = formatTime(remainingTime);
                if (timeSpanElement != null) {
                    timeSpanElement.textContent = '-' + formattedTime; // Prepend "-" when before start time
                }
            }
        }

        // Draw the Pac-Man shape
        function drawPacman(startAngle, endAngle) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

            ctx.beginPath();
            ctx.moveTo(canvasSize / 2, canvasSize / 2);  // Move to the center of the canvas
            ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2, startAngle, endAngle); // Draw arc
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
        }

        // Animate the Pac-Man and update the time span
        function animatePacman() {
            var elapsedTime = getElapsedTime();
            var progress = Math.min(elapsedTime / totalDuration, 1);  // Ensure progress is between 0 and 1
            var startAngle = 1.5 * Math.PI;  // Fixed starting point (top-open, right-facing "L")
            var endAngle = startAngle + (progress * 2 * Math.PI);  // Progressively closes the mouth

            if (isStarted) {
                drawPacman(startAngle, endAngle);
            }
            updateTimeSpan();

            if (isStarted && progress >= 1) {
                clearInterval(tvii.tvTagProgramLeftInterval);
                document.getElementById('time-left-span').textContent = '00:00';
                callbackOnEnd();
            }
        }

        // Initialize the timer
        function startTimer() {
            tvii.tvTagProgramLeftInterval = setInterval(animatePacman, updateInterval);
        }

        // Check if the program has started and initialize accordingly
        function checkStartTime() {
            var now = new Date();
            if (now >= startTime) {
                isStarted = true;
                startTimer();
            } else {
                updateTimeSpan();
                setTimeout(checkStartTime, updateInterval);
            }
        }

        checkStartTime();
    }

    // Example usage

    /*var startTime = new Date(); // Replace with actual start time
    startTime.setMinutes(startTime.getMinutes() - 2); // 2 minutes ago
    var duration = 30 * 60; // 30 minutes*/
    var duration = 12 * 60; // 4 minutes

    initProgramLeftToEnd(1727239423766, duration, function () {
        console.log("YAY!");
    });

});

tvii.router.connect("^[?&]page=tv(?:&|$)", function () {

    tvii.utils.initTabs();
    tvii.utils.initToggle();

    var showScroll = new tvii.utils.ScrollingContainer($('.program-container'), true);
    var guideScroll = new tvii.utils.ScrollingContainer($('.tv-guide-container .guide-content'), 4);
    var strCount = 1;
    var isRequesting = false;
    var pstateScrollX = 0;

    $(document).on("tvii:tabchange", function (event, tab) {
        checkTab(tab.attr("data-section"));
    })

    guideScroll.scrCont.on("scrolling", function () {
        var y = guideScroll.scrCont.scrollTop();
        var x = guideScroll.scrCont.scrollLeft();
        $(".tv-guide-container .channels").scrollTop(y);
        $(".tv-guide-container .hours").scrollLeft(x);
    });

    showScroll.scrCont.on("scroll", function () {
        var c = $(this);

        if (c.attr("data-scrollmore-query")) {
            var scrollLeft = c.scrollLeft();
            var scrollWidth = c.get(0).scrollWidth;
            var containerWidth = c.outerWidth();
            var maxScrollLeft = scrollWidth - containerWidth;

            if (scrollLeft >= maxScrollLeft - 50) {
                if (c.attr("data-scrollmore-type") === "streaming") {
                    requestStreamingPrograms(c.attr("data-scrollmore-query"), true);
                }
            }
        }
    });

    if (tvii.utils.getQuery("scrollX", true) != null) {
        var query = tvii.utils.getQuery("scrollX", true);
        pstateScrollX = parseInt(query, 10);
    }

    //If did go back, then tab query should already exist
    if (tvii.utils.getQuery("tab", true) != null) {
        console.log("Query exists")
        var query = tvii.utils.getQuery("tab", true);

        var tab = $('[data-section="' + query + '"]');
        var dropdown = tab.parent().parent().parent();

        tvii.utils.triggerToggleByOption(dropdown, tab);

    } else {
        tvii.utils.triggerToggleByOption($("#live-tv-dropdown"), $('[data-section="now"]'));
    }


    $(".back-button").on("click", function () {
        vino.soundPlay("SE_A_CLOSE_TOUCH_OFF");
        clearProgramContainerCache();
        history.back();
    })

    $(".home-top").on("click", function () {
        vino.soundPlay("SE_A_DECIDE_TOUCH_OFF");
        clearProgramContainerCache();
        tvii.utils.changePage("?page=home", true);
    })

    function getTodayDate() {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1; // Months are zero-based, so add 1
        var day = today.getDate();

        // Function to ensure two digits
        function twoDigits(value) {
            return value < 10 ? '0' + value : value;
        }

        return year + '-' + twoDigits(month) + '-' + twoDigits(day);
    }

    function getYesterdayDate() {
        var today = new Date();
        // Subtract one day from the current date
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        var year = yesterday.getFullYear();
        var month = yesterday.getMonth() + 1; // Months are zero-based, so add 1
        var day = yesterday.getDate();

        // Function to ensure two digits
        function twoDigits(value) {
            return value < 10 ? '0' + value : value;
        }

        return year + '-' + twoDigits(month) + '-' + twoDigits(day);
    }

    function getDate30DaysBeforeToday() {
        var today = new Date();
        today.setDate(today.getDate() - 30); // Subtract 30 days
        var year = today.getFullYear();
        var month = today.getMonth() + 1; // Months are zero-based, so add 1
        var day = today.getDate();

        // Function to ensure two digits
        function twoDigits(value) {
            return value < 10 ? '0' + value : value;
        }

        return year + '-' + twoDigits(month) + '-' + twoDigits(day);
    }

    function getDate30DaysFromToday() {
        var today = new Date();

        // Add 30 days to the current date
        today.setDate(today.getDate() + 30);

        var year = today.getFullYear();
        var month = today.getMonth() + 1; // Months are zero-based, so add 1
        var day = today.getDate();

        // Function to ensure two digits
        function twoDigits(value) {
            return value < 10 ? '0' + value : value;
        }

        return year + '-' + twoDigits(month) + '-' + twoDigits(day);
    }

    function setProgramContainerCache() {
        //If page is way too big, clean cache if exists and not use it so page reloads
        if ($(".program-container").children().length > 600) {
            clearProgramContainerCache();
            return;
        }

        var cache = {
            html: $(".program-container").html(),
            scrollmore_query: $('.program-container').attr("data-scrollmore-query"),
            scrollmore_type: $('.program-container').attr("data-scrollmore-type"),
            scrollmore_finish: $('.program-container').attr("data-scrollmore-finish"),
            page: strCount
        }
        sessionStorage.setItem("program-container", JSON.stringify(cache));
    }

    function clearProgramContainerCache() {
        sessionStorage.removeItem("program-container");
    }

    function restoreProgramContainerCache() {
        $(".program-container").css("display", "none");
        var c = sessionStorage.getItem("program-container");
        var d = JSON.parse(c);

        clearProgramContainerCache();

        $(".program-container").html(d.html);
        $(".program-container").attr("data-scrollmore-query", d.scrollmore_query);
        $(".program-container").attr("data-scrollmore-type", d.scrollmore_type);
        $(".program-container").attr("data-scrollmore-finish", d.scrollmore_finish);
        strCount = d.page;

        $(".program-container").css("display", "block");
        scrollToState();
        setProgramListeners();
    }

    function isProgramContainerCacheAvailable() {
        var c = sessionStorage.getItem("program-container");
        if (c != null) {
            return true;
        }
        return false;
    }

    function scrollToState() {
        if (pstateScrollX != 0) {
            showScroll.scrCont.scrollLeft(pstateScrollX);
            pstateScrollX = 0;
        }
    }

    function setProgramListeners() {
        tvii.utils.initTouchEffect();
        tvii.utils.initNaviConfirm($('.program-container .program'));

        $(".program-container .program").each(function () {
            if (!$.data(this, "prgcL")) {
                $(this).on("click", function (evt) {
                    tvii.utils.replacePageQuery("scrollX", showScroll.getScrollX());
                    setProgramContainerCache();
                    vino.soundPlay("SE_A_SWITCH_TOUCH_OFF");
                    var programID = $(this).attr("data-program-id");
                    tvii.utils.changePage("?page=program_view&program_id=" + programID + "&season=upcoming", false);
                });
                $.data(this, "prgcL", true);
            }
        });
        tvii.utils.handleImageLoading($(".program-container .program img"), true);
    }

    function checkTab(tab) {
        showScroll.stop();
        tvii.utils.abortOngoingXHR();
        tvii.utils.replacePageQuery("tab", tab);
        strCount = 1;

        $('.program-container').removeAttr("data-scrollmore-query");
        $('.program-container').removeAttr("data-scrollmore-type");
        $('.program-container').removeAttr("data-scrollmore-finish");

        if (isProgramContainerCacheAvailable()) {
            restoreProgramContainerCache();
            return;
        }
        switch (tab) {
            case "now":
                console.log("hi")
                requestLivePrograms("?date=" + "");
                break;
            case "30min":
                requestLivePrograms("?date=" + "");
                break;
            case "1hr":
                requestLivePrograms()
                break;
            case "grid":
                requestTVGrid();
                break;
            case "friends-live":
                requestLivePrograms()
                break;
            case "trending-next":
                requestStreamingPrograms("&watch_region=" + vino.info_getCountry() + "&air_date.gte=" + getTodayDate() + "&air_date.lte=" + getDate30DaysFromToday() + "&screened_theatrically=false&with_watch_providers=8|9|390|2&sort_by=popularity.asc");
                break;
            case "trending-month":
                requestStreamingPrograms("&watch_region=" + vino.info_getCountry() + "&air_date.gte=" + getDate30DaysBeforeToday() + "&screened_theatrically=false&air_date.lte=" + getTodayDate() + "&with_watch_providers=8|9|390|2&sort_by=popularity.desc");
                break;
            case "popular":
                requestStreamingPrograms("&watch_region=" + vino.info_getCountry() + "&screened_theatrically=false&with_watch_providers=8|9|390|2&sort_by=vote_average.desc&vote_count.gte=200");
                break;
            case "friends-streaming":
                requestLivePrograms()
                break;
            default:
                break;
        }
    }

    function requestTVGrid() {
        $('.program-container').addClass("none");
        $(".tv-guide-container").removeClass("none");

        //Placeholder data until we implement login
        var userProvider = {
            lineup: "DITV501",
            zipcode: "00501",
            headend: "DITV501",
            country: "USA",
            device: "X",
            pref: "16,128",
            DSTUTCOffset: "-240",
            primetime: "20",
            StdUTCOffset: "-300",
            DSTEnd: "2024-11-03T02:00Z",
            DSTStart: "2024-03-10T02:00Z",
            timezonekey: "ET",
        };


        //Show 6 hours of the guide since start
        var timespan = "6";
        var hourToStartGuide = "11:00 AM";

        function getUnixStartDateForGuide(hour, date) {
            // If no date is passed, default to the current date
            if (!date) {
                date = new Date();
            }

            // Split the input to get time and modifier (AM/PM)
            var timeParts = hour.split(" ");
            var time = timeParts[0]; // First part (e.g., "12:00")
            var modifier = timeParts[1]; // Second part (e.g., "AM")

            var hourParts = time.split(":");
            var hours = hourParts[0]; // First part of time (e.g., "12")
            var minutes = hourParts[1]; // Second part of time (e.g., "00")

            // Convert to 24-hour format based on AM/PM
            if (modifier === "PM" && hours !== "12") {
                hours = parseInt(hours, 10) + 12; // Convert PM to 24-hour format
            } else if (modifier === "AM" && hours === "12") {
                hours = "0"; // Midnight case
            }

            // Convert to numbers
            hours = parseInt(hours, 10);
            minutes = parseInt(minutes, 10) || 0;

            // Use Date.UTC to create a UTC date ignoring the timezone
            var utcDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), hours, minutes, 0);

            // Add 4 hours (4 * 60 * 60 seconds)
            var offsetInSeconds = 4 * 60 * 60;
            var unixTimestamp = Math.floor(utcDate / 1000) + offsetInSeconds;

            return unixTimestamp;
        }


        //Refresh the correct timezones
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://tvschedule.zap2it.com/gapzap_webapi/api/Providers/GetDstOffsetForPostalByCountry/00501/USA/en");
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var nT = JSON.parse(xhr.responseText);
                    userProvider.DSTEnd = nT.DSTEnd;
                    userProvider.DSTStart = nT.DSTStart;
                    userProvider.DSTUTCOffset = nT.DSTUTCOffset;
                    userProvider.StdUTCOffset = nT.StdUTCOffset;
                    userProvider.primetime = nT.primetime;
                    userProvider.timezonekey = nT.timezonekey;

                    finishGridRequest();
                }
            }
        }

        //Checks if we are in DST to use Zap2Its time offset per zip code (their guides are in a hardcoded timezone, we need this.)
        function getTimezoneOffset() {
            const currentDate = new Date(); // Get current date in local time
            const currentYear = currentDate.getUTCFullYear();

            // Manually calculate DST start and end for the current year (as UTC dates)
            const dstStart = new Date(Date.UTC(currentYear, 2, 10, 2, 0, 0)); // DST starts on March 10 at 2:00 AM UTC
            const dstEnd = new Date(Date.UTC(currentYear, 10, 3, 2, 0, 0)); // DST ends on November 3 at 2:00 AM UTC

            // Convert current time to UTC for comparison
            const currentUtcDate = new Date(
                Date.UTC(
                    currentDate.getUTCFullYear(),
                    currentDate.getUTCMonth(),
                    currentDate.getUTCDate(),
                    currentDate.getUTCHours(),
                    currentDate.getUTCMinutes(),
                    currentDate.getUTCSeconds()
                )
            );

            // Check if the current UTC date is within the DST period
            if (currentUtcDate >= dstStart && currentUtcDate < dstEnd) {
                return parseInt(userProvider.DSTUTCOffset, 10);  // DST UTC offset
            }

            // If outside of DST, return the standard UTC offset
            return parseInt(userProvider.StdUTCOffset, 10);
        }


        function adjustProgramDateByOffset(utcTime) {
            // Parse the UTC time to a Date object
            var programDate = new Date(utcTime);

            // Get the timezone offset (in minutes) - you said this returns something like -240 for your case
            var offsetInMinutes = getTimezoneOffset();

            // Apply the manual offset correctly (add the minutes offset if negative)
            programDate.setMinutes(programDate.getUTCMinutes() + offsetInMinutes);

            // Return the adjusted time (in UTC still)
            return programDate;  // Return in ISO format for UTC time
        }

        function formatGuideStartTime(timeStr) {
            // Split the input to get time and AM/PM modifier
            var timeParts = timeStr.split(" ");
            var time = timeParts[0]; // First part (e.g., "12:00")
            var modifier = timeParts[1]; // Second part (e.g., "AM")

            var hourParts = timeStr.split(":");
            var hours = hourParts[0]; // First part of time (e.g., "12")
            var minutes = hourParts[1]; // Second part of time (e.g., "00")

            // Convert hours and minutes to integers
            hours = parseInt(hours, 10);
            minutes = parseInt(minutes, 10) || 0;

            // Convert to 24-hour format if needed
            if (modifier === "PM" && hours !== 12) {
                hours += 12;
            } else if (modifier === "AM" && hours === 12) {
                hours = 0; // Midnight case
            }

            // Create a new Date object, starting with today's date
            var today = new Date();
            today.setHours(hours, minutes, 0, 0); // Set the hour, minutes, and seconds to the parsed time

            return today;
        }

        function formatGuideStartTimeUTC(timeStr) {
            // Split the input to get time and AM/PM modifier
            var timeParts = timeStr.split(" ");
            var time = timeParts[0]; // First part (e.g., "12:00")
            var modifier = timeParts[1]; // Second part (e.g., "AM")

            var hourParts = time.split(":"); // Split the time into hours and minutes
            var hours = hourParts[0]; // First part of time (e.g., "12")
            var minutes = hourParts[1]; // Second part of time (e.g., "00")

            // Convert hours and minutes to integers
            hours = parseInt(hours, 10);
            minutes = parseInt(minutes, 10) || 0;

            // Convert to 24-hour format if needed
            if (modifier === "PM" && hours !== 12) {
                hours += 12;
            } else if (modifier === "AM" && hours === 12) {
                hours = 0; // Midnight case
            }

            // Get the current date
            var today = new Date();

            // Use Date.UTC to create a UTC date ignoring the local timezone
            var utcDate = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), hours, minutes, 0);

            return new Date(utcDate); // Return a Date object in UTC
        }

        function formatTimeForGuideStart(date) {
            // Get hours and minutes from the date
            var hours = date.getHours();
            var minutes = date.getMinutes();

            // Determine AM/PM and convert to 12-hour format
            var period = (hours >= 12) ? 'PM' : 'AM';
            hours = hours % 12;
            hours = (hours === 0) ? 12 : hours; // Convert 0 hours to 12 for AM/PM format

            // Format minutes to always be 2 digits
            var formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;

            return hours + ':' + formattedMinutes + ' ' + period;
        }

        //Clear guide before re-requesting
        $(".tv-guide-container .channels").html("");
        $(".tv-guide-container .guide-content").html("");
        $(".tv-guide-container .hours").html("");

        function finishGridRequest() {
            tvii.utils.sendXHR("GET", tvii.url.GUIDE(userProvider.zipcode,
                userProvider.lineup,
                userProvider.headend,
                timespan,
                userProvider.country,
                userProvider.device,

                getUnixStartDateForGuide(hourToStartGuide),
                userProvider.pref),

                function (responseText) {
                    var guide = JSON.parse(responseText);
                    var channels = guide.channels;

                    var mins = timespan * 2;
                    var initialTime = formatGuideStartTime(hourToStartGuide);

                    var todayDiv = $('<span>').text("Today");
                    $(".tv-guide-container .hours").append(todayDiv);

                    for (var r = 0; r < mins; r++) {
                        var formattedTime = formatTimeForGuideStart(initialTime);
                        var timeDiv = $('<span>').text(formattedTime);

                        // Append the time div to the container
                        $(".tv-guide-container .hours").append(timeDiv);

                        // Increment the time by 30 minutes for the next iteration
                        initialTime.setMinutes(initialTime.getMinutes() + 30);
                    }

                    // Loop through channels and append to the guide
                    //Handle 50 channels for now
                    for (var i = 0; i < 50; i++) {
                        var chaA = $("<a>");
                        chaA.text(channels[i].callSign + " " + channels[i].channelNo);
                        $(".tv-guide-container .channels").append(chaA);

                        var chAList = $("<div>");
                        var programs = channels[i].events;

                        for (var y = 0; y < programs.length; y++) {
                            var pA = $("<a>");
                            var pASh = $("<h1>");
                            var pAEn = $("<span>");

                            var duration = parseInt(programs[y].duration, 10);
                            var startTime = programs[y].startTime;
                            var endTime = programs[y].endTime;

                            var adjustedStartTime = adjustProgramDateByOffset(startTime);
                            var adjustedEndTime = adjustProgramDateByOffset(endTime);

                            var adjustedGuideStartTime = formatGuideStartTimeUTC(hourToStartGuide);

                            var startDifference = adjustedStartTime.getTime() - adjustedGuideStartTime.getTime();

                            // Convert the difference to minutes
                            var differenceInMinutes = Math.floor(startDifference / (1000 * 60));

                            if (differenceInMinutes < 0) { // Change this condition to check for negative difference
                                // Program starts before the guide starts
                                duration = Math.max(0, duration + differenceInMinutes); // Adjust duration correctly
                            }

                            if (y === 0) {
                                console.log("Adjusted Program:", programs[y].program.title);
                                console.log("Duration:", duration)
                                console.log("Adjusted OG Start Time:", startTime);
                                console.log("Adjusted Start Time:", adjustedStartTime);
                                console.log("Guide Start Date:", adjustedGuideStartTime)
                                console.log("Adjusted Difference:", differenceInMinutes)
                            }

                            /*console.log(adjustProgramDateByOffset(startTime))*/

                            pASh.text(programs[y].program.title);
                            if (programs[y].program.episodeTitle != null) {
                                pAEn.text(programs[y].program.episodeTitle);
                            } else {
                                pAEn.text("");
                                pA.addClass("noep");
                            }

                            if (programs[y].flag.length) {
                                if (programs[y].flag.indexOf("New") !== -1) {
                                    pA.addClass("new");
                                }
                            }

                            var pixelsPerMinute = 180 / 30;  // 6 pixels per minute
                            var programWidth = duration * pixelsPerMinute;
                            pA.css("width", programWidth + "px");

                            pA.append(pASh);
                            pA.append(pAEn);
                            chAList.append(pA);
                        }

                        $(".tv-guide-container .guide-content").append(chAList);
                    }


                }, function (xhr) {
                })
        }
    }

    function requestStreamingPrograms(query, isOffset) {
        $(".tv-guide-container").addClass("none");
        $(".program-container").removeClass("none");

        if (isRequesting || $('.program-container').attr("data-scrollmore-finish") && $('.program-container').attr("data-scrollmore-finish") == "1") {
            return;
        }

        isRequesting = true;

        if (!isOffset) {
            $('.program-container').html("");
        }

        if (isOffset) {
            var firstHalfHTML = '';
            var secondHalfHTML = '';
        }

        tvii.utils.sendXHR("GET", tvii.url.DISCOVER(true, query), function (responseText) {
            strCount++;

            var results = JSON.parse(responseText).results;
            var page = JSON.parse(responseText).page;
            var pages_length = JSON.parse(responseText).total_pages;
            if (!results.length || page > pages_length) {
                isRequesting = false;
                if (page > pages_length) {
                    $('.program-container').attr("data-scrollmore-finish", "1");
                }
                return;
            }
            var resultHTML = '';
            var halfwayIndex = Math.floor(results.length / 2);

            for (var i = 0; i < results.length; i++) {
                var backdrop_path = results[i].backdrop_path;
                var image = tvii.url.generateTMDBImageUrl(backdrop_path, 300);
                var name = results[i].name;
                var id = results[i].id;

                var anchor = '<a href="javascript:void(0)" navi_target navi_no_reset class="program" ' +
                    'data-program-id="' + id + '">' +
                    (backdrop_path ? '<img src="' + image + '"/>' : '') +
                    '<div class="content">' +
                    '<span class="name">' + name + '</span>' +
                    '<span class="episode"></span>' +
                    '<span class="season"></span>' +
                    '</div>' +
                    '</a>';


                if (isOffset) {
                    if (i < halfwayIndex) {
                        firstHalfHTML += anchor + '\n';
                    } else {
                        secondHalfHTML += anchor + '\n';
                    }
                } else {
                    resultHTML += anchor + '\n';

                    if (i === halfwayIndex - 1) {
                        resultHTML += '<br>\n';
                    }
                }
            }

            if (!$('.program-container').attr("data-scrollmore-query")) {
                $('.program-container').attr("data-scrollmore-query", query + "&page=" + strCount);
            } else {
                var regex = /(&page=)[^&]*/;

                if (regex.test($('.program-container').attr("data-scrollmore-query"))) {
                    var at = $('.program-container').attr("data-scrollmore-query").replace(regex, '$1' + strCount);
                    $('.program-container').attr("data-scrollmore-query", at);
                }
            }

            $('.program-container').attr("data-scrollmore-type", "streaming");
            $('.program-container').attr("data-scrollmore-finish", "0");

            if (isOffset) {
                var $container = $(".program-container");
                var $br = $container.find('br');
                var $searchBefore = $(".program-container a:last-child")

                var elementsBeforeBr = $br.prevAll().length;
                var elementsAfterBr = $br.nextAll().length;

                console.log("Elements before <br>:", elementsBeforeBr);
                console.log("Elements after <br>:", elementsAfterBr);
                $br.before(firstHalfHTML);
                $searchBefore.after(secondHalfHTML);

            } else {
                $('.program-container').html(resultHTML);
            }

            if (pstateScrollX) {
                showScroll.scrCont.scrollLeft(pstateScrollX);
                pstateScrollX = 0;
            }

            scrollToState();
            setProgramListeners();
            isRequesting = false;
        }, function (xhr) {
            isRequesting = false;
        })
    }

    function requestLivePrograms(query, isOffset) {
        $(".tv-guide-container").addClass("none");
        $(".program-container").removeClass("none");
    }

    //Initial autochange
});
