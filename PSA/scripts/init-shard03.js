rs.initiate(
   {
      _id: "rs-shard-03",
      version: 1,
      members: [
         { _id: 0, host : "mongo_shard03-a:27017" },
         { _id: 1, host : "mongo_shard03-b:27017" }
      ]
   }
)
