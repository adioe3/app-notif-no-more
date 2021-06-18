exportFunction(function(proto, url, title){
    console.log("Blocked annoying 'add as app' notification for protocol", proto, "on", url);
}, window.navigator, { defineAs: "registerProtocolHandler" });
console.log("Loaded annoying app notification blocker");

