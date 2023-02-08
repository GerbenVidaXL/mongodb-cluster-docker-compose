rs.initiate(
   {
      _id: "rs-shard-01",
      version: 1,
      members: [
         { _id: 0, host : "mongo_shard01-a:27017" },
         { _id: 1, host : "mongo_shard01-b:27017" }
      ]
   }
)
