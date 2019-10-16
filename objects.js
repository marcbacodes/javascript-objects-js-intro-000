var playlist={artistName: "Coldplay",songTitle: "Lost!"};

function updatePlaylist(playlist,artistName,songTitle){

  return Object.assign({},playlist,{artistName:["My Bloody Valentine"]},{songTitle:["Lost!"]});
}
