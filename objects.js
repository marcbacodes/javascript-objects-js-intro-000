var playlist={artistName: "Coldplay",song: "Lost!"};

function updatePlaylist(object,artistName,song){

  return Object.assign({},object,{artistName:"Coldplay"},{song:"Lost!"});
}
