rs.initiate(
   {
      _id: "rs-shard-02",
      version: 1,
      members: [
         { _id: 0, host : "mongo_shard02-a:27017" },
         { _id: 1, host : "mongo_shard02-b:27017" }
      ]
   }
)
