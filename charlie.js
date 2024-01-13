var charlie = {
    "getImages": function(requestCount, random){
        var req = new XMLHttpRequest
        req.open("GET", "https://raw.githubusercontent.com/redwoodsteve/database-charlie/main/charliedb.json")
        req.send()
        req.onload = (event) => {
            var db = JSON.parse(req.responseText)
            let e = []
            console.log("Loaded database")
            for(var i=0;i<requestCount;i++){
                if(random){
                    var entry = db.imageMap[Math.floor(Math.random() * db.imageMap.length)]
                    if(!e.includes(entry)){
                        e.push(entry)
                    }else{
                        i--
                    }
                }
            }
            console.info("Loaded "+requestCount+" images of charlie")
            console.log(e)
            return e
        }
        req.onerror = (event) => {
            console.error("Database failed to load")
        }
        req.ontimeout = (event) => {
            console.warn("Request timed out")
        }
    }
}