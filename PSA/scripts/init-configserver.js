rs.initiate(
   {
      _id: "rs-config-server",
      configsvr: true,
      version: 1,
      members: [
         { _id: 0, host : "mongo_configsvr01:27017" },
         { _id: 1, host : "mongo_configsvr02:27017" },
         { _id: 2, host : "mongo_configsvr03:27017" }
      ]
   }
)
